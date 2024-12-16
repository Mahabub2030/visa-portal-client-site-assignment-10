import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const MyVisaApplication = () => {


  const [applications, setApplications] = useState([]);

  // Simulate fetching user's visa applications from the database
  useEffect(() => {
    const fetchApplications = async () => {
      // Replace this mock data with an API call
      const mockApplications = [
        {
          id: 1,
          country: "Canada",
          countryImage: "https://via.placeholder.com/150",
          visaType: "Tourist visa",
          processingTime: "7-10 days",
          fee: "$100",
          validity: "6 months",
          applicationMethod: "Online",
          appliedDate: "2024-12-01",
          applicantName: "John Doe",
          applicantEmail: "johndoe@example.com",
        },
        {
          id: 2,
          country: "UK",
          countryImage: "https://via.placeholder.com/150",
          visaType: "Student visa",
          processingTime: "15-20 days",
          fee: "$200",
          validity: "1 year",
          applicationMethod: "Embassy",
          appliedDate: "2024-11-25",
          applicantName: "Jane Smith",
          applicantEmail: "janesmith@example.com",
        },
      ];
      setApplications(mockApplications); // Simulated API response
    };

    fetchApplications();
  }, []);

  // Handle cancel application
  const handleCancel = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action will cancel your visa application!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Replace with an API call to remove application from the database
        setApplications(applications.filter((app) => app.id !== id));
        Swal.fire("Cancelled!", "Your visa application has been cancelled.", "success");
      }
    });
  };
  return (
    <div className='container mx-auto'>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <h2 className="text-2xl">this form myvisa application</h2>
        <div className="min-h-screen bg-gray-100 p-6">
          <h2 className="text-3xl font-bold text-center mb-6">My Visa Applications</h2>
          {applications.length === 0 ? (
            <p className="text-center text-gray-600">No visa applications found.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((app) => (
                <div key={app.id} className="card bg-white shadow-md rounded-lg">
                  <figure>
                    <img
                      src={app.countryImage}
                      alt={app.country}
                      className="w-full h-48 object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h3 className="card-title text-lg font-bold">{app.country}</h3>
                    <p>
                      <strong>Visa Type:</strong> {app.visaType}
                    </p>
                    <p>
                      <strong>Processing Time:</strong> {app.processingTime}
                    </p>
                    <p>
                      <strong>Fee:</strong> {app.fee}
                    </p>
                    <p>
                      <strong>Validity:</strong> {app.validity}
                    </p>
                    <p>
                      <strong>Application Method:</strong> {app.applicationMethod}
                    </p>
                    <p>
                      <strong>Applied Date:</strong> {app.appliedDate}
                    </p>
                    <p>
                      <strong>Applicant's Name:</strong> {app.applicantName}
                    </p>
                    <p>
                      <strong>Applicant's Email:</strong> {app.applicantEmail}
                    </p>
                    <div className="card-actions mt-4 flex justify-end">
                      <button
                        className="btn btn-error"
                        onClick={() => handleCancel(app.id)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MyVisaApplication;