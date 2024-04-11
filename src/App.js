import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/home/Homepage";
import CustomAppBar from "./components/Appbar";
import Footer from "./components/Footer";
import Listpage from "./pages/study/Listpage";
import Postingpage from "./pages/study/Postingpage";
import Detailpage from "./pages/study/Detailpage";
import Guestbookpage from "./pages/guest/Guestbookpage";
import Calenderpage from "./pages/Calenderpage";

function App() {
  return (
    <Router>
      <div className="App">
        <CustomAppBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/calender" element={<Calenderpage />}/>
          <Route path="/study" element={<Listpage />} />
          <Route path="/Editor" element={<Postingpage />} />
          <Route path="/study/detail/:id" element={<Detailpage />} />
          <Route path="/guest_book" element={<Guestbookpage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
