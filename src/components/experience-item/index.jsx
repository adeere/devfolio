import { Link } from 'gatsby';
import React from 'react';

const classes = {
  wrapper: 'mb-6',
  name: 'font-semibold text-gray-900 pb-1',
  job: 'text-md text-gray-650 font-medium',
  description: 'text-md text-gray-600 font-light',
};

const ExpItem = ({ name, job, description, link = false, internal = false }) => {
  let linkContent;
  if (internal) {
    linkContent = <Link to={link}>{name}</Link>;
  } else {
    linkContent = <a href={link} target="_blank">{name}</a>;
  }

  return (
    <div className={classes.wrapper}>
      <h3
        className={`${classes.name} ${
          link ? 'hover:underline hover:text-black' : ''
        }`}
      >
        {link ? linkContent : name}
      </h3>
      <p className={classes.job}>
          {job}</p>
      <p className={classes.description}>
        {description}</p>
    </div>
  );
};

export default ExpItem;
