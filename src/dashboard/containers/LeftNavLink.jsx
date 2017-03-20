import React, { PropTypes } from 'react';

const LeftNavLink = ({ text, active }) => {
  if (active) {
    return <span>{text}</span>;
  }

  return (
    <a href="#"
      onClick={e => e.preventDefault()}
    > {text}
    </a>
  );
};

LeftNavLink.propTypes = {
  text: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};


export default LeftNavLink;
