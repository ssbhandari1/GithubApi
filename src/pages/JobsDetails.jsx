import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import data from '../../data.json'
import CancelIcon from '@mui/icons-material/Cancel';
import { useDispatch } from 'react-redux';
import { saveUserData } from '../redux/JobSlice';
import { toast } from 'react-toastify';





const JobsDetails = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {id}=useParams()
const [open,setOpen]=useState(false)

const handleDialog=()=>{
  setOpen(true)
}
const handleClose=()=>{
  setOpen(false)
}



const singleJobData=data.filter((item)=>{
  return item.id===id
})
console.log(singleJobData)
const [selectfile,setSelectFile]=useState(null)

// console.log(selectfile)
const handleFile = (e) => {
  const filterImg=e.target.files[0]
    const fileUrl=URL.createObjectURL(filterImg)
  
  setSelectFile(fileUrl);
};

const [user,setUser]=useState({
  username:'',
  email:'',
  note:'',
  jobTitle:singleJobData[0].title,
  location:singleJobData[0].location,
  company:singleJobData[0].company
 

})


console.log(user)
const handleChange=(e)=>{
setUser({...user,[e.target.name]:e.target.value})
}

const handleSubmit=async()=>{
  try {
    dispatch(saveUserData(user))
    navigate('/preview')
    toast.success('Application Submitted Successfully')
  } catch (error) {
   console.log(error) 
  }

}

  return (
    <div className="jobDetailsContainer">
      <div className="jobscontainer">
        <div className="jobs">
          <h1>{singleJobData[0].title} at {singleJobData[0].company}</h1>
          <div className="jobs">
            <div className="jobTitle">
              <h2>{singleJobData[0].title} </h2>
              <p>{singleJobData[0].company} </p>
            </div>

            <div className="jobdiscription">
              <span>{singleJobData[0].location}</span>
              <div className="startjob">
                <span><p>Starts</p> <p>Immediately</p></span>
                <span> <p>CTC (Annual)</p><p>20000-40000/year</p></span>
                <span><p>Experience</p><p> 0-2 years</p> </span>
              </div>

            </div>


            <div className="aboutJob">
              <h2>About {singleJobData[0].company}</h2>
              <p dangerouslySetInnerHTML={{ __html: singleJobData[0].description }}></p>
 
         </div>
            <div className="jobApply">
              <Button variant='contained' onClick={handleDialog}>apply</Button>
            </div>
          </div>
        </div>
      </div>
    {/* {selectfile &&   <iframe
            title="PDF Viewer"
            width="100%"
            height="500px"
            src={URL.createObjectURL(selectfile)}
          />} */}
      <Dialog open={open} className='doc'>
      <CancelIcon sx={{ position: 'absolute', cursor: 'pointer' }} onClick={handleClose} />

        <DialogTitle sx={{ textAlign: 'center' ,fontWeight:'600'}}>Applying for PHP Developer job</DialogTitle>
        <Stack direction={'column'} gap={'1rem'} sx={{ margin: '2rem' }}>
        <TextField
          label="Name"
          id="outlined-size-small"
          name='username'
          value={user.username}
          onChange={handleChange}
          size="small"
        />          <TextField
          label="Email"
          id="outlined-size-small"
          name='email'
          value={user.email}
          onChange={handleChange}
          size="small"
        />
          <Typography>Upload resume</Typography>
          <TextField
        
          id="outlined-size-small"
          name='file'
          type='file'
          // value={user.email}
          onChange={handleFile}
          size="small"
        />

          <Typography>Cover letter note</Typography>
          <textarea cols={10} rows={5}   
          name='note'
           value={user.note}
          onChange={handleChange}></textarea>
          <Button variant='contained' onClick={handleSubmit}>Submit</Button>
        </Stack>
      </Dialog>
    </div>
  )
}

export default JobsDetails