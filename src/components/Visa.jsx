// import { Link, NavLink } from "react-router-dom";

// const Visa = ({ visa }) => {
//     const { _id, visaType, photo, fee, name, document, age, ProccingTime, } = visa

//     return (
//         <div>
//             <div></div>
//             <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
//                 <img src={photo} alt={visaType} className="w-48  h-48 object-cover" />
//                 <div className="p-4">
//                     <h2 className="text-lg font-semibold text-gray-800">{visaType}</h2>
//                     <p className="text-gray-600">Name: {name}</p>
//                     <p className="text-gray-600">Fee: ${fee}</p>
//                     <p className="text-gray-600">Age: {age}</p>
//                     <p className="text-gray-600">Processing Time: {ProccingTime}</p>
//                     <p className="text-gray-600">Documents: {document}</p>

//                 </div>
//                 <div className="text-center justify-center items-center mr-10 mx-auto">
//                     {/* Dynamically set the ID in the URL */}
//                     <NavLink className="btn btn-primary mx-auto flex" to={`/visa/${_id}`}>
//                         See Details
//                     </NavLink>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Visa;
import { NavLink } from "react-router-dom";

const Visa = ({ visa }) => {
  const { _id, visaType, photo, fee, name, document, age, ProccingTime } = visa;

  return (
    <div>
      <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <img src={photo} alt={visaType} className="w-48 h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">{visaType}</h2>
          <p className="text-gray-600">Name: {name}</p>
          <p className="text-gray-600">Fee: ${fee}</p>
          <p className="text-gray-600">Age: {age}</p>
          <p className="text-gray-600">Processing Time: {ProccingTime}</p>
          <p className="text-gray-600">Documents: {document}</p>
        </div>
        <div className="text-center justify-center items-center">
          <NavLink className="btn btn-primary mx-auto flex" to={`/visaDetails/${_id}`}>
            See Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Visa;



