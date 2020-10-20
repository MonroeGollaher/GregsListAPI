import { ProxyState } from "../AppState.js";
import House from "../Models/House.js"
import { api } from '../Services/AxiosService.js'

class HouseService {
    constructor(){
        console.log("hello from house service")
        this.getHouse()
    }

    getHouse(){
        api.get("houses").then(res => {
            ProxyState.houses = res.data.data.map(rawHouseData => new House(rawHouseData))
        }).catch(err => console.error(err))
    }

    postHouse(newHouse){
        api.post("houses", newHouse).then(res => {
            this.getHouse()
        }).catch(err => console.error(err))
    }
}

export const houseService = new HouseService()