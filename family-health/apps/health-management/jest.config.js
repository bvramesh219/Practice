module.exports = {
  name: 'health-management',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/health-management',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
