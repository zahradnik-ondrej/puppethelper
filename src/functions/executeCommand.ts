import { spawn, ChildProcess } from 'child_process'

function executeCommand(command: string, password?: string): Promise<void> {
    return new Promise((resolve, reject): void => {
        if (password) {
            command = `echo "${password}" | sudo -S ${command}`
        }

        const childProcess: ChildProcess = spawn(command, [], {
            stdio: 'inherit',
            shell: true
        })

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
