import React from "react";
import mikheil from "../../assets/images/mikheil.jpg";
import about from "../../assets/images/about.png";

const About = () => {
  return (
    <section
      style={{
        // backgroundImage: `radial-gradient(46.99% 72.3% at 39.8% 50%, hsla(0, 0%, 100%, 0.3) 0, #d9d7ea 100%)`,
        // backgroundColor: "#d9d7ea",

        // backgroundImage: `url(${backgroundImg})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // background:
        //   "radial-gradient(circle at center, #faf6ff, #f3ecff, #eee4fc, #f5eefe)",

        backgroundImage: `
          radial-gradient(circle at center, #f8f3ff, #f1e9ff, #ece3fb, #f3ecfd)
        `,
        backgroundBlendMode: "normal",
      }}
      className="flex justify-center items-center flex-col gap-4 px-50 pt-50 pb-20 "
    >
      <h1 lang="ka" className="text-7xl text-center font-light max-w-5xl">
        აკონტროლეთ თქვენი ფინანსები დღესვე{" "}
      </h1>
      <p className=" text-center  max-w-2xl mt-4">
        შეცვალეთ თქვენი მუშაობის წესი ძალისხმევის გარეშე - თვალყური ადევნეთ და
        შეასრულეთ დავალებები. გაამარტივეთ თქვენი სამუშაო პროცესი, გაზარდეთ
        პროდუქტიულობა და მიაღწიეთ მეტს.
      </p>
      <button className="button ">Get Started</button>
      <div className="grid grid-cols-3 gap-5 mt-10">
        <img className="col-span-2 rounded-2xl" src={about} />
        <img
          className="col-span-1 col-start-3 h-full object-cover rounded-2xl"
          src={mikheil}
        />
      </div>
    </section>
  );
};

export default About;
