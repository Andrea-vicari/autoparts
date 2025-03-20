import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import { UseAuthContext } from "./hooks/UseAuthContext";

import ScrollToTop from './Components/ScrollToTop';

import Error404 from './pages/Error404';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ResetPassword from './pages/ResetPassword';
import NewPassword from './pages/NewPassword';
import SentPassword from './pages/SentPassword';
import DashboardPage from './pages/dashpages/DashboardPage';
import NuovoComponentePage from './pages/dashpages/NuovoComponentePage';
import ElencoComponentiPage from './pages/dashpages/ElencoComponentiPage';
import CancellaComponentePage from './pages/dashpages/CancellaComponentePage';
import ModificaComponentePage from './pages/dashpages/ModificaComponentePage';
import ConsultaCategoriePage from './pages/dashpages/ConsultaCategoriePage';
import SingolaCategoriaPage from './pages/dashpages/SingolaCategoriaPage';
import ConsultaMagazzinoPage from './pages/dashpages/ConsultaMagazzinoPage';


function App() {

  const { user } = UseAuthContext()


  return (
    <React.Fragment>
      <ScrollToTop>
        <Routes>
            <Route path="/" element={user ? <DashboardPage /> : <Navigate to="/login"/>} />

            <Route path="/*" element={<Error404 />} />
            <Route path="/login" element={user ? <Navigate to="/dashboardpage"/> : <LoginPage />} />
            <Route path="/register" element={!user ? <RegisterPage/> : <Navigate to="/login"/>}/>
            <Route path="/dashboardpage" element={user ? <DashboardPage /> : <Navigate to="/login"/>} />
		        <Route path="/cancellacomponente/:id" element={<CancellaComponentePage/>} />
            <Route path="/elencocomponenti" element={user ? <ElencoComponentiPage /> : <Navigate to="/login"/>} />

            <Route path="/consultacategorie" element={user ? <ConsultaCategoriePage /> : <Navigate to="/login"/>} />
            <Route path="/consultamagazzino" element={user ? <ConsultaMagazzinoPage /> : <Navigate to="/login"/>} />
            <Route path="/singolacategoria/:id" element={<SingolaCategoriaPage />} />
            <Route path="/nuovocomponente" element={user ? <NuovoComponentePage /> : <Navigate to="/login"/>} />
            <Route path="/modificacomponente/:id" element={user ? <ModificaComponentePage /> : <Navigate to="/login"/>} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/sentpassword" element={<SentPassword />} />
            <Route path="/newpassword/:token" element={<NewPassword />} />

        </Routes>
        </ScrollToTop>

    </React.Fragment>

  )
}

export default App

