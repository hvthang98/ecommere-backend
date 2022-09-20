import { userPaths } from './users.js'
import { authPaths } from './auth.js'
import { categoryPaths } from './category.js'

const paths = {
    ...authPaths,
    ...userPaths,
    ...categoryPaths,
}

export default paths
