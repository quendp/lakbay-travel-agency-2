import React from 'react'

const HeaderNavMenu = ({logInToken}) => {
  return (
    <ul className="h-nav-list w-100 py-4 mb-4 rounded d-flex justify-content-evenly p-0">
            <li className="h-nav-item position-relative text-center">
            <a className="text-uppercase text-decoration-none" href="#">Home</a>
            </li>
            <li className="h-nav-item position-relative text-center">
            <a className="text-uppercase text-decoration-none" href="#">Contact</a>
            </li>
            <li className="h-nav-item position-relative text-center">
            <a className="text-uppercase text-decoration-none" href="#">About</a>
            </li>
            <li className="h-nav-item position-relative text-center">
            <a className="text-uppercase text-decoration-none" href="#" data-bs-toggle={logInToken.length > 0 ? "modal": ""} data-bs-target="#signUpModal">Account</a>
            </li>
        </ul>
  )
}

export default HeaderNavMenu