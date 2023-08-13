import {exec, ExecException} from 'child_process'

function execSudoCommand(command: string, password: string): Promise<string> {
    return new Promise((resolve, reject): void => {
        exec(`echo ${password} | sudo -S ${command}`, { maxBuffer: 1024 * 10000 }, (error: ExecException | null, stdout: string, stderr: string): void => {
            if (error) {
                reject(error)
                return
            }
            if (stderr) {
                console.warn(stderr)
            }
            resolve(stdout)
        })
    })
}

export {execSudoCommand}
