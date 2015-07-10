
//Definindo rota para pagina inicial e outras rotas
Router.map(function() {
  console.log('Definindo as rotas');	
  this.route('inicial', {path: '/'});
  this.route('tarefas', {path: 'tarefas'});
  this.route('usuario', {path: 'usuario'});
  this.route('calendario', {path: 'calendario'});
});

//Add rota para script externo (calendario pt)
Router.map(function() {
  this.route('calendar',{
    waitOn: function() {
        return [
            IRLibLoader.load('locale_pt.js')
        ]
    }
  });
});

//Criando colecao para armazenar as tarefas
colecaoTarefas = new Mongo.Collection("colecaoTarefas");


if(Meteor.isServer) {
	console.log("Server running! ");
	Meteor.startup(function () {
		
	});
}

if (Meteor.isClient) {
	Meteor.startup(function () {
			
		 //Renderizando template do calendario
		 Template.calendario.onRendered(function() {
			scheduler.init("scheduler_here", new Date(), "month");
		 });		 
	});

} //FIM isClient

//Login
Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });


/* Algumas bibliotecas(packages ou arquivos externos) 
   sao necessarias para execucao de alguns trechos 
   de codigo. Elas sao adicionadas pelo meteor 
   automaticamente ou atraves do comando
	
			meteor add <package>
   
   ou atraves de rotas (arquivo externo) 	

   Adições realizadas:
   
   iron:router (pacote para rotas)   
   dhtmlx:scheduler (pacote para calendario)
   mizzao:bootstrap-3 (pacote para o bootstrap)
   maximdubrovin:wait-on-lib-js (addon para inserir 
                                 script externo)   
*/
