import React, {createContext, useState} from "react";



export const PostsContext = createContext()


const url = 'https://jsonplaceholder.typicode.com/posts'

export default function PostsContextProvider({children}){

    const [posts, setPosts] = useState([])



    const getPosts = async () => {

        try {   
        const response = await fetch(url)


        if(!response.ok){
            throw new Error("Something went wrong");
            
        }

        const posts = await response.json()

        setPosts(posts)

            
        } catch (error) {
            console.log('error', error)
        }




    }



    return (<PostsContext.Provider value={{getPosts, posts}}>

        {children}
    </PostsContext.Provider>)





    
}