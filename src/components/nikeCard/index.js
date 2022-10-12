import React from "react";
import "./index.css";
import shoes from "./../../assets/img/shoes.png";
import CardDetails from "./cardDetails";
import { useMotionValue, useTransform , motion} from "framer-motion";
const NikeCard = () => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
 
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])



  return (
    <div className="card-wrapper">
      <motion.div className="card-container" 
      style={{x, y, rotateX, rotateY, z: 100}}
       drag dragElastic={0.16} dragConstraints={{top: 0, bottom: 0, left: 0, right: 0}}
       whileTrap={{cursor: "grabbing"}}
       >
        <div className="top-container">
          <div className="circle-wrapper">
            <div className="circle"></div>
          </div>
          <div className="shoes-wrapper">
            <motion.div className="shoes"  whileTrap={{cursor: "grabbing"}} style={{ x, y, rotateX, rotateY, z: 10000, rotate: "-25deg" }} 
              drag dragElastic={0.12}>
              <img src={shoes} alt="shoes" />
            </motion.div>
          </div>
          <h1 className="card-title">NIKE AIR</h1>
        </div>
        <div className="bottom-container">
          <CardDetails />
        </div>
      </motion.div>
    </div>
  );
};

export default NikeCard;
