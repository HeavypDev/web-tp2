Package.describe({
  name: 'data',
  version: '0.0.1',
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('data.js');
    api.export("Data", ["client", "server"]);
});

