import React from "react";
import { useSelector } from "react-redux";
import Section from "./Section";

const Main = () => {
  const sections = useSelector((state) => state.car.sections);

  return (
    <main>
      {sections.map((section, index) => (
        <Section
          key={index}
          bgImage={section.bgImage}
          title={section.title}
          subtitle={section.subtitle}
          leftButton={section.leftButton}
          rightButton={section.rightButton}
          accessoriesSection={section.accessoriesSection}
        />
      ))}
    </main>
  );
};

export default Main;
