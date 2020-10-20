import { ProxyState } from "../AppState.js";
import House from "../Models/House.js"
import { api } from '../Services/AxiosService.js'

class HouseService {
    constructor(){
        console.log("hello from house service")
    }
}

export const houseService = new HouseService()