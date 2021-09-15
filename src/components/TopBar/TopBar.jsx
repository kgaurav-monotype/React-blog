import React from 'react'
import './topbar.scss';
import {
    Link
  } from "react-router-dom";

export default function TopBar() {
    return (
        <div className="top">
            <div className="top-left">
            <Link to="/"><h1>What I think?</h1> </Link>
            </div>
            <div className="top-center">
                <ul className="top-menu">
                    <Link to="/"><li className="top-menu-item">Home</li></Link>
                    <Link to="/post/123"><li className="top-menu-item">Blogs</li></Link>
                    <Link to="/write"><li className="top-menu-item">Write</li></Link>
                    <Link to="/login"><li className="top-menu-item">Logout</li></Link>
                </ul>
            </div>
            <div className="top-right">
                <img className="top-user-img" src="https://lh3.googleusercontent.com/a-/AOh14GiyS05v_qBJRFClq2PRHhMrMIJtRsZsk2fGGxqBdg" alt="Kumar Gaurav"/>
                <i className="top-search-icon fas fa-search"></i>
            </div>
        </div>
    )
}
