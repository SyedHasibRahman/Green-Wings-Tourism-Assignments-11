import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/green-wings-logo.png';
import './Header.css';

const Header = () => {
    const { users, logOut } = useAuth();
    return (
        <div className="header mb-4 p-3">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to="/"><img src={logo} alt="" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/services">Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/Blogs">Blog's</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/AboutUs">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/Contactus">Contact Us</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    {users?.email ?
                                        <div>
                                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Manage Account
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                                                <li className="nav-item">
                                                    {users?.email ?
                                                        <Link className="nav-link active" aria-current="page" to="/MyBooking">MyBooking</Link> :
                                                        ''
                                                    }
                                                </li>
                                                <li className="nav-item">
                                                    {users?.email ?
                                                        <Link className="nav-link active" aria-current="page" to="/AllOrders">AllOrders</Link> :
                                                        ''
                                                    }
                                                </li>
                                                <li className="nav-item">
                                                    {users?.email ?
                                                        <Link className="nav-link active" aria-current="page" to="/AddServices">AddServices</Link> :
                                                        ''
                                                    }
                                                </li>
                                                <li className="nav-item">
                                                    {users?.email ?
                                                        <button onClick={logOut} className="btn btn-light">LogOut</button> :
                                                        <Link className="nav-link active" aria-current="page" to="/Login">Login</Link>
                                                    }
                                                    <span className="text-danger">
                                                        <small>{users?.displayName}</small>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div> :
                                        ''
                                    }
                                </li>
                                <li className="nav-item">
                                    {users?.email ?
                                        '' :
                                        <Link className="nav-link active" aria-current="page" to="/Login">Login</Link>
                                    }
                                </li>


                            </ul>
                        </div>
                    </div>
                </nav>
                <div>
                </div>
            </div>
        </div>
    );
};

export default Header;