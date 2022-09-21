import multer from 'multer'
import path from 'path'
const __dirname = path.resolve()

const uploadImage = () => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, __dirname + '/src/storages/uploads')
        },
        filename: function (req, file, cb) {
            cb(
                null,
                file.fieldname +
                    '-' +
                    Date.now() +
                    `.${file.originalname.split('.').pop()}`
            )
        },
    })

    return multer({ storage: storage })
}

export { uploadImage }
