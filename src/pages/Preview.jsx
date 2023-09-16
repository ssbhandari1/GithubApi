import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Preview = () => {
  const navigate=useNavigate()
  const preview=useSelector((state)=>state.userData.data)
  console.log(preview)
  return (
  <div className="previewcontainer">
   

        <div  className="preview">
  <div className="successmsg">
<h2>Your Application SuccessFully Submitted</h2>
  </div>
  <div className="previewDetails">
    <h3>{preview.jobTitle}</h3>
    
<p>Name : {preview.username}</p>
<p>Email :{preview.email}</p>
<p>Note : {preview.note}</p>

<p>Company : {preview.company}</p>
<p>Location : {preview.location}</p>

  </div>
  <div className="ok">
  <Button variant='contained' onClick={()=>navigate('/')} >OK</Button>
  </div>

</div>
   
     
    

  </div>
  )
}

export default Preview
