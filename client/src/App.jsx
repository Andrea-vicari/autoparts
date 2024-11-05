import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import { UseAuthContext } from "./hooks/UseAuthContext";
import { useDispatch } from 'react-redux'
import { user_fit, admin } from './redux/UserSlice'
import { useEffect } from 'react';


import ScrollToTop from './Components/ScrollToTop';

import Error404 from './pages/Error404';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ResetPassword from './pages/ResetPassword';
import NewPassword from './pages/NewPassword';
import SentPassword from './pages/SentPassword';
import DashboardPage from './pages/dashpages/DashboardPage';
import NuovoProdottoPage from './pages/dashpages/NuovoProdottoPage';
import ElencoProdottiPage from './pages/dashpages/ElencoProdottiPage';
import CancellaProdottoPage from './pages/dashpages/CancellaProdottoPage';

import UploaderPage from './pages/dashpages/UploaderPage';
import ModificaProdottoPage from './pages/dashpages/ModificaProdottoPage';

function App() {1

  const {user} = UseAuthContext()

  const dispatchRole = useDispatch()

  if(user === null){

    useEffect(() => {
    dispatchRole(user_fit())
  });
  }

  if(user !== null && user.user_id == "6654d132c3e78209fb9b37da"){
    useEffect(() => {
    dispatchRole(admin())
  });
  }

  return (
    <React.Fragment>
      <ScrollToTop>
        <Routes>
            <Route path="/" element={user ? <DashboardPage /> : <Navigate to="/login"/>} />



            <Route path="/*" element={<Error404 />} />
            <Route path="/login" element={user ? <Navigate to="/dashboardpage"/> : <LoginPage />} />
            <Route path="/register" element={!user ? <RegisterPage/> : <Navigate to="/login"/>}/>
            <Route path="/dashboardpage" element={user ? <DashboardPage /> : <Navigate to="/login"/>} />


		        <Route path="/cancellaprodotto/:id" element={<CancellaProdottoPage/>} />
            <Route path="/elencoprodotti" element={<ElencoProdottiPage />} />
            <Route path="/nuovoprodotto" element={user ? <NuovoProdottoPage /> : <Navigate to="/login"/>} />
            <Route path="/modificaprodotto/:id" element={user ? <ModificaProdottoPage /> : <Navigate to="/login"/>} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/uploader" element={<UploaderPage />} />
            <Route path="/sentpassword" element={<SentPassword />} />
            <Route path="/newpassword/:token" element={<NewPassword />} />
        </Routes>
        </ScrollToTop>

    </React.Fragment>

  )
}

export default App
