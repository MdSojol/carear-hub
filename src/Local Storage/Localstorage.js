const getStoredJobApplication =() =>{
    const storageJobApplication = localStorage.getItem('job-application')
    if(storageJobApplication){
        return JSON.parse(storageJobApplication);
    }
    return[];
}

const saveJobApplication = id =>{
    const storedJobApplications = getStoredJobApplication();
    const exists = storedJobApplications.find(jobID => jobID === id);
    if(!exists){
        storedJobApplications.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedJobApplications))
    }


}

export {getStoredJobApplication, saveJobApplication}