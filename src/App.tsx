import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './page/Login';
import RegisterPage from './page/Register';
import VotePage from './page/Vote';
import ProfilePage from './page/profile';
import ProfileEditPage from './page/profile_edit';
import RankingPage from './page/Ranking';
import AdminUserAllPage from './page/Admin/AdminUserAll';
import AdminRankingPage from './page/Admin/AdminRaniking';
import Admin_UserProfilePage from './page/Admin/AdminUserProfile';
import ProfileDetailImagePage from './page/DetailImage';
import AdminUserDetailImagePage from './page/Admin/AdminUserDetailImage';



function App() {
  const routers = createBrowserRouter(
    [
      { path: "/", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage />},
      { path: "/vote", element: <VotePage />},
      { path: "/Profile", element: <ProfilePage />},
      { path: "/detail_image", element: <ProfileDetailImagePage />},
      { path: "/ProfileEdit", element: <ProfileEditPage />},
      { path: "/ranking", element: <RankingPage />},
      { path: "/admin_userall", element: <AdminUserAllPage />},
      { path: "/admin_ranking", element: <AdminRankingPage />},
      { path: "/userprofile", element: <Admin_UserProfilePage />},
      { path: "/admin_user_detail_image", element: <AdminUserDetailImagePage />},
      
    ]
  );

  return (
    <>
      <RouterProvider router={routers} />
    </>
  )
}

export default App
