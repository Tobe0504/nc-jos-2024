import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  // States
  const [formData, setFormData] = useState({
    name: "",
    raven_coordinates: "",
    gender: "",
    address: "",
    lc: "",
    birthday: "",
    rank: "",
    emergencyContact: "",
    allergies: "",
    allergyTreatment: "",
    oppositeSexCompatibility: "",
    firstSummit: "",
    emergencyContactRelationship: "",
    suggestions: "",
  });
  return (
    <AppContext.Provider value={{ formData, setFormData }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
