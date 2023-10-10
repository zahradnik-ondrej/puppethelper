import { spawn, ChildProcess } from 'child_process'
import { Readable } from 'stream';

function executeCommand(output: boolean = true, command: string, password?: string): Promise<void> {
    return new Promise((resolve, reject): void => {
        if (password) {
            command = `echo "${password}" | sudo -S ${command}`
        }

        const childProcess: ChildProcess = spawn(command, [], {
            stdio: 'pipe',
            shell: true
        });

        if (output) {
            // @ts-ignore
            (childProcess.stdout as Readable | null)?.on('data', (data) => {
                process.stdout.write(data);
            });
            // @ts-ignore
            (childProcess.stderr as Readable | null)?.on('data', (data) => {
                process.stderr.write(data);
            });
        }

        childProcess.on('close', (code): void => {
            if (code !== 0) {
                console.log(`The command exited with code ${code}`)
                reject(new Error(`The command exited with code ${code}`))
            } else {
                resolve()
            }
        })

        childProcess.on('error', (error): void => {
            console.error(`Failed to run command: ${error.message}`)
            reject(error)
        })
    })
}

export {executeCommand}
