import '../App.css';
import Sidebar from '../components/Sidebar';
import 'animate.css';
import RoutesContainer from './index.js';
import Header from '../components/Header/Header';

function App() {
  return (

  <div className="App">

      <Header/>
      <Sidebar/>
      <div className='container'>
        <RoutesContainer/>
      </div>


</div>
  )

  }

export default App;
