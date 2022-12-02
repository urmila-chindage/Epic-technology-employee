import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Employee from './components/Employee';
import Addemployee from './components/Addemployee';
import EmployeeDetail from './components/EmployeeDetail';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';  


function App() {
  
  return (
    <Router> 
         <Routes>  
                 <Route exact path='/' element={< Employee />}></Route>  
                 <Route exact path='/add' element={< Addemployee />}></Route> 
                 <Route exact path='/employeedetail/:id' element={< EmployeeDetail />}></Route> 
          </Routes>  
    </Router>
  );
}

export default App;


