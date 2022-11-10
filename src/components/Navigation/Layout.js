import { Fragment } from 'react';

import MainNavigation from './MainNavigation';

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation hoverNavHandler={props.hoverNav}/>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
