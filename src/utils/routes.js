import AdminPage from '../pages/AdminPage'
import CreateForm from '../components/common/AdminPage/Doctor/CreateForm'

return (Routes = [
  {
    path: '/admin',
    element: <AdminPage />,
    children: [{ path: '/quanlybacsi', element: <CreateForm /> }]
  }
])
