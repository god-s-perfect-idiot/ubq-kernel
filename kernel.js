const storage = require('./data-store');
const FileSystem = require('./file-system');

class Kernel {
  constructor() {
    this.fs = new FileSystem();
    this.storage = storage;
  }

}

module.exports = Kernel;