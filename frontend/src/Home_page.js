import React from 'react'
import './style.css'; // or import './styles.scss';


const Home_page = () => {
  return (
    <>
      {/* <div className='header'>  PARKING GUARDIAN </div> */}
      

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Register</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Logout</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Features</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div className='header'> 
<a>PARKING GUARDIAN </a>


  <b>A user-friendly and efficient solution
    designed to address the problem of illegal parking and improve overall
    parking management in urban areas                 </b>  
</div>


      


    </>
  )
}

export default Home_page
