"use client";

import { imageBasicDoor } from "@/services/imageBasicDoor";
import { ImagePopUp } from "./ImagePopUp";
import { TabMenu } from "./TabMenu";
import { imageCarveDoor } from "@/services/imageCarveDoor";
import { useState } from "react";

const Gallery = () => {
  const [tabMenuActive, setTabMenuActive] = useState("Door");
  return (
    <main className="min-h-screen bg-background text-text pt-7 md:pt-3">
      <TabMenu setTabMenuActive={setTabMenuActive} />
      {tabMenuActive === "Door" && (
        <section>
          <section className="mx-5 mt-3 md:mt-0">
            <h1 className="text-xl font-bold">Basic Door</h1>
            <section className="w-fit mt-2 mx-auto grid grid-cols-3 md:grid-cols-5 gap-1">
              {imageBasicDoor.map((data, index) => (
                <ImagePopUp key={index} src={data.src} alt={data.alt} />
              ))}
            </section>
          </section>
          <section className="mx-5 mt-5">
            <h1 className="text-xl font-bold">Carve Door</h1>
            <section className="w-fit mt-2 mx-auto grid grid-cols-3 md:grid-cols-5 gap-1">
              {imageCarveDoor.map((data, index) => (
                <ImagePopUp key={index} src={data.src} alt={data.alt} />
              ))}
            </section>
          </section>
        </section>
      )}
      {tabMenuActive === "Window" && (
        <p className="text-center mt-32">Cooming soon...</p>
      )}
      {tabMenuActive === "Furniture" && (
        <p className="text-center mt-32">Cooming soon...</p>
      )}
      {tabMenuActive === "Others" && (
        <p className="text-center mt-32">Cooming soon...</p>
      )}
    </main>
  );
};

export default Gallery;
