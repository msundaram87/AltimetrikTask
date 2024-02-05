import { useState } from "react";
import { Modal } from "../../utils/Modal/Modal";
import { Form } from "../Form/Form";

const Cars = ({ cars }) => {
  const [show, setShow] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("");
  return (
    <>
      {cars?.map((car) => (
        <div
          key={car.label}
          className="car__box"
          onClick={() => {
            setShow(true);
            setSelectedBrand(car.name);
          }}
          onKeyDown={() => {}}
        >
          <p>{car.name}</p>
        </div>
      ))}
      <Modal show={show}>
        <Form setShow={setShow} selectedBrand={selectedBrand} />
      </Modal>
    </>
  );
};

export default Cars;
