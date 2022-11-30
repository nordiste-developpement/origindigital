import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/AuthentificatedRoute/PrivateRoute";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<Home />} path="/" />
        </Route>
      </Routes>
      <div className="test">
        <h1>Bonjoir</h1>
      </div>
    </div>
  );
}

export default App;
