import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ array }) => {

  return (
    <div>
      {array.map((contact, index) => {
        const { name, ...rest } = contact;

        return (
          <Tile 
          name={name}
          description={rest}
          key={index}
          />
        );

      })}

    </div>
  );
};
