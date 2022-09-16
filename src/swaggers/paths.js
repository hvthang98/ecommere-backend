import { userPaths } from './users.js'
import { authPaths } from './auth.js'

const paths = {
    ...authPaths,
    ...userPaths,
}

export default paths
