
function findType(file) {
    if (typeof Object.values(file)[0] !== 'string') return 'directory';
    switch (Object.keys(file)[0].slice(0, 1)) {
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
            name: name.slice(2, name.length), 
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