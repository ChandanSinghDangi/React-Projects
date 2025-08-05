
import React,{ useCallback, useEffect, useState } from 'react'
import appwriteServices from '../appwrite/config';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import RTE from './RTE';
import SelectField from './SelectField';
import Button from './Button';


export default function NewSletter({post}) {

    const { register, handleSubmit, watch, setValue, control, getValues,reset } = useForm({

        defaultValues: {
            title: post?.title || '',
            content: post?.content || '',
            slug: post?.$id || '',
            status: post?.status || 'active'
        }
    });

    useEffect(() => {
        if (post) {
            reset({
                title: post.title || "",
                slug: post?.$id || "",
                content: post.content || "",
                status: post.status || "active"
            });
        }
    }, [post, reset]);


    // console.log('this is EditPost detail in NewSletter page :: ',post);
    const userData = useSelector((state) => state.auth.userData);

    const [showImagePreview, setShowImagePreview] = useState(null);
    
    const navigate = useNavigate();

    const Submit = async(data) => {

        if(post) {

            const fileImage =  data.image[0] || null;

            if(fileImage) {

                await appwriteServices.deleteFile(post.featuredImage);

                const newFile = await appwriteServices.uploadFile(fileImage);
                if(newFile) {
                    await appwriteServices.updatePost(post.$id, {...data, featuredImage: newFile ? newFile.$id : null});
                    navigate('/dashboard');
                } 
            }

        } else {
            const newImage =  data.image[0] || null;

            const newFileId = await appwriteServices.uploadFile(newImage);

            data.featuredImage = newFileId.$id;

            if(newImage) {
                const newPost = await appwriteServices.createPost({...data, userId:userData.$id });
                // console.log('this is data from newSellter :: ', data);
                if(newPost) {
                    navigate('/dashboard');
                }
            }
        }
    }

    const slugTransform = useCallback((value) => {

        if( typeof value === 'string') return value
        .trim()
        .toLowerCase()
        .replace(/[.\s]/g, "_"); // replaces both space and dot with underscore.

        return '';

    } ,[])

    useEffect(() => {

        const subscription = watch((value, { name }) => {

            if(name === 'title') {
                setValue('slug', slugTransform(value.title), {shouldValidate: true})

            }
        })

        return () => subscription.unsubscribe();

    } ,[watch, slugTransform, setValue])


    const handleFile = (e) => {
        const file = e.target.files[0];
        if(file) {
            const ImageUrl = URL.createObjectURL(file)
            setShowImagePreview(ImageUrl);
        }
    }


  return (

    <form onSubmit={handleSubmit(Submit)} className=' sm:flex gap-x-10 p-3 justify-between mt-10 '>
        <div className='border border-gray-300 rounded-xl p-2 sm:w-3/5 md:w-3/4 lg:w-3/4 xl:w-3/4'>
            <Input 
                label='Title :'
                placeholder='Title'
                type='title'
                 className='bg-black/10 backdrop-blur-md w-4/4 pl-5 text-xl 
                    placeholder:text-gray-400 rounded-md p-3 
                    outline-none mt-2 mb-3 caret-white
                    transition-all duration-300 ease-in-out 
                    hover:-translate-y-1 hover:scale-100 hover:shadow-lg 
                    focus:outline-none hover:outline-none'
                {...register('title', {
                    required: true
                })}
            />

            <div>
                <Input 
                    label='Slug :'
                    placeholder='unique id'
                    type='slug'
                    className='bg-black/10 backdrop-blur-md w-4/4 pl-5 text-xl 
                        placeholder:text-gray-400 rounded-md p-3 outline-none mt-2 mb-3 caret-white
                        transition-all duration-300 ease-in-out 
                        hover:-translate-y-1 hover:scale-100 hover:shadow-lg 
                        focus:outline-none hover:outline-none'
                    {...register('slug', {
                        required: true
                    })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                    />
            </div>
            
            <RTE 
                label='Content :'
                name='content'
                control={control}
                defaultValue={getValues('content')}
            />
        </div>

        <div className='border border-gray-300 rounded-xl p-2 sm:w-2/5 md:w-1/4 lg:w-1/4 xl:w-[35%] 2xl:w-[30%]'>

            <Input 
                label='FeaturedImage :'
                placeholder='image'
                type='file'
                accept='image/*'
                className="file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0
                    file:text-sm file:font-medium file:bg-black/20 file:text-white
                    hover:file:bg-black/30 bg-black/10 backdrop-blur-md w-full pl-5 
                    text-xl placeholder:text-gray-400 rounded-md p-3 outline-none 
                    mt-2 mb-3 caret-white transition-all duration-300 ease-in-out 
                    hover:-translate-y-1 hover:scale-100 hover:shadow-lg 
                    focus:outline-none hover:outline-none"
                {...register('image',{
                    required: !post,
                    onChange: handleFile
                })}
            />

            {showImagePreview &&
                 <div className="w-full mb-4">
                    <img src={showImagePreview} alt="image" 
                     className='rounded-lg w-full'
                    />
                </div>
            }

            {!showImagePreview && post?.featuredImage && 
                <div className="w-full mb-4">
                    <img src={appwriteServices.fileView(post.featuredImage)} alt="image" 
                     className='rounded-lg w-full'
                    />
                </div>
            }

            <SelectField 
                options={['active','inactive']}
                label='status'
                className='bg-black/10 backdrop-blur-md w-4/4 pl-5 text-xl 
                 rounded-md p-2 outline-none mt-2 mb-3 caret-white 
                 transition-all duration-300 ease-in-out 
                 hover:-translate-y-1 hover:scale-100 hover:shadow-lg 
                 focus:outline-none hover:outline-none'
                {...register('status', {
                    required: true
                })}   
            />

            <Button 
                children={post ? 'Update' : 'Submit'}
                className='border border-gray-200 rounded-lg 
                 w-3/3 bg-zinc-300 p-2 text-xl mt-6 cursor-pointer hover:bg-zinc-300 
                 font-semibold transition-all duration-300 ease-in-out 
                 hover:-translate-y-1 hover:scale-100 hover:shadow-lg 
                 focus:outline-none focus:ring-2'    
            />

        </div>

    </form>

  )

}




























