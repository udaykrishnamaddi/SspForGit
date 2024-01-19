'use client'

import React, {  Children, useState } from "react";
import SN from '../../../components/SideNav'
import NavfSN from '../../../components/navfSN'



const Layout = ({children}) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="grid md:min-h-screen grid-rows-header bg-zinc-100">
      <div className="md:hidden bg-white shadow-sm z-10">
        <NavfSN onMenuButtonClick={() => setShowSidebar((prev) => !prev)} />
      </div>

      <div className="grid md:grid-cols-sidebar">
        <div className="shadow-md">
          <SN showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        </div>
        <div className="overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};
export default Layout;