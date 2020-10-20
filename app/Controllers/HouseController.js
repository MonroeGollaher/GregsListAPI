import { ProxyState } from "../AppState.js";
import { houseService } from "../Services/HouseService.js";

function _draw(){
    let template = ""
    ProxyState.houses.forEach(h => template += h.Template)
    document.getElementById("houses").innerHTML = template
}

export default class HouseController{
    constructor(){
        ProxyState.on("houses", _draw)
        _draw()
    }

    postHouse(e){
        e.preventDefault()
        let formData = e.target
        let newHouse = {
            bedrooms: formData.bedrooms.value,
            bathrooms: formData.bathrooms.value,
            year: formData.year.value,
            levels: formData.levels.value,
            price: formData.price.value,
            description: formData.description.value,
            imgUrl: formData.imgUrl.value
        }
        houseService.postHouse(newHouse)
    }

    editHouse(e, houseId){
        e.preventDefault()
        let formData = e.target
        let editedHouse = {
            bedrooms: formData.bedrooms.value,
            bathrooms: formData.bathrooms.value,
            year: formData.year.value,
            levels: formData.levels.value,
            price: formData.price.value,
            description: formData.description.value,
            imgUrl: formData.imgUrl.value,
            _id: houseId
        }

        $('editHouseModal-' + houseId).modal('toggle')
        houseService.editHouse(editedHouse)
    }

    deleteHouse(houseId){
        houseService.deleteHouse(houseId)
    }
}