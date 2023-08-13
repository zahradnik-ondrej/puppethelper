import {exec, ExecException} from 'child_process'

async function execSudoCommand(command: string, password: string): Promise<void> {
    exec(`echo ${password} | sudo -S ${command}`, { maxBuffer: 1024 * 10000 }, (error: ExecException | null, stdout: string, stderr: string): void => {
        if (error) {
            console.error(error)
        }
        if (stderr) {
            console.warn(stderr)
        }
        console.log(stdout)
    })
}

export {execSudoCommand}