import "./Form.scss";
import { LabelInputs } from "../../utils/LabelInputs/LabelInputs";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreateCarForms } from "../../data/FormSlice";

export const Form = ({ setShow, selectedBrand }) => {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    brand: selectedBrand,
    model: "",
    location: "",
    color: "",
    owners: "",
    year: "",
    transmission: "",
    insurance: "",
    fitments: "",
    kms: "",
    photo: null,
  });

  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.forms);
  const handleChange = (label, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [label.toLowerCase()]: value,
    }));
  };

  const handleSubmit = () => {
    dispatch(
      CreateCarForms({ apiurl: "/api/create-form", formInfoData: formData })
    );
    setSuccess(true);
  };

  return !success ? (
    <>
      <div className="form">
        <LabelInputs
          label="Model"
          type="text"
          onChange={(value) => handleChange("Model", value)}
        />
        <LabelInputs
          label="Location"
          type="text"
          onChange={(value) => handleChange("Location", value)}
        />
        <LabelInputs
          label="Color"
          type="text"
          onChange={(value) => handleChange("Color", value)}
        />
        <LabelInputs
          label="No. of Owners"
          type="text"
          onChange={(value) => handleChange("Owners", value)}
        />
        <LabelInputs
          label="Year of manufacture"
          type="text"
          onChange={(value) => handleChange("year", value)}
        />
        <LabelInputs
          label="Transmission"
          type="text"
          onChange={(value) => handleChange("Transmission", value)}
        />
        <LabelInputs
          label="Insurance valid upto"
          type="text"
          onChange={(value) => handleChange("Insurance", value)}
        />
        <LabelInputs
          label="External Fitments"
          type="text"
          onChange={(value) => handleChange("Fitments", value)}
        />
        <LabelInputs
          label="Kms"
          type="text"
          onChange={(value) => handleChange("Kms", value)}
        />
        <LabelInputs
          label="Photo"
          type="file"
          onChange={(value) => handleChange("Photo", value)}
          image={true}
        />
        <svg
          onClick={() => setShow(false)}
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24"
          height="24"
          viewBox="0 0 50 50"
        >
          <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
        </svg>
      </div>
      <button onClick={handleSubmit} className="formSubmit">
        Submit
      </button>
    </>
  ) : (
    <div
      onKeyDown={() => {}}
      onClick={() => {
        setShow(false);
        setSuccess(false);
      }}
    >
      <p>Data updated successfully</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
