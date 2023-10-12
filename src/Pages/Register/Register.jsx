import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';


const Register = () => {
  const [show, setShow] =useState(false);
  const { createUser, googleLogged } = useContext(AuthContext)
  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const registrationHandle = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)
    setRegisterError('')
    if (password.length < 6) {
      setRegisterError('Please 6 character or longest password');
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setRegisterError('please at least one uppercase');
      return;
    }
    if (!/[!@#$%^&*]/.test(password)) {
      setRegisterError('please type one spacial character');
      return;
    }
    createUser(email, password)
      .then(res => {
        console.log(res.user)
        
        setSuccess('You Register SuccessFully Complete')
        updateProfile(res.user, {
          displayName: name,
          photoURL: photo
        })
          .then(() => {
            console.log('Done')
            window.location.reload()
            toast("Your registration successfully complete")
          })
          .catch(error => {
            console.log(error)
          })
      })
      .catch(error => {

        console.log(error)
      })
  }

  const googleLogIn = () => {
    googleLogged()
      .then(result => {
        console.log(result)
        navigate(location?.state ? location.state : "/")
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div>
      <Navbar></Navbar>
      <ToastContainer />

      <div className=" bg-white">
        <div className="max-w-screen-xl mx-auto">


          <div className="w-2/4 p-5 mx-auto shadow-2xl bg-sky-100">
            <form onSubmit={registrationHandle} className="card-body">
              <h1 className="font-bold pb-4 text-3xl text-center"><span className="text-sky-700">R</span>egistration</h1>
              <div className="form-control">

                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">

                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="text" name="photo" placeholder="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type={show ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />
                <h5 onClick={()=> setShow(!show)}>{show ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}</h5>

              </div>
              {
                registerError && <p className="text-center text-red-700">{registerError}</p>
              }
              {
                success && <p className="text-center text-red-700">{success}</p>
              }
              <div className="form-control mt-6">
                <button className="bg-sky-700 w-full text-white rounded-xl p-3 font-bold hover:bg-sky-300">Registration</button>

              </div>
              <p className="text-center">or</p>
              <div className="flex justify-center">
                <button onClick={googleLogIn} className="flex gap-1">
                  <img className="mt-1 h-5 w-5" src="https://i.ibb.co/bbHX8RP/google-512x512-1.png" />Google logged in
                </button>
              </div>
              <p className="font-semibold">Already have account. <Link to={'/login'}>
                <button className=" text-blue hover:text-sky-700 rounded-xl p-2">Log In</button></Link></p>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;