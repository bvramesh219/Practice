module.exports = {
  name: 'peach-tree-bank',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/peach-tree-bank',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
