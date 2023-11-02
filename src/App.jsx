import './App.css'
import HomePage from './pages/HomePage'
import DoctorPage from "./pages/DoctorPage"
import SpecialtyPage from './pages/SpecialtyPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthModal from './components/common/AuthModal';
import Login from './components/common/Login';
import AdminPage from './pages/AdminPage';
import DoctorAuthPage from "./pages/DoctorAuthPage"

const App = () => {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path="/">
          <Route index path='/' element={<HomePage />} />
          <Route path="chuyenkhoa" element={<SpecialtyPage />} />
          <Route path="doingubacsi" element={<DoctorPage />} />
        </Route>
      </Routes> */}
      {/* <AuthModal /> */}
      {/* <AdminPage /> */}
      <DoctorAuthPage />
    </BrowserRouter>

  );


}

export default App
