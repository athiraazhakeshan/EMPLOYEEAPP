import './App.css'
import './Styles/Login.css'
import './Styles/EmployeeDashboard.css'
import './Styles/AddEmployeeform.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Login from './components/Login/loginform';
import EmployeeDashboard from './components/Employee/EmployeeDashboard';
import AddEmployeeform from './components/Employee/AddEmployeeform';
import { EmpolyeeProvider } from './components/Employee/EmployeeContext'



function App() {
  return(
    <EmpolyeeProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/employee' element={<EmployeeDashboard/>}></Route>  
        <Route path='/addemployee' element={<AddEmployeeform/>}></Route> 
      
    </Routes>
    </Router>
    </EmpolyeeProvider>
  );
}

export default App;
