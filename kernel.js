const storage = require('node-persist');
const FileSystem = require('./file-system');

class Kernel {
  constructor() {
    this.fs = new FileSystem();
    this.storage = storage;
  }

}

export default Kernel;