import './App.css'
import HomePage from './pages/HomePage'
import DoctorPage from "./pages/DoctorPage"
import SpecialtyPage from './pages/SpecialtyPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/common/Signin"




const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index path='/' element={<HomePage />} />
          <Route path="chuyenkhoa" element={<SpecialtyPage />} />
          <Route path="doingubacsi" element={<DoctorPage />} />
          {/* <Route path="login" element={<DoctorPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );


}

export default App
