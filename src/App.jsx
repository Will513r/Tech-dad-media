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
} from "./components/index";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${style.paddingX} ${style.flexCenter} my-[-10px]`}>
        <div className={`${style.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${style.flexStart} my-[-65px]`}>
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
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
