import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";

const Appliedjobs = () => {
    const jobs = useLoaderData();
    useEffect(() =>{
       const storedJobIds = getStoredJobApplication();
       if(jobs.length > 0){
         const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
         console.log(jobs,  storedJobIds, jobsApplied)
       }
    }, [])
    return (
        <div>
            <h2>Jobs I applied</h2>
        </div>
    );
};

export default Appliedjobs;