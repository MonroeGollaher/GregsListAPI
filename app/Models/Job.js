export default class Job {
    constructor(data){
        this.jobTitle = data.jobTitle
        this.company = data.company
        this.rate = data.rate
        this.hours = data.hours
        this.description = data.description
        this._id = data._id
    }

    get Template() {
        return /*html*/`
        <div class="col-3 border shadow-lg rounded">
            <img class="img-fluid" src="${this.imgUrl}" alt=""/>
            <h1>${this.jobTitle}</h1>
            <h3>${this.company}</h3>
            <h3>${this.rate}</h3>
            <h3>${this.hours}</h3>
            <h3>${this.description}</h3>
            <button class="btn btn-danger btn-block" onclick="app.jobController.deleteJob('${this._id}')">Delort</button>
            <button type="button" class="btn btn-primary btn-block" data-toggle="modal" data-target="#editJobModal-${this._id}">Edit</button>
        </div>
        `
    }
}