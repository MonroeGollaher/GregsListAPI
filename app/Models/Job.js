export default class Job {
    constructor(data){
        this.jobTitle = data.jobTitle
        this.company = data.company
        this.rate = data.rate
        this.hours = data.hours
        this.description = data.description
        this.id = data.id
    }

    get Template() {
        return /*html*/`
        <div class="col-4 border border-info shadow-lg rounded">
            <img class="img-fluid" src="${this.imgUrl}" alt=""/>
            <h1>${this.jobTitle}</h1>
            <h3>${this.company}</h3>
            <h3>${this.rate}</h3>
            <h3>${this.hours}</h3>
            <h3>${this.description}</h3>
        </div>
        `
    }
}