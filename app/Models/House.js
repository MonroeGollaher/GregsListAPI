export default class House {
    constructor(data){
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.year = data.year
        this.levels = data.levels
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl
        this._id = data._id
    }

    get Template() {
        return /*html*/`
        <div class="col-3 border shadow-lg rounded">
            <img class="img-fluid" src="${this.imgUrl}" alt=""/>
            <h1>${this.price}</h1>
            <p></p>${this.bedrooms}</p>
            <p>${this.bathrooms}</p>
            <p>${this.levels}</p>
            <p>${this.description}</p>
            <p>${this.year}</p>
            <button class="btn btn-danger btn-block" onclick="app.houseController.deleteHouse('${this._id}')">Delort</button>
            <button type="button" class="btn btn-primary btn-block" data-toggle="modal" data-target="#editHouseModal-${this._id}">Edit</button>
        </div>
        `
    }

    get Modal() {
        return /*html*/` 
        <div class="modal fade" id="editHouseModal-${this._id}" tabindex="-1" role="dialog" aria-labelledby="modelTitleId"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit ${this.price} - ${this.bedrooms}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form class="container-fluid" onsubmit="app.houseController.editHouse(event, '${this._id}')">
                    <div class="row justify-content-center">
                    <div class="col-4">
                        <div class="form-group row">
                            <label for="price" class="col-sm-12 col-form-label">Price</label>
                            <div class="col-sm-12">
                                <input type="number" class="form-control" name="price" id="price" placeholder="price">
                            </div>
                            <label for="bedrooms" class="col-sm-12 col-form-label">Bedrooms</label>
                            <div class="col-sm-12">
                                <input type="number" class="form-control" name="bedrooms" id="bedrooms" placeholder="">
                            </div>
                            <label for="bathrooms" class="col-sm-12 col-form-label">Bathrooms</label>
                            <div class="col-sm-12">
                                <input type="number" class="form-control" name="bathrooms" id="bathrooms"
                                    placeholder="">
                            </div>
                            <label for="year" class="col-sm-12 col-form-label">Year</label>
                            <div class="col-sm-12">
                                <input type="number" min="1" class="form-control" name="year" id="year" placeholder="">
                            </div>
                            <label for="levels" class="col-sm-12 col-form-label">Levels</label>
                            <div class="col-sm-12">
                                <input type="number" min="1" class="form-control" name="levels" id="levels" placeholder="">
                            </div>
                            <label for="description" class="col-sm-12 col-form-label">Description</label>
                            <div class="col-sm-12">
                                <textarea name="description" class="form-control" id="" cols="30" rows="10"></textarea>
                            </div>
                            <label for="imgUrl" class="col-sm-12 col-form-label">Image Url</label>
                            <div class="col-sm-12">
                                <input type="text" class="form-control" name="imgUrl" id="imgUrl" placeholder="">
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="offset-sm-2 col-sm-10">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
            `
    }
}