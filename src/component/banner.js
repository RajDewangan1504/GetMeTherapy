// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import Image from "next/image";
// import Header from "@/component/header";

// const AnimatedScreen = () => {
//   const bottleCapRef = useRef(null);
//   const bottleBodyRef = useRef(null);
//   const textRef = useRef(null);
//   const circleRef = useRef(null);


//   useEffect(() => {
//     const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

//     // Set initial positions (cap inside the circle)
//     gsap.set(bottleCapRef.current, { y: 100, opacity: 1 });
//     gsap.set(bottleBodyRef.current, { y: 100, opacity: 1 });

//     tl.to(bottleCapRef.current, { y: -150, opacity: 1, duration: 1.5, delay: 1 }) // Move cap up
//       .to(bottleBodyRef.current, { y: 300, opacity: 1, duration: 1.5, }, "-=1.3") // Move body up
//       .fromTo(circleRef.current, { scale: 1.5, opacity: 1, delay: 0 }, { scale: 2.3, opacity: 1, duration: 1.2 }, "-=1") // Expand circle
//       .fromTo(textRef.current, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1 },) // Text animation  "-=0.8"
// Right icon
//   }, []);

//   return (
//     <div>
//       <Header />
//       <div className="relative w-full h-screen flex flex-col items-center justify-center bg-white overflow-hidden">
//         {/* Circular effect */}
//         <div ref={circleRef} className="absolute w-60 h-60 border-4 border-blue-400 rounded-full"></div>

//         {/* Bottle animation */}
//         <Image ref={bottleCapRef} src="/bottle-cap.svg" alt="Bottle Cap" width={150} height={150} className="absolute" />
//         <Image ref={bottleBodyRef} src="/bottle-down.svg" alt="Bottle Body" width={150} height={150} className="absolute" />

//         {/* Text Animation */}

//         <div ref={textRef} className="circle-text text-center m-t opacity-0 scale-0 text-black absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 z-10">
//           <h2 className="text-7xl text-center w-[850px] font-bold">
//             The Ultimate Companion for Hydration
//           </h2>
//           <p className="text-xl mx-auto max-w-96 text-center">
//             we believe in the power of hydration. Our mission is simple yet vital
//           </p>
//           <div className="flex justify-center mt-4">
//             <button className="bg-gradient-to-r text-lg from-cyan-400 to-blue-500 text-white px-5 py-2 rounded-full shadow-md hover:scale-105 transition">
//               Inquiry Now
//             </button>
//           </div>
//         </div>


//       </div>
//     </div>
//   );
// };

// export default AnimatedScreen;