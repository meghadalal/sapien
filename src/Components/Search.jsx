import React from 'react'
import  {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Modal from 'react-bootstrap'
export const Search = () => {
  return (
    <div className='searchh'>
        <Form>
            <SearchOutlinedIcon/> 
            <input
            type="text"
            id="name-search"/>

        </Form>
        <Button 
        className='button'
        variant="primary"
        >Add Leads   
        <AddCircleOutlineOutlinedIcon/>
        </Button>
    </div>
  )
}
