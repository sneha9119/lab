// import React, { useState, useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   Link,
// } from "react-router-dom";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Dashboard from "./components/Dashboard";
// import Profile from "./components/Profile";
// import Search from "./components/Search";
// import SkillExchange from "./components/SkillExchange";
// import SkillList from "./components/SkillList";
// import Message from "./components/Message";
// import "./App.css"; // Global styles

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsAuthenticated(!!token);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsAuthenticated(false);
//   };

//   return (
//     <Router>
//       <div className="App">
//         {/* Navbar */}
//         <nav>
//           <h2>Skill Exchange App</h2>
//           <ul>
//             <li>
//               <Link to="/search">Search</Link>
//             </li>
//             {isAuthenticated ? (
//               <>
//                 <li>
//                   <Link to="/dashboard">Dashboard</Link>
//                 </li>
//                 <li>
//                   <Link to="/profile">Profile</Link>
//                 </li>
//                 <li>
//                   <button onClick={handleLogout}>Logout</button>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li>
//                   <Link to="/login">Login</Link>
//                 </li>
//                 <li>
//                   <Link to="/register">Register</Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </nav>

//         {/* Routes */}
//         <Routes>
//           <Route
//             path="/login"
//             element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />}
//           />
//           <Route
//             path="/register"
//             element={isAuthenticated ? <Navigate to="/dashboard" /> : <Register />}
//           />
//           <Route
//             path="/dashboard"
//             element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
//           />
//           <Route
//             path="/profile"
//             element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
//           />
//           <Route path="/search" element={<Search />} />
//           <Route
//             path="/exchange/:exchangeId"
//             element={isAuthenticated ? <SkillExchange /> : <Navigate to="/login" />}
//           />
//           <Route
//             path="/skills"
//             element={isAuthenticated ? <SkillList /> : <Navigate to="/login" />}
//           />
//           <Route
//             path="/messages"
//             element={isAuthenticated ? <Message /> : <Navigate to="/login" />}
//           />
//          {/* // <Route
//            // path="/"
//           //  element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} />}
//           /> */}
//           <Route path="/" element={<SkillExchange />} />

//           <Route path="*" element={<h2>404 - Page Not Found</h2>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Search from "./components/Search";
import SkillExchange from "./components/SkillExchange";
import SkillList from "./components/SkillList";
import Message from "./components/Message";
import "./App.css"; // Global styles

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo">
            <Link to="/">SkillExchange</Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/search">Search</Link>
            </li>
            {isAuthenticated ? (
              <>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <button className="logout-btn" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/register"
            element={isAuthenticated ? <Navigate to="/dashboard" /> : <Register setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile"
            element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
          />
          <Route path="/search" element={<Search />} />
          <Route
            path="/exchange/:exchangeId"
            element={isAuthenticated ? <SkillExchange /> : <Navigate to="/login" />}
          />
          <Route
            path="/skills"
            element={isAuthenticated ? <SkillList /> : <Navigate to="/login" />}
          />
          <Route
            path="/messages"
            element={isAuthenticated ? <Message /> : <Navigate to="/login" />}
          />
          <Route path="/" element={<SkillExchange />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

