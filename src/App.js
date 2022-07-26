import './App.css';
import Touch1 from './touch1.png';
import Touch2 from './touch2.png';

function App() {
  return (
    <>
      <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
        this is mips 
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={Touch1} 
        onMouseOver={e => (e.currentTarget.src = Touch2)}
        onMouseOut={e => (e.currentTarget.src = Touch1)}/>
      </div>
      <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontStyle:'italic' }}> 
        touch him 
      </h3>
    </>
  );
}


export default App;
