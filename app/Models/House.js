export default class House {
    constructor(data){
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.year = data.year
        this.levels = data.levels
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl
        this.id = data.id
    }

    get Template() {
        return /*html*/`
        <div class="col-4 border border-info shadow-lg rounded">
            <img class="img-fluid" src="${this.imgUrl}" alt=""/>
            <h1>${this.price}</h1>
            <p></p>${this.bedrooms}</p>
            <p>${this.bathrooms}</p>
            <p>${this.levels}</p>
            <p>${this.description}</p>
            <p>${this.year}</p>
        </div>
        `
    }
}