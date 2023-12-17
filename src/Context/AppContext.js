import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  // States
  const [formData, setFormData] = useState({
    name: "",
    ravenCoordinates: "",
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

  useEffect(() => {
    console.log(formData);
  }, [formData]);
  return (
    <AppContext.Provider value={{ formData, setFormData }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
