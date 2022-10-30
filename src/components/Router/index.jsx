import '../../App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
// import React, { useEffect, useState } from 'react';
// import { createContext } from 'react';
// import Footer from '../Footer';
import Navbar from '../Navbar';

// const dataLodgings = [];
// export const LodgingContext = createContext(dataLodgings);

const App = () => {
  //   const [lodgings, setLodgings] = useState([]);
  //   useEffect(() => {
  //     fetch('/lodgingData.json')
  //       .then((res) => res.json())
  //       .then((data) => setLodgings(data));
  //   }, []);

  return (
    <BrowserRouter>
      <Navbar />
      {/* <LodgingContext.Provider value={lodgings}> */}
      <Router />
      {/* </LodgingContext.Provider> */}
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
