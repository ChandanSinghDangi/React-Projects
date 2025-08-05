
import React, { useEffect, useState } from 'react'
import NewSletter from './NewSletter'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import appwriteServices from '../appwrite/config'
import { useParams } from 'react-router-dom'


function EditPost() {

    const [Post, setPost] = useState([]);
    const navigate = useNavigate();
    const { slug } = useParams();
    console.log('this is slug from EditPost :: ',slug);

    useEffect(() => {

        if(slug) {
            
            appwriteServices.getPost(slug).then((res) => {
                if(res) {
                    setPost(res);
                    console.log('this is a getPost data from EditPost :: ',res);
                    
                }
            })
        }else {
            navigate('/');
            console.log('there is no slug in EditPost :: ',slug);
            
        }

    },[slug, navigate])


  return Post ? <div>
    <NewSletter post={Post} />
  </div> : null;
  

}

export default EditPost







