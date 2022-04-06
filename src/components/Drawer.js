import React, { useEffect, useState } from "react";
import "./Drawer.scss";
import Logo from "../assets/logo.png";
import Planet from "../assets/planet.svg";
import Starship from "../assets/starship.svg";
import People from "../assets/people.svg";
import Vehicle from "../assets/vehicle.svg";

function Drawer({ setMenuSelected }) {
  const [openDrawer, setOpenDrawer] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    root?.style.setProperty("--width", openDrawer ? "180px" : "75px");
    root?.style.setProperty("--display", openDrawer ? "auto" : "none");
    root?.style.setProperty("--justify", openDrawer ? "flex-start" : "center");
    root?.style.setProperty("--margin", openDrawer ? "10px" : "0px");
  }, [openDrawer]);

  const onMenuSelect = (id) => {
    switch (id) {
      case 1:
        setMenuSelected({ name: "planets", img: Planet, id: 1 });
        break;
      case 2:
        setMenuSelected({ name: "starships", img: Starship, id: 2 });
        break;
      case 3:
        setMenuSelected({ name: "people", img: People, id: 3 });
        break;
      case 4:
        setMenuSelected({ name: "vehicles", img: Vehicle, id: 4 });
        break;
    }
  };

  const menu = [
    { name: "Planets", img: Planet, id: 1 },
    { name: "Starships", img: Starship, id: 2 },
    { name: "People", img: People, id: 3 },
    { name: "Vehicles", img: Vehicle, id: 4 },
  ];

  return (
    <div className="drawer">
      <img
        onClick={() => setOpenDrawer(!openDrawer)}
        className="drawer__logo"
        src={Logo}
        alt="logo"
      />
      {menu.map((item, id) => {
        return (
          <div key={id} className="drawer__optionContainer" onClick={() => onMenuSelect(item.id)}>
            <img className="drawer__optionImg" src={item.img} />
            {openDrawer ? <button className="drawer__optionButtons">{item.name}</button> : ""}
          </div>
        );
      })}
    </div>
  );
}

export default Drawer;
