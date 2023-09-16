import React, { useState } from 'react'
import Jobs from './Jobs'
import './style.scss'
import { FormControl, IconButton, InputBase, InputLabel, MenuItem, Paper, Select, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

import data from '../../data.json'
import { toast } from 'react-toastify';

const Home = () => {
  const [search, setSearch] = useState('')
  const[searchItem,setSearchItem]=useState([])
  console.log(search)
  // console.log(data)



  const handleSearchJob = () => {
    const searchResult = data.filter((item) => {
      return item.title.toLowerCase().includes(search.toLowerCase())
    })
    console.log(searchResult)
    if(!searchResult.length){
return toast.error('This type jobs are not available',{theme:'dark'})
    }
    setSearchItem(searchResult)
  }


  return (
    <div className="homecontainer">
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >

        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Jobs"
          inputProps={{ 'aria-label': 'search google maps' }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearchJob}>
          <SearchIcon />
        </IconButton>

      </Paper>
      <Jobs searchItem={searchItem} setSearchItem={setSearchItem} />
    </div>
  )
}

export default Home