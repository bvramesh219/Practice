module.exports = {
  name: 'animations',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/animations',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
