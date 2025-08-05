import appwriteServices from "../appwrite/config"
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux"
import parse from 'html-react-parser'


function PostCard({$id, title, featuredImage, content }) {

  // const userName = useSelector((state) => state.auth.userData);
  // console.log('this is the userName :: ',userName);

  // console.log('this is slug :: ',$id);
  
  
    
  return (

    <>
      <Link to={`post/${$id}`}>
      
        <div className=''>

          <img src={appwriteServices.fileView(featuredImage)} alt={title}
          className='rounded-md border-zinc-500 border sm:w-150' />

        </div>

        <h2 className='text-lg text-left text-white whitespace-nowrap text-nowrap truncate font-semibold mb-2'>{title}</h2>

        {/* <h2 className='text-lg text-left text-white whitespace-nowrap text-nowrap truncate font-semibold mb-2'>{$id}</h2> */}
        {/* <p className="font-semibold text-left">AutherName: {userName.name}</p> */}

        <div className="line-clamp-2 text-left text-gray-700">

          {parse(content)}

        </div>

      </Link>
    </>
  )
}


export default PostCard















