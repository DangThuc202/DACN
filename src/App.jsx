import './App.css'
import HomePage from './pages/HomePage'
import DoctorPage from './pages/DoctorPage'
import SpecialtyPage from './pages/SpecialtyPage'
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import AuthModal from './components/common/AuthModal'
import AdminPage from './pages/AdminPage'
import { path } from './utils/constant'
import ManageDoctor from './components/common/AdminPage/Dashboard/ManageDoctor'
import ManageClinic from './components/common/AdminPage/Dashboard/ManageClinic'
import ManagePatient from './components/common/AdminPage/Dashboard/ManagePatient'
import ManageBooking from './components/common/AdminPage/Dashboard/ManageBooking'
import ManageDashboard from './components/common/AdminPage/Dashboard/ManageDashboard'
import Register from './components/common/Register'
import DetailDoctor from './pages/DetailDoctor'
import DetailSpecialty from './pages/DetailSpecialty'
import NotFoundPage from './components/NotFoundPage'
import DoctorDetailPage from './components/common/DoctorPage/DoctorDetailPage'
import EmailVerification from './components/auth/EmailVerification'
import ClinicPage from './components/common/ClinicPage/ClinicPage'
import ClinicDetailPage from './components/common/ClinicPage/ClinicDetailPage'
import { Switch } from '@mui/material'
import BlogPage from './components/common/Blog/BlogPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index path={path.HOME} exact element={<HomePage />} />
          <Route path={path.SPECIALTY} element={<SpecialtyPage />} />
          <Route path={path.DOCTORS} element={<DoctorPage />} />
          {/* Authentication */}
          <Route path={path.LOGIN} element={<AuthModal />} />
          <Route path={path.REGISTER} element={<Register />} />
          <Route path={path.ADMIN} element={<ManageDashboard />} />
          <Route path={path.MANAGEDOCTOR} element={<ManageDoctor />} />
          <Route path={path.MANAGECLINIC} element={<ManageClinic />} />
          <Route path={path.MANAGEPATIENT} element={<ManagePatient />} />
          <Route path={path.MANAGEBOOKING} element={<ManageBooking />} />
          {/* Thông tin chuyên khoa */}
          <Route path={path.DETAILSPECIALTY} element={<DetailSpecialty />} />
          {/* Thông tin bác sĩ */}
          <Route path={path.DOCTOR_DETAIL} element={<DetailDoctor />} />
          {/* Xác thực email */}
          <Route path={path.VERIFY_EMAIl} element={<EmailVerification />} />
          <Route path={path.CLINIC} element={<ClinicPage />} />
          <Route path={path.CLINIC_DETAIL} element={<ClinicDetailPage />} />
        </Route>
        <Route path={path.BLOG} element={<BlogPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
