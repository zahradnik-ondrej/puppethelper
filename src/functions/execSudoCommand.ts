import { exec } from 'child_process'

function execSudoCommand(command: string, password: string) {
    exec(`echo ${password} | sudo -S ${command}`, { maxBuffer: 1024 * 10000 }, (error, stdout, stderr) => {
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