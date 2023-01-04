import './App.css';
import 'animate.css';
import Home from './Pages/Home';
import Error from './Components/ErrorPages/Error';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (


    <>
      <Router>
        <Routes key={document.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />







        </Routes>
      </Router>
    </>
  );
}

export default App;
