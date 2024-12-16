import Footer from "./Footer";
import Navbar from "./Navbar";
import Swal from 'sweetalert2'

const AddVisa = () => {

  const handelVisaAdded = e => {
    e.preventDefault();

    const photo = e.target.photo.value;
    const name = e.target.name.value;
    const visaType = e.target.visaType.value;
    const ProccingTime = e.target.time.value;
    const age = e.target.age.value;
    const fee = e.target.fee.value;
    const document = e.target.document.value;
    const Newvisa = { photo, name, visaType, ProccingTime, age,fee, document, }
    console.log(Newvisa)

    // send to data in sever site
    fetch('http://localhost:3000/visa',{
      method:'POST',
      headers:{
        'content-type':'application/json',
      },
      body:JSON.stringify(Newvisa)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            title: 'succse!',
            text: 'Use added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })

        }
      })

  }

  return (
    <div className="container mx-auto">
      <div><Navbar></Navbar></div>
      <div className="p-10 w-1/2 mx-auto items-center content-evenly bg-slate-500 rounded-2xl text-white font-mono mb-2">
        <h2 className="text-center p-5 text-3xl font-bold">Add visa </h2>
        <form onSubmit={handelVisaAdded} className="card-body text-black">
          {/* form first row */}
          <div className='flex flex-col lg:flex-row gap-5'>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="text" name='photo' placeholder="Photo url" className="input input-bordered" required />

            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Country Name</span>
              </label>
              <input type="text" name='name' placeholder="country name" className="input input-bordered" required />
            </div>
          </div>
          {/* form second row */}
          <div className='flex flex-col lg:flex-row gap-5 text-black'>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">Visa type</span>
              </label>
              <select name='visaType' className="select select-bordered" required>
                <option value="">Select a visa type</option>
                <option value="Tourist Visa">Tourist Visa</option>
                <option value="Student Visa">Student Visa</option>
                <option value="Official Visa">Official Visa</option>
              </select>
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text">ProcessingTime</span>
              </label>
              <input type="text" name='time' placeholder="ProcessingTime" className="input input-bordered" required />
            </div>
          </div>
          {/* form third row */}
          <div className='flex flex-col lg:flex-row gap-5 text-black'>

            <div className="form-control flex-1 ">
              <label className="label">
                <span className="label-text">age</span>
              </label>
              <input type="number" name='age' placeholder="Enter you age " className="input input-bordered" required />
            </div>
            <div className="form-control flex-1 ">
              <label className="label">
                <span className="label-text">Fee</span>
              </label>
              <input type="number" name='fee' placeholder="Enter you age " className="input input-bordered" required />
            </div>
          </div>
          {/* document here */}
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">Required Documents</span>
            </label>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <input type="radio" name='document' value="Valid passport" required />
                <span className="label-text">Valid passport</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name='document' value="Visa application form" required />
                <span className="label-text">Visa application form</span>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" name='document' value="Recent passport-sized photograph" required />
                <span className="label-text">Recent passport-sized photograph</span>
              </div>
            </div>
          </div>


          <div className="form-control text-black">
            <div>
              discription
            </div>
            <textarea name="discritiopn" id="" placeholder="Enter your description"
              rows="15"
              cols="30"
              className="input input-bordered border-gray-700"
              required></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add Visa</button>
          </div>
        </form>

      </div>
      <div><Footer></Footer></div>
    </div>
  );
};

export default AddVisa;