import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {

  return (
    <>
      <Navbar title="Text-Utils" />

      <div className='container'>
        <TextForm heading="" />
      </div>
    </>

  );
}

export default App;
