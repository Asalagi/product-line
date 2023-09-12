import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddSaddle from './add-saddle';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="add-saddle" element={<AddSaddle/>} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
