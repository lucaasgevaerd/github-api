import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import FindProfile from 'pages/FindProfile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-profile" element={<FindProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
