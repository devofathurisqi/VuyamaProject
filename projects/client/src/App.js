import { Box } from "@chakra-ui/react"
import "./Style/App.css"
import { Routes, Route, useNavigate } from "react-router-dom"

//import element
import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import ProductDetail from "./Pages/ProductDetail";
import TermAndCondition from "./Pages/TermAndCondition";
import FAQ from "./Pages/FAQ";
import Reseller from "./Pages/Reseller";
import AdminDashboard from "./Pages/AdminDashboard";
import NotFound from "./Pages/NotFound";
import { useSelector } from "react-redux"

function App() {
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  // Redirect to home if usernameAdmin is empty
  // if (!usernameAdmin) {
  //   navigate("/");
  // }

  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/collection/detail/:id" element={<ProductDetail />} />
        <Route path="/term&condition" element={<TermAndCondition />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/reseller" element={<Reseller />} />

        {/* Only render AdminDashboard if usernameAdmin is not empty */}
        {username && (
          <Route path="/dashboard" element={<AdminDashboard />} />
        )}
         <Route path="/*" element={<NotFound />} />
      </Routes>
    </Box>
  );
}

export default App;