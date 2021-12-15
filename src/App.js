import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import './App.css';
import TestScreen from './screens/TestScreen';


function App() {
  return (

  <div className="App">

<Router>
     
      <main className='py-3'>

        <Routes>

        <Route path="/test" element={<TestScreen/>}  />
        <Route path="/" element={<HomeScreen/>}  />


        </Routes>
      </main>
      
      </Router>

</div>

 
  );
}

export default App;
