import Header from './components/Header';
import DaySchedule from './components/DaySchedule';
import AddAppointment from './components/AddAppointment';
import AllAppointments from './components/AllAppointments';
import Doctor from './components/Doctor';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import UpdateAppointment from './components/UpdateAppointment';







function App() {
  return (
  <Router>
    <div>
    
      <Header/>
      
      <Routes>
      <Route path="/add" element={<AddAppointment/>}/>
      <Route path="/" element={<AllAppointments/>}/>
      <Route path="/doctor" element={<Doctor/>}/>
      <Route path="/schedule" element={<DaySchedule/>}/>
      

      <Route path="/get/:id" element={<UpdateAppointment/>}/>
      <Route path="/update/:id" element={<UpdateAppointment/>}/>
      </Routes>
      
      
    </div>
    </Router>
  ); 
}

export default App;
 