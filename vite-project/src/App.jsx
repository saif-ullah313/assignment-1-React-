
import { Children } from 'react';
import './App.css'
import First_Task from './components/First_Task'
import Hello from './components/Prictice Question'
import MobileCompany from './components/spread2';
import University from './components/university';
import Random from './components/Prictice Question';
function App() {

  let Mobile = {
    name:'OPPO',
    model:"A15",
    RAM:"128GB",
    ROM:"8GB",
    Available: "Yes"

  };


 

  return (
    <>
     <First_Task/>
     <Random></Random>
     <Random></Random>
     <Random></Random>
     <Random></Random>
     <MobileCompany {...Mobile}/>
     

     
     <University>
    
     name={"CS"}
     HOD={"Sir Zahid"}
     </University>


     <nav class="navbar bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24"/>
    </a>
  </div>
</nav>
        
    </>
  )
}

export default App
