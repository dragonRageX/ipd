import React from 'react'
import './style.css'; // or import './styles.scss';
import pic_1 from './images/pic_1.png'


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
<a styling="color:white">𝑷𝒂𝒓𝒌𝒊𝒏𝒈 𝑮𝒖𝒂𝒓𝒅𝒊𝒂𝒏</a>
</div>

  <div  className='container'>
  <div className='left'>
  𝙰 𝚞𝚜𝚎𝚛-𝚏𝚛𝚒𝚎𝚗𝚍𝚕𝚢 𝚊𝚗𝚍 𝚎𝚏𝚏𝚒𝚌𝚒𝚎𝚗𝚝 𝚜𝚘𝚕𝚞𝚝𝚒𝚘𝚗 𝚍𝚎𝚜𝚒𝚐𝚗𝚎𝚍 𝚝𝚘 𝚊𝚍𝚍𝚛𝚎𝚜𝚜 𝚝𝚑𝚎 𝚙𝚛𝚘𝚋𝚕𝚎𝚖 𝚘𝚏 𝚒𝚕𝚕𝚎𝚐𝚊𝚕 𝚙𝚊𝚛𝚔𝚒𝚗𝚐 𝚊𝚗𝚍 𝚒𝚖𝚙𝚛𝚘𝚟𝚎 𝚘𝚟𝚎𝚛𝚊𝚕𝚕 𝚙𝚊𝚛𝚔𝚒𝚗𝚐 𝚖𝚊𝚗𝚊𝚐𝚎𝚖𝚎𝚗𝚝 𝚒𝚗 𝚞𝚛𝚋𝚊𝚗 𝚊𝚛𝚎𝚊𝚜  ✌️🚘🚨🅿️    
  </div>
  <div className='right'>
  <img src={pic_1} alt="pic_1" style={{ width: '400px', height: 'auto' ,position:'absolute'}} />
  </div>

    </div>


<div className='features'>
  <h4>𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔 𝑾𝒆 𝑷𝒓𝒐𝒗𝒊𝒅𝒆</h4>
  <div class="box">
        <div class="s-icons">
            <i class='bx bx-code-alt' ></i>
        </div>
      
      
        <h3>Current Location</h3>
        <p>

           
        </p>

        <a href="/'" class="read"> Read More</a>

    </div>


    <div class="box">
        <div class="s-icons">
            <i class='bx bx-code-alt' ></i>
        </div>
        <h3>Antitheft Alerts</h3>
        <p>

        </p>

        <a href="/'" class="read"> Read More</a>

    </div>



    <div class="box">
        <div class="s-icons">
            <i class='bx bx-code-alt' ></i>
        </div>
        <h3>Nearest Parking</h3>
        <p>

        </p>

        <a href="/'" class="read"> Read More</a>

    </div>



    <div class="box">
        <div class="s-icons">
            <i class='bx bx-code-alt' ></i>
        </div>
        <h3>Add Parking Zones</h3>
        <p>

        </p>

        <a href="/'" class="read"> Read More</a>

    </div>



    <div class="box">
        <div class="s-icons">
            <i class='bx bx-code-alt' ></i>
        </div>
        <h3>Analysis</h3>
        <p>

        </p>

        <a href="/'" class="read"> Read More</a>

    </div>



</div>





      


    </>
  )
}

export default Home_page
