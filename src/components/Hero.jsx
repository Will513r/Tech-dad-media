import style from "../style";
import { website, illustration } from "../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${style.paddingY}`}
    >
      <div
        className={`flex-1 ${style.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-8">
          <img
            src={website}
            alt="discount"
            className="w-[25px] hidden ss:block"
          />
          <p className={`${style.paragraph} text-center ss:text-left ml-2`}>
            <span className="text-white">Empowering</span> Local Business{" "}
            <span className="text-white">Success Online.</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold text-center ss:text-[72px] text-[52px] ss:text-left text-white ss:leading-[100.8px] leading-[75px] sm:leading-[72px]">
            Find The Perfect
            <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Freelance Services</span>
          </h1>
          {/* <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div> */}
        </div>

        <h1 className="font-poppins font-semibold text-center ss:text-[68px] text-[52px] ss:text-left text-white ss:leading-[100.8px] leading-[75px] w-full">
          For Your Business.
        </h1>
        <p
          className={`${style.paragraph} text-center ss:text-left max-w-[470px] mt-5`}
        >
          Our agency specializes in providing high-quality website creation and
          SEO services tailored for small local businesses. We are dedicated to
          helping your business grow online, ensuring a professional web
          presence and improved search engine visibility.
        </p>
      </div>

      <div className={`flex-1 flex ${style.flexCenter} md:my-0 my-10 relative`}>
        {/* <img
          src={illustration}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5] scale-125"
        /> */}

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/IHf3JWkxUXA?si=cgprK_CAqKl-UctQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          className="z-[10] scale-110"
        ></iframe>

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
