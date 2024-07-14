// import React from 'react';
// import { createRoot } from 'react-dom/client'; // Import from 'react-dom/client'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import App from './App'; // Adjust the path as necessary
// import HistoryResult from './Components/History Page/HistoryResult';
// // import store from './Redux/app/store';
// import { Provider } from 'react-redux';
// import {store} from './Redux/store';
// const root = createRoot(document.getElementById('root')); // Use createRoot
// root.render(
//   <React.StrictMode>
//    <Provider store={store} >
//     <Router>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/football-history" element={<HistoryResult/>} />
//       </Routes>
//     </Router>
//   </Provider>
//   </React.StrictMode>
// );

// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/store';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

