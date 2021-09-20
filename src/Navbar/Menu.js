import React from 'react';
import './Menu.css';
import PropTypes from 'prop-types';

export const Menu = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="https://ashwani.derbatech.in/"rel="noreferrer" target="_blank">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>   
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" rel="noreferrer" target="_blank" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/" rel="noreferrer" target="_blank">{props.aboutText}</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/" rel="noreferrer" target="_blank">Contact Us</a>
                    </li>
                </ul>
                {props.searchBar?<form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>:"No search bar here!"}
                </div>
            </div>
            </nav>
    )
}

Menu.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired,
}


Menu.defaultProps = {
    title : 'Set title here!',
    aboutText: 'Set about link here!',
    searchBar:false,
}