import florestImage from "../florest.jpg";
import { Header } from "../components/Header";
import { Carousel } from "../components/Carousel";

import { Button } from "@/components/Button";
export default function Home() {
  return (
    <main>
      <div
        className="bg-cover bg-fixed bg-center min-h-screen w-full"
        style={{ backgroundImage: `url(${florestImage.src})` }}
      >
        <Header />
        <div className="max-w-xl m-16">
          <h3 className="text-white text-bold text-7xl mb-16">
            From Data to Delivery - Smarter, Greener, Faster
          </h3>
          <p className="text-gray-200 font-light mb-20">
            We Help Companies build smarter infrastructure, optimize operatios
            and transition to low-emission technologies - with measurable impact
          </p>
          <Button title="Start Your Transformation"/>
        </div>
        <div className="flex flex-col justify-center items-center mt-20">
          <p className="text-gray-300 my-16 text-md"> [EllO] </p>
          <p className="text-white text-4xl p-6 mx-32 text-center">
            We help industries evolve through smarter systems and low-impact
            technologies - eficient, data driven, and built to scale
          </p>
          <p className="text-white mt-14">[Helping 100+ leadin companies get better results ]</p>
          <Carousel />
        </div>
      </div>
      <div></div>
    </main>
  );
}
