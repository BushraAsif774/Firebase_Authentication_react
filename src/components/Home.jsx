import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext'

export const Home = () => {
    const navigate = useNavigate();
    
    let {user, logOut} = useUserAuth();
    const handleLogout=async()=>{
        
        try{
            await logOut();
            console.log("Succesfully Logout")
        }
        catch(err){
            console.log(err.message);
        }

    }

  return (
    <div>
        <div className='p-4 box mt-3 text-center'> Welcome {user && user.email} </div>
        <div className='d-grid gap-2'>
            <Button variant='primary' onClick={handleLogout}>Logout</Button>
            <Link className='text-center' to="/updateprofile" >Update Profile</Link>
            {/* <Button variant='primary' onClick={navigate("/updateprofile")}>Update Profile</Button> */}
        </div>
    </div>
  )
}
