
import React from 'react'
import Select from 'react-select'


function selectField({options, label, className=''},ref) {

    const Options = options?.map((option) => ({
        value: option,
        label: option
    }))

    return (

        <div className='outline-none'>
            {label && 
                <label htmlFor='selectField'></label> 
            }

            <Select 
                id="selectField"
                inputRef={ref}
                className={`${className}`}
                options={Options}
                isSearchable={false}
                classNames={{
                    
                    control: () => 'bg-zinc-900 text-white rounded-md outline-none border-black',
                    menu: () => 'bg-white rounded-lg shadow-md mt-1 outline-none border-black',
                    option: () => 'border-black'

                    // option: ({ isFocused }) =>             
                    //     `p-2 cursor-pointer ${
                    //     isFocused ? 'bg-blue-100 text-blue-800' : 'text-black'
                    // }`

                }}
            />
        </div>

    )

}


export default selectField







