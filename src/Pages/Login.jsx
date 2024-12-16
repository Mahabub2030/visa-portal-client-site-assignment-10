import { Result } from "postcss";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Authcontext } from "../AuthProvider.jsx/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const { user, userLogIn, userGoogleLogin } = useContext(Authcontext);
  const handelLogin = (event) => {
    event.preventDefault();
    console.log("btn click");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const userRegisterInfo = { email, password };
    userLogIn(email, password)
      .then((result) => {
        console.log(result.user);
        let timerInterval;
        Swal.fire({
          title: "LogIn SuccesFully!",
          html: "",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },

         
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
            navigate('/'); 
          }
        });
      })
      .then((error) => {
        console.log(error);
      });

    



  };

  return (
    <div className="container mx-auto">
      <div>
        <Navbar></Navbar>
      </div>

      <div>
        <h2 className="text-3xl text-center mt-5 p-2 font-bold">
          Please Login Here
        </h2>
        <div className="">
          <div className="card bg-base-100 w-2/4 container shadow-2xl  mx-auto m-20 py-10 px-5">
            <form onSubmit={handelLogin} className="card-body p-10">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 space-y-5 text-center items-center">
                <button className="btn btn-primary w-full">Login</button>
                <p>
                  Don’t Have An Account?
                  <span className="ml-1 text-blue-500 hover:underline">
                    <Link to="/register" className="">
                      Register
                    </Link>
                  </span>
                </p>
                <div className="w-full flex items-center justify-center text-xl border py-[6px] rounded-lg mt-3 hover:bg-slate-300">
                  <span className="w-7 mr-2">
                    <img
                      className="w-7"
                      src="https://i.ibb.co.com/RDwjDBB/Logo-google-icon-PNG-removebg-preview.png"
                      alt=""
                    />
                  </span>
                  <button className="flex items-center">Login With Google</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Login;
