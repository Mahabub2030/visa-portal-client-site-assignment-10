import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
const MyAddedVisa = () => {
  const [visas, setVisas] = useState([]);
  const [modalData, setModalData] = useState(null);

  // Simulated fetch user-specific visas from the database
  useEffect(() => {
    const fetchUserVisas = async () => {
      // Replace with actual API request to fetch visas for the logged-in user
      const mockVisas = [
        {
          id: 1,
          country: "Japan",
          countryImage: "https://via.placeholder.com/150",
          visaType: "Tourist visa",
          processingTime: "5-7 days",
          fee: "$50",
          validity: "3 months",
          applicationMethod: "Online",
        },
        {
          id: 2,
          country: "Australia",
          countryImage: "https://via.placeholder.com/150",
          visaType: "Student visa",
          processingTime: "15-20 days",
          fee: "$150",
          validity: "1 year",
          applicationMethod: "Embassy",
        },
      ];
      setVisas(mockVisas); // Simulating response
    };

    fetchUserVisas();
  }, []);

  // Delete visa handler
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this data!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Replace with actual API call for deleting the visa
        setVisas(visas.filter((visa) => visa.id !== id));
        Swal.fire("Deleted!", "Visa has been deleted.", "success");
      }
    });
  };

  // Open modal with selected visa data
  const openUpdateModal = (visa) => {
    setModalData({ ...visa });
  };

  // Handle form submission for update
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    // Replace with API request to update visa in the database
    setVisas((prevVisas) =>
      prevVisas.map((visa) => (visa.id === modalData.id ? modalData : visa))
    );
    setModalData(null);
    Swal.fire("Updated!", "Visa information has been updated.", "success");
  };

  // Handle changes in modal form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModalData({ ...modalData, [name]: value });
  };

  return (
    <div className="min-h-screen bg-gray-100  container mx-auto">
      <Navbar></Navbar>
      <h2 className="text-3xl font-bold text-center mb-6">My Added Visas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visas.map((visa) => (
          <div key={visa.id} className="card bg-white shadow-md rounded-lg">
            <figure>
              <img
                src={visa.countryImage}
                alt={visa.country}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-lg font-bold">{visa.country}</h3>
              <p>
                <strong>Visa Type:</strong> {visa.visaType}
              </p>
              <p>
                <strong>Processing Time:</strong> {visa.processingTime}
              </p>
              <p>
                <strong>Fee:</strong> {visa.fee}
              </p>
              <p>
                <strong>Validity:</strong> {visa.validity}
              </p>
              <p>
                <strong>Application Method:</strong> {visa.applicationMethod}
              </p>
              <div className="card-actions mt-4 flex justify-end">
                <button
                  className="btn btn-primary mr-2"
                  onClick={() => openUpdateModal(visa)}
                >
                  Update
                </button>
                <button
                  className="btn btn-error"
                  onClick={() => handleDelete(visa.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Update Modal */}
      {modalData && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">Update Visa</h3>
            <form onSubmit={handleUpdateSubmit} className="space-y-4">
              <div>
                <label className="block font-medium">Country</label>
                <input
                  type="text"
                  name="country"
                  value={modalData.country}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="block font-medium">Visa Type</label>
                <input
                  type="text"
                  name="visaType"
                  value={modalData.visaType}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="block font-medium">Processing Time</label>
                <input
                  type="text"
                  name="processingTime"
                  value={modalData.processingTime}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="block font-medium">Fee</label>
                <input
                  type="text"
                  name="fee"
                  value={modalData.fee}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="block font-medium">Validity</label>
                <input
                  type="text"
                  name="validity"
                  value={modalData.validity}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="block font-medium">Application Method</label>
                <input
                  type="text"
                  name="applicationMethod"
                  value={modalData.applicationMethod}
                  onChange={handleInputChange}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="modal-action">
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => setModalData(null)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default MyAddedVisa;