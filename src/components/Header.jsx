import React, { useEffect, useState } from 'react'
import './style.scss'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const Header = () => {
  const [isUser,setIsuser]=useState({})
  console.log(isUser)
    const navigate=useNavigate()

    const handleLogout=()=>{
      window.localStorage.removeItem('user')
      toast.success('Log Out Successful')
      navigate('/register')
      window.location.reload();
     

    
    }

    useEffect(()=>{
        const existUser = JSON.parse(localStorage.getItem('user'))
        setIsuser(existUser)
    },[])

  return (
  <header className="header">
<h2> FindJobs</h2>
{isUser?.email ?     <Button variant='contained' color='error' onClick={handleLogout}>logout</Button>
:
<Button variant='contained' onClick={()=>navigate('login')}>login</Button>

}
  </header>
  )
}

export default Header