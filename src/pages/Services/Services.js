import "./Services.scss";
import ResourceLoader from "../../ResourceLoader";
import { Products } from "../../components/Products/Products";
import { fetchProductData } from "../../data/ProductSlice";
import { useSelector } from "react-redux";
import { useState } from "react";

export const Services = () => {
  const productData = useSelector((state) => state.products);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptionTranmission, setSelectedOptionTranmission] =
    useState("");
  const [selectedOptionYear, setSelectedOptionYear] = useState("");
  const [selectedChecked, setSelectedChecked] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");

  const products = (
    <ResourceLoader
      resourceUrl="http://localhost:8000/api/products"
      resourceName="products"
      slice={fetchProductData}
    >
      <Products
        filters={{
          location: selectedLocation,
          owners: selectedOption,
          brands: selectedChecked,
          transmission: selectedOptionTranmission,
          year: selectedOptionYear,
        }}
      />
    </ResourceLoader>
  );

  const handleOptionChangeOwners = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOptionChangeTransmission = (event) => {
    setSelectedOptionTranmission(event.target.value);
  };

  const handleOptionChangeYear = (option) => {
    let uniqeYears = [...selectedOptionYear];

    if (uniqeYears.includes(option)) {
      uniqeYears.splice(uniqeYears.indexOf(option), 1);
    } else {
      uniqeYears.push(option);
    }

    setSelectedOptionYear(uniqeYears);
  };

  const handleCheckboxChange = (option) => {
    const updatedOptions = [...selectedChecked];

    if (updatedOptions.includes(option)) {
      updatedOptions.splice(updatedOptions.indexOf(option), 1);
    } else {
      updatedOptions.push(option);
    }

    setSelectedChecked(updatedOptions);
  };

  const uniqueBrands = [
    ...new Set(productData.productData.map((data) => data.brand)),
  ];
  const uniqueOwners = [
    ...new Set(productData.productData.map((data) => data.owners)),
  ];
  const uniqueTransmission = [
    ...new Set(productData.productData.map((data) => data.transmission)),
  ];
  const uniqueYear = [
    ...new Set(productData.productData.map((data) => data.year)),
  ];

  console.log(selectedOptionYear);

  return (
    <div className="services">
      <div className="services__filter">
        <label>
          <h5>Location</h5>
          <select onChange={(e) => setSelectedLocation(e.target.value)}>
            {productData.productData.map((data, i) => (
              <option key={data.location} value={data.location}>
                {data.location}
              </option>
            ))}
          </select>
        </label>
        <label>
          <h5>Owners</h5>
          {uniqueOwners.map((owner) => (
            <>
              <input
                type="radio"
                value={owner}
                checked={selectedOption === owner}
                onChange={handleOptionChangeOwners}
              />
              <span>{owner}</span>
            </>
          ))}
        </label>
        <label>
          <h5>Brands</h5>
          {uniqueBrands.map((brand) => (
            <label key={brand}>
              <input
                type="checkbox"
                checked={selectedChecked.includes(brand)}
                onChange={() => handleCheckboxChange(brand)}
              />
              {brand}
            </label>
          ))}
        </label>
        <label>
          <h5>Year</h5>
          {uniqueYear.map((year) => (
            <p
              className={`year ${
                selectedOptionYear.includes(year) ? "yearSelected" : ""
              }`}
              key={year}
              onClick={() => handleOptionChangeYear(year)}
            >
              {year}
            </p>
          ))}
        </label>
        <label>
          <h5>Transmission</h5>
          {uniqueTransmission.map((trans) => (
            <>
              <input
                type="radio"
                value={trans}
                checked={selectedOptionTranmission === trans}
                onChange={handleOptionChangeTransmission}
              />
              <span>{trans}</span>
            </>
          ))}
        </label>
      </div>
      {products}
    </div>
  );
};
