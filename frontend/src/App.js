
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom"
import CreateRoute from "./Components/Pages/CreateRoute";
import Home from "./Components/Pages/Home";
import RoutePage from "./Components/Pages/RoutePage";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/routePage" element={<RoutePage/>} />
      <Route path="/createRoute" element={<CreateRoute />} />
    </Routes>
    // <Container>
    /* <RoutePage></RoutePage> */
    // <CreateRoute></CreateRoute>
    // </Container>
  );
}

export default App;
