import React, { useEffect, useState } from 'react'
import './style.scss'
import { Button, Paper } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import data from '../../data.json'
import { toast } from 'react-toastify'


const Jobs = ({searchItem,setSearchItem}) => {

  const [existsUser,setExistUser]=useState({})


  useEffect(()=>{
    const existUser = JSON.parse(localStorage.getItem('user'))
    setExistUser(existUser)
},[])
// const [jobData,setJobData]=useState(data)
// console.log(jobData)
// console.log(searchItem)

  const navigate=useNavigate()


const handleNavigate=(id)=>{
  if(!existsUser?.email){
 
   return toast.error('Please log in first')
  }
  navigate(`/jobdetails/${id}`)
}

  const resultJobdata=searchItem.length > 0 ? searchItem: data;



  return (
   <div className="jobscontainer">

{resultJobdata.slice(0,50).map((job)=>{
  return(

    <Paper key={job.id} elevation={15}>
    <div className="jobs">
     <div className="jobTitle">
     <h1>{job.title} </h1>
      <p>{job.company} </p>
     </div>
  
      <div className="jobdiscription">
          <span>{job.location}</span>
        <div className="startjob">
        <span><p>Starts</p> <p>Immediately</p></span>
          <span> <p>CTC (Annual)</p><p>20000-40000/year</p></span>
          <span><p>Experience</p><p> 0-2 years</p> </span>
        </div>
       
      </div>
      <div className="jobApply">
       <Button variant='contained' onClick={()=>handleNavigate(job.id)}>view Details</Button>
      </div>
     
   </div>
    </Paper>

  )
})}

 


 
   </div>
  )
}

export default Jobs