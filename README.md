# Kernel

## File System Overview

The file system is a tree of directories and files. The root of the tree is the root directory, which contains all other files and directories on the system. Each directory contains a list of files and directories. A VFS (Virtual File System) is a software layer that provides an interface to the file system. It abstracts the underlying file system and provides a common interface to access files and directories.

Given the fully web-dwelling nature of Ubiquity, the file system is designed to be accessed from any device with a web browser. The file system is designed to be lightweight and fast, and can run on any device, from desktops and laptops to smartphones and tablets. The file system is kept simple with a very intelligible file structure and modules. It will have a VFS-like structure rather than a tangible file system.

Since open web-hosted file content can be passed, we can use short URLs to access files and directories rather than having to rely on a traditional file system structure. This will make it easier to access files and directories from any device with a web browser, as well making it easy to backup and restore files and directories.

### File System Structure

Due to the limitations of localStorage restricting data to 5MB per domain, a very concise file system structure is needed. The file system structure will be as follows:

```plaintext
 {
    "1.me": "https://imgur.com/abc123",
    "docs": {
        "2.1": "https://2s.google.com/abc123",
        "2.2.txt": "https://2s.google.com/abc123",
        "2.3.pdf": "https://textsnip.com/abc123",
    },
    "music": {
        "3.1.mp3": "https://soundcloud.com/abc123",
        "3.2.mp3": "https://soundcloud.com/abc123",
        "3.rock music": "https://soundcloud.com/abc123",
    },
    "videos": {
        "4.1.mp4": "https://youtube.com/abc123",
        "4.some_video": "https://youtube.com/abc123",
        "4.i like this": "https://youtube.com/abc123",
    },
    "images": {
        "1.image": "https://imgur.com/abc123",
        "1.my image": "https://imgur.com/abc123",
        "1.something": "https://imgur.com/abc123",
        "folder": {

        }
    },
 }
```

While I do see the irony in using cryptic file names while emphasizing intelligibility, this is efficient while using local storage. 

#### File System Structure Explanation

- Each folder will be an object.
- Each file will be a key-value pair with the key being the file name and the value being the URL to the file content.
- File names will be prefixed with a number to identify type.

#### File System Legend

- 1: Image
- 2: Document
- 3: Music
- 4: Video
  
This file system pays no attention to file extensions or traditional named folder structures. I will design in a way that allows u to scrape all file types into your expected app without having to worry about file extensions or where they are in the file system. I will not apologize for being explosively lenient with file types.

