Package.describe({
  name: 'zamzar',
  version: '0.0.1',
  summary: 'Convert files using the zamzar API',
  git: '',
  documentation: 'README.md'
});

Npm.depends({
  'temp':'0.8.1',
  'request':'2.57.0',
  'valid-url':'1.0.9',
  'streamifier':'0.1.1'
})

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.export('Zamzar');
  api.addFiles('zamzar-client.js','client');
  api.addFiles('zamzar-server.js','server');
});


Package.onTest(function(api) {
  var assets = [
    "assets/demo.docx",
    "assets/form.xlsx",
    "assets/tree.jpg",
  ]
  api.use('tinytest');
  api.use('zamzar');
  api.addFiles('zamzar-tests.js');
  api.addFiles(assets,'server',{isAsset:true});
});
