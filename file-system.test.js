const FileSystem = require("./file-system.js");
// Tests
const fs = new FileSystem();

console.log(
  "\n\n--------------------------------------------TEST SUITE - File System---------------------------------\n\n"
);

console.log(
  "\n\n-------------------------- Test 1 : Create file 1 and file 2 --------------------------\n\n"
);
fs.createFile("file1", "1");
fs.createFile("file2", "2");
console.log("===> expected output : { 1.file1: '', 2.file2: '' }");
fs.dumpFiles(); // { 1.file1: "", 2.file2: "" }

console.log(
  "\n\n-------------------------- Test 2 : Create folder 1 and folder 2 --------------------------\n\n"
);
fs.createFolder("folder1");
fs.createFolder("folder2");
console.log(
  "===> expected output : { 1.file1: '', 2.file2: '', folder1: {}, folder2: {} }"
);
fs.dumpFiles(); // { 1.file1: "", 2.file2: "", folder1: {}, folder2: {} }

console.log(
  "\n\n-------------------------- Test 3 : Change directory to folder 1 and create file 3 --------------------------\n\n"
);
fs.changeDirectory("folder1");
fs.createFile("file3", "3");
console.log("===> expected output : { 3.file3: '' }");
fs.dumpFiles(); // { 3.file3: "" }

console.log(
  "\n\n-------------------------- Test 4 : Go back and dump files --------------------------\n\n"
);
fs.goBack();
console.log(
  "===> expected output : { 1.file1: '', 2.file2: '', folder1: {}, folder2: {} }"
);
fs.dumpFiles(); // { 1.file1: "", 2.file2: "", folder1: { 3.file3: "" }, folder2: {} }

console.log(
  "\n\n-------------------------- Test 5 : Change directory to folder 2 and create file 4 --------------------------\n\n"
);
fs.changeDirectory("folder2");
fs.createFile("file4", "4");
console.log("===> expected output : { 4.file4: '' }");
fs.dumpFiles(); // { 4.file4: "" }

console.log(
  "\n\n-------------------------- Test 6 : Create Conflict with same file name, verify with different type --------------------------\n\n"
);
fs.createFile("file4", "4");
fs.dumpFiles(); // File already exists
fs.createFile("file4", "3");
console.log("===> expected output : { 4.file4: '', 3.file4: '' }");
fs.dumpFiles(); // { 4.file4: "", 3.file4: "" }

console.log(
  "\n\n-------------------------- Test 7 : Create Conflict with same folder name --------------------------\n\n"
);
fs.createFolder("folder2");
console.log("===> expected output : { 4.file4: '', 3.file4: '', folder2: {} }");
fs.dumpFiles(); // { 4.file4: "", 3.file4: "", folder2: {} }
fs.createFolder("folder2"); // Folder already exists
fs.dumpFiles(); // { 4.file4: "", 3.file4: "", folder2: {} }

console.log(
  "\n\n-------------------------- Test 8 : Delete file 4 --------------------------\n\n"
);
fs.deleteFile("file4", "4");
console.log("===> expected output : { 3.file4: '', folder2: {} }");
fs.dumpFiles(); // { 3.file4: "", folder2: {} }

console.log(
  "\n\n-------------------------- Test 9 : Delete folder 2 --------------------------\n\n"
);
fs.deleteFolder("folder2");
console.log("===> expected output : { 3.file4: '' }");
fs.dumpFiles(); // { 3.file4: "" }

console.log(
  "\n\n-------------------------- Test 10 : Rename file 4 to file 5 --------------------------\n\n"
);
fs.renameFile("file4", "3", "file5");
console.log("===> expected output : { 3.file5: '' }");
fs.dumpFiles(); // { 3.file5: "" }  

console.log(
  "\n\n-------------------------- Test 11 : Rename folder 1 to folder 3 --------------------------\n\n"
);
fs.goBack();
fs.renameFolder("folder1", "folder3");
console.log("===> expected output : { 3.file5: '', folder3: {} }");
fs.dumpFiles(); // { 3.file5: "", folder3: {} }

console.log(
  "\n\n-------------------------- Test 12: Reformat file 5 to type 4 --------------------------\n\n"
);
fs.changeDirectory("folder2");
fs.reformatFile("file5", "3", "4");
console.log("===> expected output : { 4.file5: '' }");
fs.dumpFiles(); // { 4.file5: "" }

console.log(
  "\n\n-------------------------- Test 13 : Update file 5 --------------------------\n\n"
);
fs.updateFile("file5", "4", "new content");
console.log("===> expected output : { 4.file5: 'new content' }");
fs.dumpFiles(); // { 4.file5: "new content" }


console.log(
  "\n\n-------------------------- Test 14 : Reset Cursor --------------------------\n\n"
);
fs.resetCursor();
console.log("===> expected output : []");
fs.getFullCursor(); // []

console.log(
  "\n\n-------------------------- Test 15 : Reset FS --------------------------\n\n"
);
fs.resetFS();
console.log("===> expected output : {}");
fs.getFS(); // {}