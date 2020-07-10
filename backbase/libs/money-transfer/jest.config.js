module.exports = {
  name: 'money-transfer',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/money-transfer',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
