import React, { useEffect, useContext } from 'react'
import Header from '../../Components/Organisms/Header'
import {PostsComponent} from '../../Components/styles/Header.styled'
import { PostsContext } from '../../context/PostsContext'

const HomePage = () => {

    const {posts, getPosts} = useContext(PostsContext)

    useEffect(() => {


        if(posts?.length < 1){
            getPosts()
        }else{
            console.log(posts)
        }

    }, [posts])

    console.log('posts', posts)


  return (
    <div   style={{
        backgroundColor: "#6A1B9A",
        width: "100%",
        height: "100vh",
        overflow: 'scroll'
        // padding: '15px 20px'

      }}>
        <Header />
        <div style={{display: 'flex', justifyContent: 'center', color: 'white'}}>
        <h2>Welcome to the Landing</h2>
        </div>

        <div style={{display: 'flex', justifyContent: 'center', color: 'white'}}>
        <h3>Latest Posts</h3>
        </div>
      
      <div style={{display: 'flex', justifyContent: 'center', flexDirection:'column',alignItems: 'center'}}>
       {
        posts.slice(0, 30).map((post) => {

            return <PostsComponent>
                <div  style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
               <div style={{color: 'white'}}>Title: {post?.title}</div>
               </div>
            </PostsComponent>
        })
       } 
      </div>

    </div>
  )
}

export default HomePage