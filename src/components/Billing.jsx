import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="transaction" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Payment Transactions <br className="sm:block hidden" />
        at Competitive Rates
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Easily control your billing & invoicing. Collaborate seamlessly with us
        and experience smooth payment transactions at a competitive rate.
      </p>

      {/* <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={
            "https://banner2.cleanpng.com/20180418/xie/kisspng-paypal-logo-e-commerce-payment-system-paypal-5ad78137f1e9c2.9153968515240727599909.jpg"
          }
          alt="google_play"
          className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={
            "https://cdn.freelogovectors.net/wp-content/uploads/2024/03/payoneer-logo-freelogovectors.net_-640x474.png"
          }
          alt="google_play"
          className="w-[144.17px] h-[43.08px] object-contain cursor-pointer"
        />
      </div> */}
    </div>
  </section>
);

export default Billing;
