import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';




export function App() {
  return (
    <>
      <div className='app'>
        <Header/>
        <Outlet />
      </div>
    </>
  );
}
