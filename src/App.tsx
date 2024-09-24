import LandingPage from './pages/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import StepperPage from './pages/StepperPage';
import ReportPage from './pages/ReportPage';
import FeedbackPage from './pages/FeedbackPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/stepper" element={<StepperPage />} />
        <Route path="/mydebtreport" element={<ReportPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="*" element={<div>404</div>} />
        <Route path="/404" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
