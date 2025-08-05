
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import appwriteServices from '../../appwrite/config';
// import { useSelector } from 'react-redux';
import { Chart as ChartJS, CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';

ChartJS.register (
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


function BarChartPage({userId}) {

  const [userPost, setUserPost] = useState([]);
  // const currentUserId = useSelector(state => state.auth.userData);
  // console.log('this is currentUserId in CharPage :: ',currentUserId);
  // console.log('this is userPost in ChartPage :: ',userPost);

  useEffect(() => {

    appwriteServices.getPosts([]).then((allPost => {

      if(allPost) {
        setUserPost(allPost.documents);
      }
    }));

  }, [])

  const handleDaysInMonth = () => {

    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const days = new Date(year, month + 1, 0).getDate();

    return Array.from({length: days}, (_, i) => (i + 1).toString());
  }

  const currentUserPost = userPost.filter((currentPost) => currentPost.userId === userId);
  // console.log('this is currentUserPost in ChartPage :: ',currentUserPost);


  const postCountPerDay = {};

  currentUserPost.forEach((post) => {
    const date = new Date(post.$createdAt);
    const day = date.getDate();

    if(!postCountPerDay[day]) {
      postCountPerDay[day] = 0;
    }
    postCountPerDay[day]++;
  })

  const labels = handleDaysInMonth();
  // const numberOfPost = Object.values(postCountPerDay);
  // const numberOfPost = labels.map((day) => {
  //   return postCountPerDay[parseInt(day) || 0];
  // })


  const dataset1 = []; // blue
  const dataset2 = []; // pink

  labels.forEach((dayLabel) => {
    const count = postCountPerDay[parseInt(dayLabel)] || 0;

    let blue = 0;
    let pink = 0;

    for (let i = 1; i <= count; i++) {
      if (i % 2 === 1) {
        blue++; // odd → blue
      } else {
        pink++; // even → pink
      }
    }

    dataset1.push(blue);
    dataset2.push(pink);
  });


  const data = {
    labels: handleDaysInMonth(), // These are your days
    datasets: [
      {
        label: 'Number of Posts',
        data: dataset1, // This is how many posts per day
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Bar color
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        stack: 'Stack 0', // Makes it a stacked chart
      },
      {
      label: 'Number of Posts',
      data: dataset2,
      backgroundColor: 'rgba(255, 99, 132, 0.6)', // Light pink
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
      stack: 'stack 1',
    },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // You can use 'bottom', 'left', 'right'
      },
      title: {
        display: true,
        text: 'Posts Uploaded Per Day',
      },
    },
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: 'Day of Month',
        },
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Number of Posts a day'
        },
        beginAtZero: true,
      },
    },
  };

  return (

    <>
      <div className=" w-[80vw] h-[65vh] mx-auto border border-gray-200 p-1 bg-white 
      rounded-xl shadow-md cursor-pointer">
        <Bar data={data} options={options} />
      </div>
      <h2 className='text-left text-xl font-semibold sm:text-lg text-gray-600'>
        Your Posts :
      </h2>
      {currentUserPost.map((post) => (
        <div key={post.$id} className='border p-1 rounded-lg border-gray-300 
          max-w-120 bg-purple-100 hover:scale-103 transition duration-150 text-gray-700 text-sm'>
          {post.title}
        </div>

      ))}
    </>
    
  );
}

export default BarChartPage;
































