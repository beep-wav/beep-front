// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './../pages/Login';
import Signup from './../pages/Signup';
import Channels from './../pages/Channels';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/channels" element={<Channels />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
