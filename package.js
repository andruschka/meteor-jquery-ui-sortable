Package.describe({
  name: 'andruschka:jquery-ui-sortable',
  summary: 'Sortable is a jQuery UI behaviour for interactively drag-reordering table rows.',
  version: '1.11.2',
  git: 'https://github.com/andruschka/meteor-jquery-ui-sortable.git'
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use('jquery', 'client')
  api.addFiles(['jquery-ui-sortable.js','jquery-ui-sortable.css'], 'client');
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('andruschka:jquery-ui-sortable');
//   api.addFiles('andruschka:jquery-ui-sortable-tests.js');
// });
