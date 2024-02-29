import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from './page/Login';
import RegisterPage from './page/Register';
import VotePage from './page/Vote';
import ProfilePage from './page/profile';
import ProfileEditPage from './page/profile_edit';


function App() {
  const routers = createBrowserRouter(
    [
      { path: "/", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage />},
      { path: "/vote", element: <VotePage />},
      { path: "/Profile", element: <ProfilePage />},
      { path: "/ProfileEdit", element: <ProfileEditPage />},
    ]
  );

  return (
    <>
      <RouterProvider router={routers} />
    </>
  )
}

export default App
