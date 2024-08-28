
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar9.css';

function Header(){
  const [value, onChange] = useState(new Date());
    return(


      <nav class="navbar navbar-expand-lg navbar-dark bg-dark"style={{width: '300px', float: 'left',height:'auto', minHeight:'calc(100vh)', position:'fixed'}} >
  <div class="sidebar_content" >
  
  
    <center><div class="navbar-brand"  style={{color: 'blue',float:''}}><i class="fa fa-h-square" aria-hidden="true"></i><h> Hospital Management System</h></div></center>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    
      
        <br></br>
      
        <div className='nav-option option1 ' style={{display:'flex',flexDirection:'column', alignItems:'center', padding:'0px', gap:'20px'}}>
          <Link to="/" className="nav-link" ><i class="fa fa-home" aria-hidden="true"></i><h> All Appointments</h></Link>
        </div>
      
      <br></br>
      
      <div className='nav-option option1' style={{display:'flex',flexDirection:'column', alignItems:'center', padding:'0px', gap:'20px'}}>
        <Link to="/doctor" className="nav-link"><i class="fa fa-plus" aria-hidden="true"></i><h> Send Appointment</h></Link>
        </div>
      
      <br></br>
      
      
        <br></br>
        <br></br>
        <br></br>
        

        <div  style={{width: '250px'}}>
      <Calendar  onChange={onChange} value={value} />
    </div>
    
      
        
      </div>

     
      
      
    
    
  
</nav>
  
    )
}
export default Header;
