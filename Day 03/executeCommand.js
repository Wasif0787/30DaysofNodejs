const cp = require("child_process");

function executeCommand(command) {
    cp.exec(command, (err, output) => {
        if (err) {
            console.log(err.message);
            return
        }
        console.log("Command output\n" + output);
    })
}

executeCommand('dir /a /b');//ls -la is for linux for windows /a to show hidden files and /b to show only file names
executeCommand('echo "Hello, Node.js!"');