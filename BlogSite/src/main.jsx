
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {store} from './store/Store.js';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import Home from './components/Home.jsx';
import NewSletter from './components/NewSletter.jsx';
import MyProfile from './components/personalPage/MyProfile.jsx';
import ProtectedPage from './components/AuthLayoutPage/ProtectedPage.jsx';
import MyPosts from './components/personalPage/MyPosts.jsx';
import Post from './components/Post.jsx';
import EditPost from './components/EditPost.jsx';
import AllBlogs from './components/AllBlogs.jsx';



const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    children: [

      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'login',
        element: <Login />
      },
    
    ] 
    
  },
  {
    path: '/dashboard',
    element:
    <ProtectedPage>
      <Dashboard />
    </ProtectedPage>,

    children: [

      {
        path: '',
        element: 
        <ProtectedPage>
          <Home />
        </ProtectedPage>
      },
      {
        path:'newsletter',
        element:
        <ProtectedPage>
          <NewSletter />
        </ProtectedPage>
      },
      {
        path:'blog',
        element:
        <ProtectedPage>
          <AllBlogs />
        </ProtectedPage>
      },
      {
        path: 'post/:slug',
        element:
        <ProtectedPage>
          <Post />
        </ProtectedPage>
      },
      {
        path:'my-profile',
        element: 
        <ProtectedPage>
          <MyProfile />
        </ProtectedPage>
      },
      {
        path: 'my-posts',
        element: 
        <ProtectedPage>
          <MyPosts />
        </ProtectedPage>
      },
      
      {
        path: 'edit-post/:slug',
        element:
        <ProtectedPage>
          <EditPost />
        </ProtectedPage>
      }

    ]
  },
   
])


createRoot(document.getElementById('root')).render(

  <StrictMode>

    <Provider store={store}>

      <RouterProvider router={router}/>

    </Provider>

  </StrictMode>,


)


// if login in then:-
//  if ( true && (true !== true)) // true && false => false // this if will not run 
// else if (false && (true !== true)) // false && false => false 



// if not login then:-
// if( true && (false !== true)) true && true => true // will navigate to /login
// 
// 
// 











