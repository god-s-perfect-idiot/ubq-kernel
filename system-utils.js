
function findType(file) {
    if (typeof file !== 'string') return 'directory';
    switch (file.slice(0, 1)) {
        case '1': 
            return 'image';
        case '2':
            return 'document';
        case '3':
            return 'music';
        case '4':
            return 'video';

    }
}

function parseDirectoryContents(files) {
    const contents = Object.entries(files).map(([name, file]) => {
        return {
            name: name.slice(2, name.length -1), 
            type: findType({[name]: file}),
            content: file
        };
    });
    return contents;
}

module.exports = {
    findType,
    parseDirectoryContents
};