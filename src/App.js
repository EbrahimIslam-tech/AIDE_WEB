import RoutesContainer from './routes';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='container'>
        <RoutesContainer/>
      </div>
    </div>
  );
}

export default App;
