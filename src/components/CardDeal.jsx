import { card } from "../assets";
import styles, { layout } from "../style";
import Btn from "./Btn";

const CardDeal = () => {
  return (
    <section className={`${layout?.section} p-3 sm:p-0`}>
      <div className={layout?.sectionInfo}>
        <h2 className={`${styles?.heading2} `}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps{" "}
        </h2>
        <p className={`${styles?.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam eaque
          quae omnis aliquid enim ipsum eum provident, dolores minus sequi?
        </p>
        <Btn styles="mt-10" />
      </div>
      <div className={`${layout?.sectionImg}`}>
        <img src={card} alt="card" className={`w-[100%] h-[100%]`} />
      </div>
    </section>
  );
};

export default CardDeal;
