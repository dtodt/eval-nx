module.exports = {
  name: 'crud-list',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/crud/list',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
