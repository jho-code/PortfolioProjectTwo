import { useContext } from "react";
import { CursorContext } from "../../context/CursorContext.jsx";

// import vertical element
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

// import components
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../constants";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#f4d880", color: "#546881" }}
    contentArrowStyle={{ borderRight: "7px solid #f4d880" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-primary text-[1.2rem] font-medium">
        {experience.title}
      </h3>
      <p className="text-secondary" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`} className="">
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  const { mouseEnterHandler, mouseLeaverHandler } = useContext(CursorContext);

  return (
    <>
      <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaverHandler}>
        <h2 className="h2 lg:text-[2.5rem] text-[1.8rem] text-center lg:text-left">
          Mi experiencia
        </h2>
      </div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor={"#e37c6c"}>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
