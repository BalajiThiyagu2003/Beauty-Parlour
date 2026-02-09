import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BookingProvider } from './contexts/BookingContext';
import { MainLayout } from './components/layout/MainLayout';
import {
  LandingPage,
  AboutPage,
  ServicesPage,
  AppointmentPage,
  FeedbackPage,
  ContactPage,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <BookingProvider>
        <Routes>
          <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BookingProvider>
    </BrowserRouter>
  );
}

export default App;
