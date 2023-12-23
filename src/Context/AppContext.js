import axios from "axios";
import { createContext, useState } from "react";

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
  const [formSubmitRequest, setFormSubmitRequest] = useState({
    isLoading: false,
    data: null,
    error: null,
  });

  const [genderState, setGenderState] = useState("");
  // States
  const [lcState, setLcState] = useState("");
  const [rankState, setRankState] = useState("");
  const [firstSummitState, setFirstSummitState] = useState("");
  const [allergiesState, setAllergiesState] = useState("");
  const [oppositeSex, setOppositeSex] = useState("");

  const {
    name,
    gender,
    ravenCoordinates,
    address,
    lc,
    birthday,
    rank,
    firstSummit,
    allergies,
    allergyTreatment,
    oppositeSexCompatibility,
    emergencyContact,
    emergencyContactRelationship,
    suggestions,
  } = formData;

  const register = () => {
    setFormSubmitRequest({
      isLoading: true,
      data: null,
      error: null,
    });

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/api/register_for_ncjos`, {
        name,
        ravenCoordinates,
        gender,
        email: address,
        lc,
        birthday,
        rank,
        emergencyContact,
        allergies,
        allergyTreatment,
        oppositeSexCompatibility:
          oppositeSexCompatibility === "YES" ? true : false,
        firstSummit: firstSummit === "YES" ? true : false,
        emergencyContactRelationship,
        suggestions,
      })
      .then((res) => {
        setFormSubmitRequest({
          isLoading: false,
          data: res.data[0],
          error: null,
        });
      })
      .catch((err) => {
        setFormSubmitRequest({
          isLoading: false,
          data: null,
          error: err?.response?.data?.detail,
        });
      });
  };

  return (
    <AppContext.Provider
      value={{
        formData,
        setFormData,
        register,
        setFormSubmitRequest,
        formSubmitRequest,
        genderState,
        setGenderState,
        lcState,
        setLcState,
        rankState,
        setRankState,
        firstSummitState,
        setFirstSummitState,
        allergiesState,
        setAllergiesState,
        oppositeSex,
        setOppositeSex,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
