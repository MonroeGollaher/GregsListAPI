import { ProxyState } from "../AppState.js";
import { jobService } from "../Services/JobService.js"

function _draw(){
    let template = ""
    ProxyState.jobs.forEach(j => template += j.Template)
    document.getElementById("jobs").innerHTML = template
}

export default class JobController{
    constructor(){
        ProxyState.on("jobs", _draw)
        _draw()
    }

    postJob(e){
        e.preventDefault()
        let formData = e.target
        let newJob = {
            jobTitle: formData.jobTitle.value,
            company: formData.company.value,
            rate: formData.rate.value,
            hours: formData.hours.value,
            description: formData.description.value
        }
        jobService.postJob(newJob)
    }

    editJob(e, jobId){
        e.preventDefault()
        let formData = e.target
        let editedJob = {
            jobTitle: formData.jobTitle.value,
            company: formData.company.value,
            rate: formData.rate.value,
            hours: formData.hours.value,
            description: formData.description.value,
            _id: jobId
        }
        jobService.editJob(editedJob)
    }

    deleteJob(jobId){
        jobService.deleteJob(jobId)
    }
}