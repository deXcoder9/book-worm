import { NavLink } from "react-router-dom";

const Navbar = () => {
    const Links =
        <>
            <li> <NavLink to='/'>Home</NavLink> </li>
            <li> <NavLink to='/listedBooks'>Listed Books</NavLink> </li>
            <li> <NavLink to='/bookChart'>Pages to Read</NavLink> </li>
            <li> <NavLink to='/arrival'>New Arrival</NavLink> </li>
            <li> <NavLink to='/review'>Reviews</NavLink> </li>
        </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost lg:text-3xl text-2xl ">book-<span className="text-5xl font-bold">W</span>orm</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Links}
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex justify-evenly  ">
                    <a className="btn">Sign In</a>
                    <a className="btn -mr-16 bg-black text-gray-400 hover:text-black  ">Sign up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;