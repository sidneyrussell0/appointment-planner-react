import React from "react";

import { Tile } from '../../components/tile/Tile';

export const TileList = (props) => {

  const tiles = props.object.map((info, index) => <Tile info={info} key={index} />);

  return (
    <div>
      {tiles}
    </div>
  );
};

export default TileList;
