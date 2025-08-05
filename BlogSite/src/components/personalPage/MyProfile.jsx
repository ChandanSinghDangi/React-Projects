
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import BarChartPage from './BarChartPage'
import PieChartPage from './PieChartPage';


function MyProfile() {

  const [changeChart, setChangeChart] = useState(false);
  const userInfo = useSelector(state => state.auth.userData);
  // console.log('this is userInfo from MyProfile page :: ',userInfo);
  
  const handleChartChange = () => {
    setChangeChart(prevChart => !prevChart);
  }

  return (

    <div className='mt-5 flex flex-col gap-4 ml-2'>
      
      <div className='border p-2 flex flex-col gap-2 rounded-lg border-zinc-400 
      max-w-100 bg-gray-300 text-gray-700 text-sm'>

        <p className='border p-1 rounded-lg border-gray-400 
        max-w-80 bg-purple-100 hover:scale-103 transition duration-150'>
          {userInfo.name}
        </p>
        
        <p className='border p-1 rounded-lg border-gray-400 
        max-w-80 bg-purple-100 hover:scale-103 transition duration-150'>
          {userInfo.email}
        </p>

      </div>

      <button onClick={handleChartChange} 
        className='border border-gray-300 bg-gray-400  text-white 
        font-semibold p-2 rounded-md max-w-22 hover:scale-105 
        transition duration-150 cursor-pointer'>{changeChart ? 'Bar Chart' : ' Pie Chart'}
      </button>

      { changeChart ? <PieChartPage userId={userInfo?.$id}/> : <BarChartPage userId={userInfo?.$id}/> }

    </div>

  )

}

export default MyProfile 







