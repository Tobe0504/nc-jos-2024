import Button from "../../Components/Button/Button";
import DropdownWithSearch from "../../Components/DropdownWithSearch/DropdownWithSearch";
import Input from "../../Components/Input/Input";
import classes from "../Forms/Forms.module.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { useEffect } from "react";

const Form2 = () => {
  // Router
  const navigate = useNavigate();

  // COntext
  const {
    formData,
    setFormData,
    lcState,
    setLcState,
    rankState,
    setRankState,
    firstSummitState,
    setFirstSummitState,
  } = useContext(AppContext);

  // Utils
  const inputChangeHandler = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  // Effects
  useEffect(() => {
    if (lcState) {
      setFormData((prevState) => {
        return { ...prevState, lc: lcState };
      });
    }

    // eslint-disable-next-line
  }, [lcState]);

  useEffect(() => {
    if (firstSummitState) {
      setFormData((prevState) => {
        return { ...prevState, firstSummit: firstSummitState };
      });
    }

    // eslint-disable-next-line
  }, [firstSummitState]);

  useEffect(() => {
    if (rankState) {
      setFormData((prevState) => {
        return { ...prevState, rank: rankState };
      });
    }

    // eslint-disable-next-line
  }, [rankState]);

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
        selected={lcState}
        setSelected={setLcState}
      />
      <Input
        placeholder="NAME (BIRTHDAY) DAY"
        type="text"
        value={formData.birthday}
        name="birthday"
        onChange={inputChangeHandler}
        onFocus={(e) => {
          e.target.type = "date";
        }}
        onBlur={(e) => {
          if (e.target) e.target.type = "text";
          // console.log(e);
        }}
      />
      <DropdownWithSearch
        title="RANK"
        options={["LCP", "LCVP", "TEAM LEADER", "EST", "TEAM MEMBER"]}
        selected={rankState}
        setSelected={setRankState}
      />
      <DropdownWithSearch
        title="IS THIS YOUR FIRST SUMMIT"
        options={["YES", "NO"]}
        selected={firstSummitState}
        setSelected={setFirstSummitState}
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
