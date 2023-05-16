import React from "react";

function SelectionDropdown(props) {

  return (
    <div style={{position: "absolute", left: props.position.X, top: props.position.Y,}}>
      <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700">
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
          <li>
            <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">Waldo</p>
          </li>
          <li>
            <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">Odlaw</p>
          </li>
          <li>
            <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">Wizard</p>
          </li>
        </ul>
      </div>
    </div>
    
  )
}

export default SelectionDropdown;