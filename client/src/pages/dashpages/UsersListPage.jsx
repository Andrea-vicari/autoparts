import React from 'react'
import Footer from '../../Components/Common/Footer';
import Navbar from '../../Components/Common/DashNav';
import UsersList from '../../Components/dashcomponents/UsersList';



function UsersListPage() {
  return (
    <>
    <Navbar />
    <UsersList />
    <Footer />
    </>
  )
}

export default UsersListPage
