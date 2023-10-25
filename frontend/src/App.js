import logo from './logo.svg';
import './App.css';
import LoginPage from './LoginPage';
import Home_page from './Home_page';
import { useEffect } from 'react';



function App() {
   useEffect(() => {
      document.title = "Parking Guardian";
    }, []);
   return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Home_page/>
   
 
   );
}

export default App;
