import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";


const Navbar = () => {
    const{allLogOut, user} = useContext(AuthContext)
    const logOut = () =>{
        allLogOut()
        .then(()=>{
            console.log('logOut done')
        })
        .catch(error => {
            console.log(error)
        })
    }
    const linksItem = <>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-sky-600" : ""
            }
        >
            home
        </NavLink>
        <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-sky-600" : ""
            }
        >
            about
        </NavLink>
        
        <NavLink
            to="/blog"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-sky-600" : ""
            }
        >
            blog
        </NavLink>
    </>
    return (
        <div className="">
            <div className="bg-gradient-to-r from-black to-blue-950 p-2">

                <div className="ml-14 lg:px-6 md:ml-0 md:gap-8 md:flex lg:ml-0 lg:flex items-center justify-between">
                    <div className="flex md:gap-0 gap-3">
                        <img className="w-24" src="https://i.ibb.co/BtqL093/9f09jp8a3ojj97v82opkkc44nn-5799ac905ab58c29cb15080e06778e84.png" />
                        <p className="text-white font-bold text-4xl pt-3 ">Tech.</p>
                    </div>
                    <div className="flex ml-11 lg:ml-0 gap-5 md:gap-3 lg:gap-20 text-xl text-white font-semibold">
                        {linksItem}
                    </div>
                    <div className="ml-8 md:ml-0 lg:ml-0">
                        {
                            user && <div className="flex gap-3 items-center">
                            <img className='w-14 h-14 rounded-full ' src={user.photoURL} />
                            <p>{user.displayName}</p>
                            </div>
                        }
                    </div>
                    <div className="ml-24 md:ml-0 lg:ml-0">
                        {
                            user ? <Link to={'/login'}>
                            <button onClick={logOut} className="bg-sky-300 rounded text-white px-3 py-2 mr-6 hover:bg-sky-700">Log Out</button>
                        </Link> : <Link to={'/login'}>
                            <button className="bg-blue-900 rounded text-white px-3 py-2 mr-6 hover:bg-sky-700">Log In</button>
                        </Link>
                        }
                        
                    </div>

                </div>
                

            </div>
        </div>
    );
};

export default Navbar;