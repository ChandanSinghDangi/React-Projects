
import React from 'react'
import {Editor } from '@tinymce/tinymce-react';
import {Controller } from 'react-hook-form';


export default function RTE({name, control, label, defaultValue =""}) {
  return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (
        <Editor
        apiKey='27kh7ugrlvf09y9nwqyt4265etyc7l13ttswtw7n25l16or0'
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 600,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
    )}
    />

     </div>
  )
}





 


// import React from 'react'
// import { Editor } from '@tinymce/tinymce-react'
// import { Controller } from 'react-hook-form'


// export default function RTE({name, control, label, defaultValue = ''}) {

//   return (

//     <div>

//         {label && <div>
//             <label htmlFor={label} className='text-xl text-gray-400'>{label}</label>
//             </div>
//         }
//         <Controller 
//             name={name || 'content'}
//             control={control}
//             render={({field: {onChange}}) => (

//                 <Editor
//                     apiKey='27kh7ugrlvf09y9nwqyt4265etyc7l13ttswtw7n25l16or0'
//                     initialValue={defaultValue}
//                     init={{
//                         initialValue: defaultValue,    
//                         height: 700,
//                         menubar: true,
//                         plugins: [
//                             'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
//                             'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
//                             'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
//                         ],
//                         toolbar: 'undo redo | blocks | ' +
//                             'bold italic forecolor | alignleft aligncenter ' +
//                             'alignright alignjustify | bullist numlist outdent indent | ' +
//                             'removeformat | help',
//                         content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
//                     }}
//                     onEditorChange={onChange}
//                 />
//             )}
//         />
        
//     </div>

//   )

// }






















