import './App.css';
import { Toaster } from 'react-hot-toast';
import Colors from './Colors/Colors';


function App() {
  return (
    <div className="App">
      <Toaster position="bottom-center" reverseOrder={false}/>
      <Colors/>
    </div>
  );
}

export default App;
