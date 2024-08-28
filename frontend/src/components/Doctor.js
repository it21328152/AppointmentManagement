import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from "axios";

export default function TimeTable(){
    const[data, setData] = useState([]);
    const[search, setsearch] = useState([]);

    console.log(search)


    return(
        
        <div className="container" style={{width: '80%', float: 'right'}}>
            <br></br>
            <h1 style={{color:'white'}}>Doctor List</h1>
            <br></br>
           
            <form class="d-flex">
            <input class="form-control me-2 " type="text" onChange={(e) => setsearch(e.target.value)} placeholder="Search by Doctor Name" aria-label="Search"/>
            </form>
            <br></br>
            <br></br>
            



           <div class="card text-white bg-dark mb-3" style={{maxWidth:'1000px'}} >
            <div class="row g-0">
            <div class="col-md-4">
            <img src="logo200.png" style={{maxHeight:'175px',width: '60%', float: 'left'}} class="img-fluid rounded-start" alt="..."/>
            </div>
            <div class="col-md-8"style={{width: '50%',float: 'right'}}>
            <div class="card-body" >
            <h5 class="card-title">Dr. K P A PERERA</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <button type="button" class="btn btn-primary"><Link to="/add" state="K P A PERERA" style={{color:'white'}}><i class="fa fa-stethoscope" aria-hidden="true"></i> Channel</Link></button>
            </div>
            </div>
            </div>
          </div>

          <div class="card text-white bg-dark mb-3" style={{maxWidth:'1000px'}} >
            <div class="row g-0">
            <div class="col-md-4">
            <img src="logo200.png" style={{maxHeight:'175px',width: '60%', float: 'left'}} class="img-fluid rounded-start" alt="..."/>
            </div>
            <div class="col-md-8"style={{width: '50%',float: 'right'}}>
            <div class="card-body" >
            <h5 class="card-title">Dr. M R Samarasinghe</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <button type="button" class="btn btn-primary"><Link to="/add" state="M R Samarasinghe" style={{color:'white'}}><i class="fa fa-stethoscope" aria-hidden="true"></i> Channel</Link></button>
            </div>
            </div>
            </div>
          </div>

          <div class="card text-white bg-dark mb-3" style={{maxWidth:'1000px'}} >
            <div class="row g-0">
            <div class="col-md-4">
            <img src="logo200.png" style={{maxHeight:'175px',width: '60%', float: 'left'}} class="img-fluid rounded-start" alt="..."/>
            </div>
            <div class="col-md-8"style={{width: '50%',float: 'right'}}>
            <div class="card-body" >
            <h5 class="card-title">Dr. H K D Gunathilaka</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <button type="button" class="btn btn-primary"><Link to="/add" state="H K D Gunathilaka" style={{color:'white'}}><i class="fa fa-stethoscope" aria-hidden="true"></i> Channel</Link></button>
            </div>
            </div>
            </div>
          </div>

          <div class="card text-white bg-dark mb-3" style={{maxWidth:'1000px'}} >
            <div class="row g-0">
            <div class="col-md-4">
            <img src="logo200.png" style={{maxHeight:'175px',width: '60%', float: 'left'}} class="img-fluid rounded-start" alt="..."/>
            </div>
            <div class="col-md-8"style={{width: '50%',float: 'right'}}>
            <div class="card-body" >
            <h5 class="card-title">Dr. B Jayawardhana</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <button type="button" class="btn btn-primary"><Link to="/add" state="B Jayawardhana" style={{color:'white'}}><i class="fa fa-stethoscope" aria-hidden="true"></i> Channel</Link></button>
            </div>
            </div>
            </div>
          </div>


 
            




            

            <br></br>

                

  
            

            
        </div>
      
        
    )

    
    
}
