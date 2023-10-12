import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import { AuthContext } from '../../Auth/AuthProvider';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

const Login = () => {
  const [show, setShow] =useState(false);
  const [errorPassword, setErrorPassword] = useState("");
  const { loginUser, googleLogged } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget)
    const email = form.get('email');
    const password = form.get('password');


    loginUser(email, password)
      .then(res => {
        console.log(res.user)
        navigate(location?.state ? location.state : "/")
      })
      .catch(err => {
        setErrorPassword(err.message)
        console.log(err)
      })
  }

const googleLogIn = ()=>{
  googleLogged()
  .then(result => {
    navigate(location?.state ? location.state : "/")
  })
  .catch(error=> {
console.log(error)
  })
}

  return (
    <div>
      <Navbar></Navbar>
      <div className=" bg-white">
        <div className="max-w-screen-xl mx-auto">

          <div className="w-2/4 p-5 mx-auto shadow-2xl bg-sky-100">
            <form onSubmit={handleLogin} className="">
              <div className="form-control">
              <h1 className="font-bold pb-4 text-3xl text-center"><span className="text-sky-700">L</span>og <span className="text-sky-700">I</span>n</h1>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={show ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />
                <h5 onClick={()=> setShow(!show)}>{show ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}</h5>

              </div>
              <div className="form-control mt-6">
                <button className="bg-sky-700 p-3 rounded-xl text-white font-semibold hover:bg-sky-300">Login</button>
              </div>
              <p className='text-center'>or</p>
              <div className='flex justify-center'>
              <button onClick={googleLogIn} className="flex gap-1">
                <img className="mt-1 h-5 w-5" src="https://i.ibb.co/bbHX8RP/google-512x512-1.png"/>Google logged in
              </button>
              </div>
              {
                errorPassword && <p className='text-red-800 text-semibold text-center'>{errorPassword}</p>
              }
            </form>
            <div className='text-center pb-4'>
              <p className='font-semibold'>New here? <Link to={'/register'}><button className='text-sky-700 px-2 hover:text-black font-semibold'>Registration</button></Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;