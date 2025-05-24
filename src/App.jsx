import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/signup";
import Eventform from "./pages/Eventform";
import EventsPage from "./pages/EventPage";
import ProtectedRoute from "./routes/ProtectedRoutes";
import AttendeeDashboard from "./pages/AttendeeDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import EventDetails from "./pages/EventDetails";
import TicketBooking from "./pages/ticketbooking";
import ContactPage from "./pages/ContactPage";
import UserProfile from "./pages/userProfile";

function App() {
  return (
 
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="create-event" element={<Eventform />} />
        <Route path="events" element={<EventsPage />} />


        <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <AttendeeDashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/admindashboard" element={<AdminDashboard />} />
      <Route path="/eventdetails/:id" element={<EventDetails />} />
      <Route path="/ticketbooking/:id" element={<TicketBooking />} />
      <Route path="/contactpage" element={<ContactPage />} />
      <Route path="/profile" element={<UserProfile />} />

      </Routes>
  );
}

export default App;