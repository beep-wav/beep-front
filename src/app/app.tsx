// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './app.module.scss';
import Login from './../pages/Login';
import Signup from './../pages/Signup';
import { Voice } from '@beep-front/voice';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/voice" element={<Voice />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
