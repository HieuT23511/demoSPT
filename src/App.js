import Layout from './pages/Layout';
import AcountInfo from './pages/AccountInfo';
import AddressInfo from './pages/AddressInfo';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
            <Route path='/account' element={<AcountInfo/>}></Route>
            <Route path='/address' element={<AddressInfo/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

