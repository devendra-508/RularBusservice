import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
// import RoutesList from "./components/Routes/RoutesList";
import TrackBus from "./components/TrackBus/TrackBus";
import BookingStatus from "./components/Booking/BookingStatus";
import Help from "./components/Help/Help";
import Footer from "./components/Footer/Footer";
import AdminDashboard from "./components/Admin/AdminDashboard";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const isAdminPage = window.location.pathname === "/admin";

  return (
    <AuthProvider>
      {isAdminPage ? (
        <AdminDashboard />
      ) : (
        <>
          <Navbar />
          <main className="mx-auto w-full max-w-[1600px]">
            <Hero />
            {/* <RoutesList /> */}
            <TrackBus />
            <BookingStatus />
            <Help />
          </main>
          <Footer />
        </>
      )}
    </AuthProvider>
  );
}

export default App;