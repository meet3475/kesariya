import React from "react";
import { OwnClothingCard } from "./OwnClothingCard";
import { ManufacturerCard } from "./ManuFacturerCard";
import { OwnclothingvideoCard } from "./OwnClothingVideoCard";

export const Ownclothingmainsection = ({ ImageData, manufacturevideo }) => {
  return (
    <div className="home-ownclothingbg">
      <OwnClothingCard ImageData={ImageData} />
      <ManufacturerCard />
      <OwnclothingvideoCard manufacturevideo={manufacturevideo} />
    </div>
  );
};
