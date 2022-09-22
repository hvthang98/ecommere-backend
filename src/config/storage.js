import multer from 'multer'
import path from 'path'
import moment from 'moment'
const __dirname = path.resolve()
import helperApp from '../helpers/helperApp.js'

const upload = (storagePath = '', fileName = null) => {
    let folderPath = `${__dirname}/src/storages/uploads/${storagePath}`
    //make directory if it doesn't exists
    helperApp.mkdir(folderPath)

    //setup storage path
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, folderPath)
        },
        filename: function (req, file, cb) {
            //custom file name
            if (fileName === null) {
                fileName = 'file'
            }
            fileName = `${fileName}_${moment().format(
                'YYYYMMDD'
            )}_${Date.now()}.${file.originalname.split('.').pop()}`

            //add public path to request
            file.publicPath = `uploads/${folderPath}/${fileName}`
            //callback
            cb(null, fileName)
        },
    })

    return multer({ storage: storage })
}

export { upload }
