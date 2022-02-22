import { Anime } from "src/types/Anime";
import { motion } from "framer-motion";
import "./styles.css";

export const Card = ({ id, name, urlImage }: Anime) => {
  return (
    <motion.div
      layout
      animate={{
        opacity: 1,
        scale: 1,
      }}
      initial={{
        opacity: 0,
        scale: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <div className="content">
        <img src={urlImage} alt={name} />
        <h3>{name}</h3>
      </div>
    </motion.div>
  );
};
