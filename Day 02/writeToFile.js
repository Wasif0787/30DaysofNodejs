const fs = require("fs")

function writeToFile(filePath, content) {
    fs.writeFile(filePath, content, err => {
        if (err) {
            console.log("Error writing to file: " + err.message);
            return
        }
        console.log("Data written to output.txt");
    })
}
writeToFile(__dirname + "\\test-files\\output.txt", "Sample Content.")
writeToFile(__dirname + "\\test-files\\nonexistent-folder\\output.txt", "Sample Content by me XYZ")