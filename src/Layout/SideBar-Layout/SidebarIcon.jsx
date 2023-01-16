import React, { useContext, useState } from 'react';
import { Image } from '../../AbstractElements';
import CheckContext from '../../_helper/customizer/index';
// import logo from '../../assets/images/logo/small-logo.png';
// import logo1 from '../../assets/images/logo/small-white-logo.png';
import logo from '../../assets/images/logo/logo.png';

const SidebarIcon = () => {
  const { toggleSidebar } = useContext(CheckContext);
  const [toggle, setToggle] = useState(false);
  const openCloseSidebar = () => {
    setToggle(!toggle);
    toggleSidebar(toggle);
  };
  return (
    <div className="logo-wrapper">
      <center>
        <a href="#javascript">
          <Image attrImage={{ className: 'img-fluid for-light', src: `${logo}`, alt: '' }} />
          {/* <Image attrImage={{ className: 'img-fluid for-dark', src: `${logo1}`, alt: '' }} /> */}
          <Image attrImage={{ className: 'img-fluid for-dark', src: `${logo}`, alt: '' }} />
        </a>
        <div className='back-btn' onClick={() => openCloseSidebar()}><i className='fa fa-angle-left'></i></div>
      </center>
    </div>
  );
};
export default SidebarIcon;