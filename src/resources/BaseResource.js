class BaseResource {
    filter(resource) {
        return resource
    }

    collection(resource) {
        let data = []
        if (resource.length > 0) {
            data = resource.map((item) => {
                return this.filter(item)
            })
        }
        return data
    }
}

export default BaseResource
