import { Route, Routes } from "react-router-dom";
import FormLayout from "./Components/FormLayout/FormLayout";
import Forms from "./Containers/Forms/Forms";
import LandingPage from "./Containers/LandingPage/LandingPage";
import RegistrationSuccess from "./Containers/RegistrationSuccess/RegistrationSuccess";
import Audio from "./Components/Audio/Audio";

function App() {
  return (
    <>
      <Audio />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/test" element={<FormLayout />} />
        <Route path="/registration/:formStep" element={<Forms />} />
        <Route path="/registration-success" element={<RegistrationSuccess />} />
      </Routes>
    </>
  );
}

export default App;
