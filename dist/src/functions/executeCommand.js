"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeCommand = void 0;
const child_process_1 = require("child_process");
function executeCommand(command, password) {
    return new Promise((resolve, reject) => {
        if (password) {
            command = `echo "${password}" | sudo -S ${command}`;
        }
        const childProcess = (0, child_process_1.spawn)(command, [], {
            stdio: 'inherit',
            shell: true
        });
        childProcess.on('close', (code) => {
            if (code !== 0) {
                console.log(`The command exited with code ${code}`);
                reject(new Error(`The command exited with code ${code}`));
            }
            else {
                resolve();
            }
        });
        childProcess.on('error', (error) => {
            console.error(`Failed to run command: ${error.message}`);
            reject(error);
        });
    });
}
exports.executeCommand = executeCommand;
