import React from 'react';

import Section from '../section';
import ExpItem from '../experience-item';

const SectionExperience = ({ experience }) => {
  if (!experience.length) return null;

  return (
    <Section title="Experience">
      {experience.map((item) => (
        <ExpItem
          key={item.name}
          name={item.name}
          job={item.job}
          description = {item.description}
          link={item.link}
        />
      ))}
    </Section>
  );
};

export default SectionExperience;
