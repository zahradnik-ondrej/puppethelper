import { exec } from 'child_process'

function execSudoCommand(command: string, password: string, done: (error: Error | null, stdout?: string, stderr?: string) => void): void {
    exec(`echo ${password} | sudo -S ${command}`, { maxBuffer: 1024 * 10000 }, (error: Error | null, stdout: string, stderr: string): void => {
        if (error) {
            console.error(error)
        }
        if (stderr) {
            console.warn(stderr)
        }
        console.log(stdout)
        done(error, stdout, stderr)
    })
}

export {execSudoCommand}