import './dashboard.css';
import Header from '../../components/navigation/Header';
import SideBar from '../../components/navigation/SideBar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

export default function Dashboard({userUsername, setIsLoggedIn}) {
  return (
    <BrowserRouter>
      <div>
        <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn}/>
        <SideBar />
        <Routes>
          <Route path='/' />
          <Route path='/favorites' />
          <Route path='/watchlater' />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
