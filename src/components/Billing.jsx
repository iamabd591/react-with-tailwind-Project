import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <>
      <section id="product" className={`${layout?.sectionReverse} p-3 sm:p-0`}>
        <div className={`${layout?.sectionImgReverse} `}>
          <center>
            <img src={bill} className="w-[100%] h-[100%] relative z-[5]" />
          </center>

          <div className="absloute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white_gradient" />
          <div className="absloute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink_gradient" />
        </div>
        <div className={layout?.sectionInfo}>
          <h2 className={`${styles?.heading2}`}>
            {" "}
            Easily control your <br className="sm:block hidden" />
            billing & invocing.
          </h2>
          <p className={`${styles?.paragraph} max-w-[470px] mt-5`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
            quasi itaque magnam vel, accusantium corrupti optio dolor? Dolorum,
            ullam tempore!
          </p>
          <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
            <img
              src={apple}
              alt="apple_btn"
              className="w-[128px] h-[42px] object-contain cursor-pointer mr-5"
            />
            <img
              src={google}
              alt="apple_btn"
              className="w-[128px] h-[42px] object-contain cursor-pointer "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Billing;
