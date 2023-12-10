import '../style.css'; // or import './styles.scss';
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

import home_page_pic from "../images/home_page_pic.png"

const Home_page = () => {

  const blogData1 = [
    { title: '𝙲𝚞𝚛𝚛𝚎𝚗𝚝 𝙻𝚘𝚌𝚊𝚝𝚒𝚘𝚗', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: '𝙰𝚗𝚝𝚒-𝚃𝚑𝚎𝚏𝚝', content: 'Nulla et elit eu nisl laoreet volutpat vel ac elit.' },
    { title: '𝙰𝚍𝚍 𝙿𝚊𝚛𝚔𝚒𝚗𝚐 𝚉𝚘𝚗𝚎𝚜', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    // { title: 'Post 3', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    // { title: 'Post 3', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },

    // Add more blog posts as needed
  ];

  const blogData2 = [
    { title: '𝙽𝚎𝚊𝚛𝚎𝚜𝚝 𝙿𝚊𝚛𝚔𝚒𝚗𝚐 𝚉𝚘𝚗𝚎', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: '𝙰𝚗𝚊𝚕𝚢𝚜𝚒𝚜', content: 'Nulla et elit eu nisl laoreet volutpat vel ac elit.' },
    { title: ' ', content: ' ' },
    // { title: 'Post 3', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    // { title: 'Post 3', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    
    // Add more blog posts as needed
  ];
  return (
    <>
      <div className='header'>
        <a>𝑷𝒂𝒓𝒌𝒊𝒏𝒈 𝑮𝒖𝒂𝒓𝒅𝒊𝒂𝒏</a>

        <div className='container'>

          <div className='left'>
            𝙰 𝚞𝚜𝚎𝚛-𝚏𝚛𝚒𝚎𝚗𝚍𝚕𝚢 ✌️ 𝚊𝚗𝚍 𝚎𝚏𝚏𝚒𝚌𝚒𝚎𝚗𝚝 𝚜𝚘𝚕𝚞𝚝𝚒𝚘𝚗 𝚍𝚎𝚜𝚒𝚐𝚗𝚎𝚍 𝚝𝚘 𝚊𝚍𝚍𝚛𝚎𝚜𝚜 𝚝𝚑𝚎 𝚙𝚛𝚘𝚋𝚕𝚎𝚖 𝚘𝚏 𝚒𝚕𝚕𝚎𝚐𝚊𝚕 𝚙𝚊𝚛𝚔𝚒𝚗𝚐 🚘🚨𝚊𝚗𝚍 𝚒𝚖𝚙𝚛𝚘𝚟𝚎 𝚘𝚟𝚎𝚛𝚊𝚕𝚕 𝚙𝚊𝚛𝚔𝚒𝚗𝚐 🅿️ 𝚖𝚊𝚗𝚊𝚐𝚎𝚖𝚎𝚗𝚝 𝚒𝚗 𝚞𝚛𝚋𝚊𝚗 𝚊𝚛𝚎𝚊𝚜 . 
          </div>

          <div className='right'>
            <a>
              {<img src={home_page_pic} alt="home_page_pic" /*style={{ width: '400px', height: 'auto' ,position:'absolute'}} */ />}

            </a>
          </div>
        </div>
      </div>
      <div id="map">
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
       {/* <div className='features'>
  <h4>𝑭𝒆𝒂𝒕𝒖𝒓𝒆𝒔 𝑾𝒆 𝑷𝒓𝒐𝒗𝒊𝒅𝒆</h4>
  <div className="box">
        <div className="s-icons">
        <i className='bx bx-code-alt' ></i>
        </div>
      
      
        <h3>Current Location</h3>
        <p>

          
        </p>

        <a href="/'" className="read"> Read More</a>

    </div>


    <div className="box">
        <div className="s-icons">
            <i className='bx bx-code-alt' ></i>
        </div>
        <h3>Antitheft Alerts</h3>
        <p>

        </p>

        <a href="/'" className="read"> Read More</a>

    </div>



    <div className="box">
        <div className="s-icons">
            <i className='bx bx-code-alt' ></i>
        </div>
        <h3>Nearest Parking</h3>
        <p>

        </p>

        <a href="/'" className="read"> Read More</a>

    </div>



    <div className="box">
        <div className="s-icons">
            <i className='bx bx-code-alt' ></i>
        </div>
        <h3>Add Parking Zones</h3>
        <p>

        </p>

        <a href="/'" className="read"> Read More</a>

    </div>



    <div className="box">
        <div className="s-icons">
            <i className='bx bx-code-alt' ></i>
        </div>
        <h3>Analysis</h3>
        <p>

        </p>

        <a href="/'" className="read"> Read More</a>

    </div>



</div>
 
 

<div className="blog-section">
      <h2 className="section-title">Latest Blog Posts</h2>
      <div className="blog-post">
        <h3 className="post-title">Post Title</h3>
        <p className="post-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et elit eu nisl laoreet volutpat vel ac elit.
        </p>
      </div>
      {/* Add more blog posts as needed 
    </div>


    <div className="blog-section">
      <h2 className="section-title">Latest Blog Posts</h2>
      <div className="blog-post">
        <h3 className="post-title">Post Title</h3>
        <p className="post-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et elit eu nisl laoreet volutpat vel ac elit.
        </p>
      </div>
      {/* Add more blog posts as needed 
    </div>


    <div className="blog-section">
      <h2 className="section-title">Latest Blog Posts</h2>
      <div className="blog-post">
        <h3 className="post-title">Post Title</h3>
        <p className="post-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et elit eu nisl laoreet volutpat vel ac elit.
        </p>
      </div>
      {/* Add more blog posts as needed 
    </div>


*/}
<div className='blogs'>𝓕𝓮𝓪𝓽𝓾𝓻𝓮𝓼</div>

<div className="blog-section">

      <h2 className="section-title"></h2>
      <div className="blog-row">
      <i className='bx bx-code-alt' ></i>
      
        {blogData1.map((blog, index) => (
          <div key={index} className="blog-post">
            
            <h3 className="post-title">{blog.title}</h3>
            <p className="post-content">{blog.content}</p>
           
          </div>
          
        ))}
        
      </div>
    
    </div> 


    
    < div className="blog-section">
    
      <h2 className="section-title"></h2>
      <div className="blog-row">
      <i className='bx bx-code-alt' ></i>
        {blogData2.map((blog, index) => (
          <div key={index} className="blog-post">
            <h3 className="post-title">{blog.title}</h3>
            <p className="post-content">{blog.content}</p>
          </div>
        ))}
      </div>
      
    </div>
  </>
  )
}

export default Home_page;