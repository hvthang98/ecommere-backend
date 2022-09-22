import fs from 'fs'

const helperApp = {
    mkdir: (path) =>{
        fs.exists(path, function (exists) {
            if (!exists) {
                fs.mkdir(path, { recursive: true }, (err) => {})
            }
        })
    }
}

export default helperApp