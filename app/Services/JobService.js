import { ProxyState } from "../AppState.js";
import { api } from '../Services/AxiosService.js'
import Job from "../Models/Job.js";

class JobService {
    constructor(){
        console.log("hello from jobs service")
        this.getJob()
    }

    editJob(editedJob){
        api.put("jobs/" + editedJob._id, editedJob).then(res => {
            this.getJob()
        }).catch(err => console.error(err))
    }

    getJob(){
        api.get("jobs").then(res => {
            ProxyState.jobs = res.data.data.map(rawJobData => new Job(rawJobData))
        }).catch(err => console.error(err))
    }

    postJob(newJob){
        api.post("jobs", newJob).then(res => {
            this.getJob()
        }).catch(err => console.error(err))
    }

    deleteJob(jobId){
        api.delete("jobs/" + jobId).then(res => {
            console.log(res.data)
            this.getJob()
        }).catch(err => console.error(err))
    }
}

export const jobService = new JobService()