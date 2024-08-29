import logo from './logo.svg';
import './App.css';
import See from './See.js';
import Go from './Go.js';

function App() {
  return (
  
    
   <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <p>
         Deployment is happening by GREAT INDIAN EDUCATION Student .
         After the change.
        </p>
       
        <See/>
      <Go/>
      </header>
    
    
    </div>
  
    
  );
}
export default App;

