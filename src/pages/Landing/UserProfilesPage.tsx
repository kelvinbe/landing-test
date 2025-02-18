import React, { useEffect, useContext, useState } from 'react'
import Header from '../../Components/Organisms/Header'
import { UsersContext } from '../../context/UsersContext'
import {UserComponent} from '../../Components/styles/Header.styled'
import HashLoader from "react-spinners/HashLoader";


const UsersProfilePage = () => {

    const {users, getUsers} = useContext(UsersContext)
    let [loading, setLoading] = useState(true);


    useEffect(() => {


        if(users.length < 1){
            getUsers()
        }else{
            console.log(users)
            setLoading(false)
        }

    }, [users])

    console.log('users', users)


  return (
    <div   style={{
        backgroundColor: "#6A1B9A",
        width: "100%",
        height: "100vh",
        // padding: '15px 20px'

      }}>
        <Header />
        <div style={{display: 'flex', justifyContent: 'center', color: 'white'}}>
        <h2>Available Users</h2>
        </div>
      
        <div style={{display: 'flex', justifyContent: 'center'}}>
        {
            loading ?    <HashLoader
            color={'white'}
            loading={loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          /> :
        users.map((user) => {
            return <UserComponent>
                <div  style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

                    <div style={{borderRadius: 100}}>
                        <img style={{borderRadius: 100}} src={user?.picture?.large} />
                    </div>
                <div>Gender: {user?.gender}</div>
                <div>Name: {user?.name?.first}</div>
                <div>Location: {user?.location?.city}</div>
                </div>
            </UserComponent>
        })
        } 
      </div>

    </div>
  )
}

export default UsersProfilePage