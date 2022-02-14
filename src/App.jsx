import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Enemy from './Components/Enemy';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/enemy' element={<Enemy />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
