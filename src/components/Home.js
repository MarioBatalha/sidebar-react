import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './../context';


const Home = () => {
  const {handleOpenSidebar, handleOpenModal} = useGlobalContext();

  return (
    <main>
      <button className='sidebar-toggle' onClick={handleOpenSidebar}>
        <FaBars />
      </button>
      <button className='btn' onClick={handleOpenModal}>show modal</button>
    </main>
  )
}

export default Home
