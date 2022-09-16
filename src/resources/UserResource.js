import BaseResource from './BaseResource.js'

class UserResource extends BaseResource {
    filter(resource) {
        return {
            _id: resource._id,
            name: resource.name,
            email: resource.email,
            isAdmin: resource.isAdmin,
            createdAt: resource.createdAt,
            updatedAt: resource.updatedAt,
        }
    }
}

export default new UserResource()
