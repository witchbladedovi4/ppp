import React from "react";
import { UserComponent } from "../../utils/UserComponent";

const ComponentsMultipleInstances = () => {
  return (
    <div>
      <p>Щас меня много будет ^_^</p>
      <UserComponent />
      <UserComponent />
      <UserComponent />
      <UserComponent />
      <UserComponent />
      <img
        src="https://media.discordapp.net/attachments/782582704221978664/1574287399641677957/image.png?ex=6b0518e4&is=6b03c764&hm=24729fb07fa550147d8cdb596a20cc54e74f3ea6d376e57305fd58dc4a4ddce8&format=webp&quality=lossless"
        alt="-вайб"
      />за меня больше не исправляют и не дописывают ((((
    </div>
  );
};

export default ComponentsMultipleInstances;
