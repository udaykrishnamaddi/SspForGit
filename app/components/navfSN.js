

import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import classNames from "classnames";

const Navbar = ({onMenuButtonClick}) => {
  return (
    <div className="w-full">
      <nav
        className={classNames({
          "bg-white text-zinc-500": true, // colors
          "flex items-center": true, // layout
          "w-full z-10 px-4 shadow-sm h-16": true, //positioning & styling
        })}
      >
        {/* <div className="flex-grow"></div> * spacer */}
        <button className="md:hidden" onClick={onMenuButtonClick}>
          <Bars3Icon className="h-6 w-6" />
        </button>
      </nav>

    </div>
    
  );
};
export default Navbar;