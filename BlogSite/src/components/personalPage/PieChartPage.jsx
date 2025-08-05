
import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
import appwriteServices from '../../appwrite/config';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJs,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

ChartJs.register (
    ArcElement,
    Tooltip,
    Legend
)



function PieChartPage({userId}) {

    const [userPost, setUserPost] = useState([]);
    // const currentUserId = useSelector(state => state.auth.userData);

    useEffect(() => {

        appwriteServices.getPosts([]).then((allPost => {

            if(allPost) {
                setUserPost(allPost.documents);
            }

        }));

    }, [])

    // const handleDaysInMonth = () => {

    //     const now = new Date();
    //     const year = now.getFullYear();
    //     const month = now.getMonth();
    //     const days = new Date(year, month + 1, 0).getDate();

    //     return Array.from({length: days}, (_, i) => (i + 1).toString());
    // }

    const currentUserPost = userPost.filter((currentPost) => currentPost.userId === userId);

    const pieData = {

    labels: currentUserPost.map((post) => post.title),
    datasets: [
      {
        label: 'Post Share',
        data: currentUserPost.map(() => 1), // one unit per post
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
          '#9966FF', '#FF9F40', '#C9CBCF', '#8DD3C7'
        ],
        borderWidth: 1
      }
    ]
  };

  return (

    <>
        <div className="w-[70vw] h-[60vh] mx-auto border border-gray-200 p-1 bg-white 
         rounded-xl shadow-md cursor-pointer">
            <Pie data={pieData} />
        </div>

        <h2 className='text-left text-xl font-semibold sm:text-lg text-gray-600'> Your Posts :</h2>
            {currentUserPost.map((post) => (
            <div key={post.$id} className='border p-1 rounded-lg border-gray-300 
            max-w-120 bg-purple-100 hover:scale-103 transition duration-150 text-gray-700 text-sm'>
            {post.title}
            </div>
        ))}
    </>
  )

}

export default PieChartPage



