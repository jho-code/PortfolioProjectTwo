import { useContext } from "react";
import { CursorContext } from "../../context/CursorContext.jsx";

// import motion
import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";

import { fadeIn, textVariant } from "../../utils/motion.js";

import { testimonials } from "../../constants";

import { styles } from "../../styles";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("left", "spring", index * 0.5, 0.75)}
    className="bg-tertiary p-10 rounded-3xl lg:w-[320px] text-white"
  >
    <p className="text-5xl font-primary">"</p>
    <div className="mt-1">
      <p className="text-xs">{testimonial}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col text-sm up">
          <p className="font-medium uppercase">
            <span className="yellow-text-gradient">@ </span>
            {name}
          </p>
          <p className="mt-1 text-xs">
            {designation} de {company}
          </p>
        </div>
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);

  return (
    <section>
      <div className={`min-h-[350px]`}>
        <motion.div
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaverHandler}
          variants={textVariant()}
          className="text-b"
        >
          <p className="p text-center lg:text-left">¿Qué dicen de mi?</p>
          <h2 className="h2 text-center lg:text-left">Testimonios</h2>
        </motion.div>
      </div>
      <div
        className={`${styles.paddingX} lg:-mt-20 -mt-40 pb-14 flex flex-wrap gap-7 justify-center`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Feedbacks, "feedbacks");
