import { ProxyState } from "../AppState.js";
import Car from "../Models/Car.js"
import { api } from '../Services/AxiosService.js'

class JobService {
    constructor(){
        console.log("hello from jobs service")
    }
}

export const jobService = new JobService()