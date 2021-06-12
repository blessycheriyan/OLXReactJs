import {createContext,useState} from 'react'



export const PostContext=createContext(null)

function Post({children}){
    const [postdetail, setpostdetail] = useState()
    return(
        <PostContext.Provider value={{postdetail,setpostdetail}}>
            {children}



        </PostContext.Provider>
    )

}
export default Post