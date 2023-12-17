import { Route, Routes } from "react-router-dom";
import FormLayout from "./Components/FormLayout/FormLayout";
import Forms from "./Containers/Forms/Forms";
import LandingPage from "./Containers/LandingPage/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/test" element={<FormLayout />} />
      <Route path="/registration/:formStep" element={<Forms />} />
    </Routes>
  );
}

export default App;
