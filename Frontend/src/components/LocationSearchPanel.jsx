import React from "react";

const LocationSearchPanel = (props) => {
  const locations = [
    "24B, near Pandey's House,PP House",
    "22B, near Pandey's House,PP House",
    "23B, near Pandey's House,PP House",
    "21B, near Pandey's House,PP House",
  ];
  return (
    <div>
      {locations.map((loc, index) => {
        return (
          <div
            key={index}
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            className="flex items-center justify-start gap-3 my-2 border-2 p-3 rounded-xl border-gray-50 active:border-black"
          >
            <h2 className="bg-[#eee] h-8 w-8 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{loc}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
