
import './App.css';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
import Content from './Components/Content';


 
function App() {
  return (
    <div className="App">      
      <header className="App-header">
        
       
        <div id="wrapper">
          <Sidebar/>
          <div  id="content-wrapper" class="d-flex flex-column">
                <Topbar/>          
          </div>
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
