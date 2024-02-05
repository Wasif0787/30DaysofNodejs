const path = require("path")

function checkFileExtension(filePath, expectedExtension) {
    const actualExt = path.extname(filePath)
    if (actualExt === expectedExtension) {
        console.log(`File has the expected extension: ${expectedExtension}`);
    } else {
        console.log(`File does not have the expected extension. Expected: ${expectedExtension}, Actual: ${actualExt}`);
    }
}

checkFileExtension(__dirname + "./test-files/file1.txt", ".txt");
checkFileExtension(__dirname + "./test-files/image.png", ".jpg");