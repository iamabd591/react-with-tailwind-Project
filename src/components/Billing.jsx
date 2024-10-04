import { bill } from "../assets";
import { layout } from "../style";

const Billing = () => {
  return (
    <>
      <section id="product" className={layout?.sectionReverse}>
        <div className={layout?.sectionImgReverse}>
          <img src={bill} className="w-[100%] h-[100%] relative z-[5]" />

          <div className="absloute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white_gradient" />
          <div className="absloute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink_gradient" />
        </div>
      </section>
    </>
  );
};

export default Billing;
