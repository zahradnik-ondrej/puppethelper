import { spawn } from 'child_process'

function executeCommand(command: string, password?: string): Promise<void> {
    return new Promise((resolve, reject) => {
        if (password) {
            command = `echo "${password}" | sudo -S ${command}`
        }

        const childProcess = spawn(command, [], {
            stdio: 'inherit',
            shell: true
        })

        childProcess.on('close', (code) => {
            if (code !== 0) {
                console.log(`The command exited with code ${code}`)
                reject(new Error(`The command exited with code ${code}`))
            } else {
                resolve()
            }
        })

        childProcess.on('error', (error) => {
            console.error(`Failed to run command: ${error.message}`)
            reject(error)
        })
    })
}

export {executeCommand}
