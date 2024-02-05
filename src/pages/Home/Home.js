import "./Home.scss";
import ResourceLoader from "../../ResourceLoader";
import Cars from "../../components/Cars/Cars";
import { fetchCarsData } from "../../data/CarSlice";

const carData = (
  <ResourceLoader
    resourceUrl="http://localhost:8000/api/carlist"
    resourceName="cars"
    slice={fetchCarsData}
  >
    <Cars />
  </ResourceLoader>
);

export const Home = () => {
  return (
    <div className="home">
      <div className="home__cars">{carData}</div>
    </div>
  );
};
