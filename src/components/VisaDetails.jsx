
import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const VisaDetails = ({params}) => {
  // Use `useLoaderData` to fetch the visa data from the loader
  const visa = useLoaderData();

  const { _id, visaType, photo, fee, name, document, age, ProccingTime } = visa;

  return (
    <div className="p-8">
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Visa Details</h2>
        <div className="max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={photo} alt={visaType} className="w-full h-64 object-cover" />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">{visaType}</h2>
            <p className="text-gray-600">Name: {name}</p>
            <p className="text-gray-600">Fee: ${fee}</p>
            <p className="text-gray-600">Age: {age}</p>
            <p className="text-gray-600">Processing Time: {ProccingTime}</p>
            <p className="text-gray-600">Documents: {document}</p>
          </div>
        </div>
      </div>
      <div><Footer></Footer></div>
    </div>
  );
};

export default VisaDetails;
