import Image from "next/image";
const RoadMap = () => {
  return (
    <div className="relative h-[80vh] flex items-center justify-center">
      <Image
        src="/bgroadmap.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="-z-10"
      />
      <div className="relative z-10 text-black text-center p-10 max-w-[50%]">
        <p className="uppercase text-base">Your Transformation, One Step at a Time</p>
        <h1 className="text-4xl font-thin text-gray-800 leading-tight mt-4">
          Fitness is a journey—every day brings you closer to the life you want
        </h1>
      </div>
    </div>
  );
};

export default RoadMap;