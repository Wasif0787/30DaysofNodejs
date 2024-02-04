const path = require("path");

function resolvePath(relativePath) {
    console.log("Resolved Path is: " + path.resolve(relativePath));
}

resolvePath("..//Day 04//file.txt");
resolvePath(".//nonexisting-folder//file.txt");