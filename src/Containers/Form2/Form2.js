import Button from "../../Components/Button/Button";
import DropdownWithSearch from "../../Components/DropdownWithSearch/DropdownWithSearch";
import Input from "../../Components/Input/Input";
import classes from "../Forms/Forms.module.css";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import { useEffect } from "react";

const Form2 = () => {
  // Router
  const navigate = useNavigate();

  // COntext
  const { formData, setFormData } = useContext(AppContext);

  // States
  const [lc, setLc] = useState("");
  const [rank, setRank] = useState("");
  const [firstSummit, setFirstSummit] = useState("");

  // Utils
  const inputChangeHandler = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  // Effects
  useEffect(() => {
    if (lc) {
      setFormData((prevState) => {
        return { ...prevState, lc: lc };
      });
    }

    // eslint-disable-next-line
  }, [lc]);

  useEffect(() => {
    if (firstSummit) {
      setFormData((prevState) => {
        return { ...prevState, firstSummit: firstSummit };
      });
    }

    // eslint-disable-next-line
  }, [firstSummit]);

  useEffect(() => {
    if (lc) {
      setFormData((prevState) => {
        return { ...prevState, rank: rank };
      });
    }

    // eslint-disable-next-line
  }, [rank]);

  return (
    <form className={classes.container}>
      <DropdownWithSearch
        title="KINGDOM"
        options={[
          "ABEOKUTA",
          "ABUJA",
          "AKURE",
          "BENIN",
          "BENUE",
          "CALABAR",
          "ENUGU",
          "IBADAN",
          "IFE",
          "ILORIN",
          "JOS",
          "LAGOS",
          "PORT HARCOURT",
          "THE COOKS",
        ]}
        selected={lc}
        setSelected={setLc}
      />
      <Input
        placeholder="NAME (BIRTHDAY) DAY"
        type="date"
        value={formData.birthday}
        name="birthday"
        onChange={inputChangeHandler}
      />
      <DropdownWithSearch
        title="RANK"
        options={["LCP", "LCVP", "TEAM LEADER", "EST", "TEAM MEMBER"]}
        selected={rank}
        setSelected={setRank}
      />
      <DropdownWithSearch
        title="IS THIS YOUR FIRST SUMMIT"
        options={["YES", "NO"]}
        selected={firstSummit}
        setSelected={setFirstSummit}
      />

      <Button
        onClick={() => {
          navigate("/registration/3");
        }}
      >
        NEXT
      </Button>
    </form>
  );
};

export default Form2;
