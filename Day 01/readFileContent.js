const fs = require('fs')

function readFileContent(filePath) {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log("Error reading file:" + err.message);
            return
        }
        console.log(data.toString());
    })
}
console.log("Contents");
readFileContent(__dirname + "\\test-files\\file1.txt")
readFileContent(__dirname + "\\test-files\\empty-file.txt")
readFileContent(__dirname + "\\test-files\\nonexistent-file.txt")
