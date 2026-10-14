export default class BaseRepository {
    constructor ( model) {
        this.model=model;
    }

    createDocument(data) {
        return this.model.create(data)
    }

    findDocumentById(_id) {
        return this.model.findById(_id)
    }

    findOneDocument(filters = {}) {
        return this.model.findOne(filters)
    }

    findoneAndupdateDocument(filters , updates,options){

        return this.model.findoneAndupdate(filters , updates,options)

    }

}