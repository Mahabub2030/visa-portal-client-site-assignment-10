import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
  const loadedVisa = useLoaderData();
  
  console.log("loded visa is here", loadedVisa);

  return (
    <div className="container mx-auto p-5">
      <Navbar></Navbar>
      <Banner></Banner>

   
      <Footer></Footer>
    </div>
  );
};

export default Home;
