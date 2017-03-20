import React from 'react';
import LeftNavLink from '../containers/LeftNavLink';

const LeftNav = () => {
  return (
    <div>
      <LeftNavLink text={'Feed'} /> {' '}
      <LeftNavLink text={'Submit'} /> {' '}
      <LeftNavLink text={'Contact'} /> {' '}
    </div>
  );
};

export default LeftNav;
