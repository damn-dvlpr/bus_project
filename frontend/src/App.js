
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom"
import CreateRoute from "./Components/Pages/CreateRoute";
import Home from "./Components/Pages/Home";
import EditRoute from "./Components/Pages/EditRoute";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/createRoute" element={<CreateRoute />} />
      <Route path="/editRoute" element={<EditRoute />} />
    </Routes>
  );
}

export default App;
