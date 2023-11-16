import '../style.css'; // or import './styles.scss';

import home_page_pic from "../images/home_page_pic.png"

const Home_page = () => {
  return (
    <>
      {/* <div className='header'>  PARKING GUARDIAN </div> */}

      {/* 
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
</nav> */}

      <div className='header'>
        <a>𝑷𝒂𝒓𝒌𝒊𝒏𝒈 𝑮𝒖𝒂𝒓𝒅𝒊𝒂𝒏</a>

        <div className='container'>

          <div className='left'>
            𝙰 𝚞𝚜𝚎𝚛-𝚏𝚛𝚒𝚎𝚗𝚍𝚕𝚢 ✌️ 𝚊𝚗𝚍 𝚎𝚏𝚏𝚒𝚌𝚒𝚎𝚗𝚝 𝚜𝚘𝚕𝚞𝚝𝚒𝚘𝚗 𝚍𝚎𝚜𝚒𝚐𝚗𝚎𝚍 𝚝𝚘 𝚊𝚍𝚍𝚛𝚎𝚜𝚜 𝚝𝚑𝚎 𝚙𝚛𝚘𝚋𝚕𝚎𝚖 𝚘𝚏 𝚒𝚕𝚕𝚎𝚐𝚊𝚕 𝚙𝚊𝚛𝚔𝚒𝚗𝚐 𝚊𝚗𝚍 𝚒𝚖𝚙𝚛𝚘𝚟𝚎 𝚘𝚟𝚎𝚛𝚊𝚕𝚕 𝚙𝚊𝚛𝚔𝚒𝚗𝚐 𝚖𝚊𝚗𝚊𝚐𝚎𝚖𝚎𝚗𝚝 𝚒𝚗 𝚞𝚛𝚋𝚊𝚗 𝚊𝚛𝚎𝚊𝚜  🚘🚨🅿️
          </div>

          <div className='right'>
            <a>
              {<img src={home_page_pic} alt="home_page_pic" /*style={{ width: '400px', height: 'auto' ,position:'absolute'}} */ />}

            </a>
          </div>
        </div>
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
 */}


      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Boost your conversion rate
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src="../images/car_location_pic.png" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      Michael Foster
                    </a>
                  </p>
                  <p className="text-gray-600">Co-Founder / CTO</p>
                </div>
              </div>
            </article>

            {/* <!-- More posts... --> */}
          </div>
        </div>
      </div>





      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Boost your conversion rate
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src="../images/car_location_pic.png" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      ayush shah
                    </a>
                  </p>
                  <p className="text-gray-600">Co-Founder / CTO</p>
                </div>
              </div>
            </article>

            {/* <!-- More posts... --> */}
          </div>
        </div>
      </div>







      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time datetime="2020-03-16" className="text-gray-500">Mar 16, 2020</time>
                <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Boost your conversion rate
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src="../images/car_location_pic.png" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      vihan shah
                    </a>
                  </p>
                  <p className="text-gray-600">Co-Founder / CTO</p>
                </div>
              </div>
            </article>

            {/* <!-- More posts... --> */}
          </div>
        </div>
      </div>









    </>
  )
}

export default Home_page;
