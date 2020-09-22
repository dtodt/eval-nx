module.exports = {
  name: 'crud-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/crud/shell',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
