import storage from "./data-store.js";
import FileSystem from "./file-system.js";

class Kernel {
  constructor() {
    this.fs = new FileSystem();
    this.storage = storage;
  }

}

export default Kernel;