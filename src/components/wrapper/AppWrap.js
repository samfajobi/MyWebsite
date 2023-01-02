import React from "react";
import { NavigationDots, SocialMedia } from "../../FooterComponents";

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    let date = new Date().getFullYear();
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className='app__wrapper app__flex'>
          <Component />
          <div className='copyright'>
            <p className='p-text'>@{date} EDIKAN</p>
            <p className='p-text'>All rights reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
