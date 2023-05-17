import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const [isLogin, setIsLogin] = React.useState(false)

  function login(){
    setIsLogin(!isLogin)
  }

  return (
    <nav className="bg-pink-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <NavLink to='/'>
            Blogio
          </NavLink>
        </div>
        <div>
          
          <button className='bg-slate-200 p-1' onClick={login}>
            Auth-in
          </button>

          {isLogin ? (
            <>
          <NavLink to="/myblog" className="navlink">
            My Blog
          </NavLink>
          <NavLink to="!#" className="navlink">
            Logout
          </NavLink>
            </>
          ) : (
            <>
          <NavLink to="/login" className="navlink">
            Login
          </NavLink>
          <NavLink to="/register" className="navlink">
            Register
          </NavLink>
            </>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
