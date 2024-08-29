import { ImagePopUp } from "./ImagePopUp";
import { TabMenu } from "./TabMenu";

const Gallery = () => {
  return (
    <main className="min-h-screen bg-background text-text pt-3">
      <TabMenu />
      <section className="mx-5">
        <h1 className="text-xl font-bold">One Door</h1>
        <section className="w-fit mt-2 mx-auto grid grid-cols-5 gap-1">
          <ImagePopUp />
          <ImagePopUp />
          <ImagePopUp />
          <ImagePopUp />
          <ImagePopUp />
        </section>
      </section>
      <section className="mx-5 mt-2">
        <h1 className="text-xl font-bold">One Door</h1>
        <section className="w-fit mt-2 mx-auto grid grid-cols-5 gap-1">
          <ImagePopUp />
          <ImagePopUp />
          <ImagePopUp />
          <ImagePopUp />
          <ImagePopUp />
        </section>
      </section>
    </main>
  );
};

export default Gallery;
