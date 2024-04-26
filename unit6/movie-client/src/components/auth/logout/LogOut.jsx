import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'reactstrap'

function LogOut({setToken}) {
   
    const navigate = useNavigate();

    const signout = () => {
        localStorage.removeItem('token')
        //Clear token from localStorage
        setToken('')
        //reset our state from an empty string,
        navigate('/')
        // route back to auth
    }
  
    return (
    <>
    <Button color = 'danger' outline>
        LOGOUT
    </Button>

    </>
  )
}

export default LogOut