
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from './layout/Layout';
import StudentHomePage from "./pages/Student/StudentHomePage";
import StudentCreatePage from "./pages/Student/StudentCreatePage";
import StudentEditPage from "./pages/Student/StudentEditPage";
import NotFoundPage from './pages/NotFoundPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/student" />} />  {/* Điều hướng tự động về student */}
          <Route path="student" element={<StudentHomePage />} />
          <Route path="student/create" element={<StudentCreatePage />} />
          <Route path="student/edit" element={<StudentEditPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
