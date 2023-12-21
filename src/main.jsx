// import React from 'react'
// import ReactDOM from 'react-dom/client'
import './index.css'
// import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import Layout from './Layout.jsx'
// import Home from './Components/Home/Home.jsx'
// import About from './Components/About/About.jsx'
// import Contact from './Components/Contact/Contact.jsx'
// import Dashmain from './Components/Dashboard/Dashmain.jsx'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />} />
//       <Route path='Dashmain' element={<Dashmain />} />
//     </Route>
//   )
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )

// *******************************

// index.js or App.jsx
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
// import Layout from './Layout.jsx';
// import Home from './Components/Home/Home.jsx';
// import Dashmain from './Components/Dashboard/Dashmain.jsx';
// import DashboardLayout from './DashLayout.jsx';
// import Bio from './Components/Dashboard/Subjects/Bio.jsx';
// import Chem from './Components/Dashboard/Subjects/Chem.jsx';
// import Physics from './Components/Dashboard/Subjects/Physics.jsx';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path='Dashmain' element={<DashboardLayout><Dashmain /></DashboardLayout>}>
//         <Route path='bio' element={<Bio />} />
//         <Route path='chem' element={<Chem />} />
//         <Route path='physics' element={<Physics />} />
//       </Route>
//     </Route>
//   )
// );

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// );




// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import Layout from './Layout.jsx';
// import Home from './Components/Home/Home.jsx';
// import Dashmain from './Components/Dashboard/Dashmain.jsx';
// import DashboardLayout from './DashLayout.jsx';
// import Bio from './Components/Dashboard/Subjects/Bio.jsx';
// import Chem from './Components/Dashboard/Subjects/Chem.jsx';
// import Physics from './Components/Dashboard/Subjects/Physics.jsx';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />}   />
//           <Route
//             path="Dashmain/*"
//             element={
//               <DashboardLayout>
//                 <Routes>
//                   <Route index element={<Dashmain />} />
//                   <Route path="bio" element={<Bio />} />
//                   <Route path="chem" element={<Chem />} />
//                   <Route path="physics" element={<Physics />} />
//                 </Routes>
//               </DashboardLayout>
//             }
//           />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import Layout from './Layout.jsx';
// import Home from './Components/Home/Home.jsx';
// import Dashmain from './Components/Dashboard/Dashmain.jsx';
// import DashboardLayout from './DashLayout.jsx';
// import Bio from './Components/Dashboard/Subjects/Bio.jsx';
// import Chem from './Components/Dashboard/Subjects/Chem.jsx';
// import Physics from './Components/Dashboard/Subjects/Physics.jsx';
// import BioPracticals from './Components/Dashboard/BioPracticals/BioPracticals.jsx';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//         </Route>
//         <Route
//           path="Dashmain/*"
//           element={
//             <DashboardLayout>
//               <Routes>
//                 <Route index element={<Dashmain />} />
//                 <Route path="bio" element={<Bio />} />
//                 <Route path="chem" element={<Chem />} />
//                 <Route path="physics" element={<Physics />} />
//               </Routes>
//             </DashboardLayout>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// Update your App.jsx or index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Components/Home/Home.jsx';
import Dashmain from './Components/Dashboard/Dashmain.jsx';
import DashboardLayout from './DashLayout.jsx';
import Bio from './Components/Dashboard/Subjects/Bio.jsx';
import BioPracticals from './Components/Dashboard/BioPracticals/BioPracticals.jsx';
import Chem from './Components/Dashboard/Subjects/Chem.jsx';
import ChemPracticals from './Components/Dashboard/ChemPracticals/ChemPracticals.jsx';
import Physics from './Components/Dashboard/Subjects/Physics.jsx';
import PhyPracticals from './Components/Dashboard/PhyPracticals/PhyPracticals.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route
          path="Dashmain/*"
          element={
            <DashboardLayout>
              <Routes>
                <Route index element={<Dashmain />} />
                <Route path="bio" element={<Bio />} />
                {/* Add a new route for BioPracticals */}
                <Route path="biopracticals" element={<BioPracticals />} />
                <Route path="chem" element={<Chem />} />
                <Route path="chempracticals" element={<ChemPracticals />} />
                <Route path="physics" element={<Physics />} />
                <Route path="phypracticals" element={<PhyPracticals />} />
              </Routes>
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
