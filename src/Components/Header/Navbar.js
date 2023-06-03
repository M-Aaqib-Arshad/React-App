import React from 'react'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container">
    <button className="navbar-brand">Navbar</button>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <button className="nav-link active" aria-current="page">Home</button>
        </li>
        <li className="nav-item">
          <button className="nav-link">About</button>
        </li>
        <li className="nav-item dropdown">
          <button className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a classNameName="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}
