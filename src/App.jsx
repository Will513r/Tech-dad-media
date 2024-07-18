import React from "react";
import style from "./style";
import {
  Billing,
  Business,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
  Contact,
} from "./components/index";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${style.paddingX} ${style.flexCenter} my-[-10px]`}>
        <div className={`${style.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div
        className={`bg-primary ${style.flexStart} my-[-5px] ss:my-[-65px] ml-[0px] ss:ml-[75px] lg:ml-[20px]`}
      >
        <div className={`${style.boxWidth} `}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <Testimonials />
          <CTA />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
