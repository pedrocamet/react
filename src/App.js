
import './App.css';
import Sidebar from './Components/Sidebar';

import Content from './Components/Content';


 
function App() {
  return (
    <div className="App">      
      <header className="App-header">
        
       
        <div id="wrapper">
          <Sidebar/>
          <div class="container-fluid">
                <Content/>      
          </div>
        </div>
        

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         
        </a>
      </header>
    </div>
  );
}

export default App;
