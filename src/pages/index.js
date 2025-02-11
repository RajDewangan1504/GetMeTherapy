



"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Header from "@/component/header";
import Footer from "@/component/footer";
import Hydration from "@/component/hydration"
import Link from "next/link";
import RoadMap from "@/component/roadmap";

export default function AnimatedCircle() {
  const circleRef = useRef(null);
  const textRef = useRef(null);
  const botolCapRef = useRef(null);
  const botolRef = useRef(null);

  const leftIconRef = useRef(null);
  const rightIconRef = useRef(null);

  const categories = [
    { icon: "/veccume.svg", label: "Vacuum Bottles" },
    { icon: "/fridge.svg", label: "Fridge Bottles & Jugs" },
    { icon: "/borosilicate.svg", label: "Borosilicate Bottles" },
    { icon: "/kettle.svg", label: "Kettles" },
  ];

  useEffect(() => {
    let ScrollTrigger;
    import("gsap/ScrollTrigger").then((module) => {
      ScrollTrigger = module.default;
      gsap.registerPlugin(ScrollTrigger);

      // Animating circle expansion
      gsap.to(circleRef.current, {
        width: "550px",
        height: "550px",
        delay: 1.5,
        duration: 1.8,
        ease: "power1.inOut",
      });

      // Animating Text appearance
      gsap.to(textRef.current, {
        opacity: 1,
        scale: 1,
        delay: 1.5,
        duration: 1.8,
        ease: "power1.inOut",
      });

      // Animating Bottle Cap
      gsap.to(botolCapRef.current, {
        y: "-135px",
        delay: 1.5,
        duration: 1.8,
        ease: "power1.inOut",
        onComplete: () => {
          ScrollTrigger.refresh();

          gsap.to(botolCapRef.current, {
            scrollTrigger: {
              trigger: botolCapRef.current,
              start: "300% 50%",
              end: "430% 5%",
              scrub: 1,
              // markers: true,
              immediateRender: false,
            },
            y: "785px",
            width: 140,
            duration: 1.5,
            ease: "none",
          });
        },
      });

      // Animating Bottle Body
      gsap.to(botolRef.current, {
        y: 110,
        delay: 1.5,
        duration: 1.8,
        ease: "power1.inOut",
        onComplete: () => {
          ScrollTrigger.refresh();

          gsap.to(botolRef.current, {
            scrollTrigger: {
              trigger: botolRef.current,
              start: "top 50%",
              end: "bottom 60%",
              scrub: 1,
              immediateRender: false,
            },
            y: "620px",
            width: 140,
            duration: 1,
            ease: "none",
          });
        },
      });
    });


  }, []);
  useEffect(() => {
    let ScrollTrigger;
    import("gsap/ScrollTrigger").then((module) => {
      ScrollTrigger = module.default;
      gsap.registerPlugin(ScrollTrigger);
  
      // Initial appearance animation
      gsap.fromTo(
        [leftIconRef.current, rightIconRef.current],
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          delay: 1.5,
          duration: 1.5, // Slightly reduced duration for a snappier feel
          ease: "power2.out",
        }
      );
  
      // Scroll-triggered movement (smooth upward motion)
      gsap.to([leftIconRef.current, rightIconRef.current], {
        y: -380, // Moves up by 380px
        scale: 0,
        // opacity: 0,  
        ease: "power2.in", // Smooth transition
        // duration: 0.5,
        scrollTrigger: {
          trigger: leftIconRef.current, // Uses left icon as the trigger
          start: "top 70%", // Starts moving early
          end: "top 20%", // Moves up gradually
          // markers: true,
          scrub: 1, // Smooth, scroll-driven effect
        },
      });
    });
  }, []);
  
  
  


  return (
    <>
      <Header />
      <div className="h-screen bg-gray-100">
        {/* <div className="w-full h-20 bg-gray-700 text-center p-4 text-4xl">
          This is a Header
        </div> */}
        <div
          ref={botolCapRef}
          className="w-[160px] h-[160px] absolute bottom-1/2 translate-y-32 right-1/2 translate-x-1/2 z-20"
        >
          <Image src="/bottle-cap.svg" alt="Bottle cap" width={160} height={160} />
        </div>
        <div
          ref={botolRef}
          className="absolute top-1/2 -translate-y-10 right-1/2 translate-x-1/2 z-20"
        >
          <Image src="/bottle-down.svg" alt="Bottle Body" width={160} height={160} />
        </div>
        <div className="w-full h-[calc(100vh-2rem)] relative ">
          <div
            ref={circleRef}
            className="circle flex items-center justify-center text-center rounded-full overflow-hidden absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2"
            style={{
              width: "300px",
              height: "300px",
              background: "transparent",
              border: "8px solid transparent",
              backgroundImage: "linear-gradient(to bottom, #4DFBFB, #788EFF)",
              backgroundOrigin: "border-box",
            }}
          >
            <div className="w-[99%] h-[99%] bg-white rounded-full"></div>
          </div>

          <div
            ref={textRef}
            className="circle-text text-center opacity-0 scale-0 text-black absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 z-10"
          >
            <h2 className="text-7xl text-center w-[850px] font-bold">
              The Ultimate Companion for Hydration
            </h2>
            <p className="mt-2 text-2xl mx-auto max-w-[30rem] text-center">
              We believe in the power of hydration. Our mission is simple yet vital.
            </p>
            <Link href="/inquiry">
              <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-5 py-2 rounded-full shadow-md hover:scale-105 transition">
                Inquiry Now
              </button>
            </Link>
          </div>
        </div>
        <Image ref={leftIconRef} src="/bottle2.svg" alt="Left Icon" width={100} height={100} className=" p-5 left-10 bottom-10 bg-gradient-to-r absolute from-cyan-400 to-blue-500 rounded-full shadow-md hover:scale-105 transition flex items-center justify-center w-32 h-32" />
        <Image ref={rightIconRef} src="/bottle3.svg" alt="Right Icon" width={150} height={150} className=" p-5 right-10 bottom-10 bg-gradient-to-r absolute from-cyan-400 to-blue-500 rounded-full shadow-md hover:scale-105 transition flex items-center justify-center w-32 h-32" />
      </div>
      <div className="w-full h-[800px] flex">
        <div className="relative w-full h-full">
          <Image src="/sidebottle.svg" alt="Bottle in hand" fill objectFit="cover" />
        </div>
        <div className="flex items-center w-full h-full bg-[#20292C] text-white rounded-lg">
          {/* Left Image */}
          <div className="w-1/3">

          </div>

          {/* Category List */}
          <div className="w-2/3 space-y-10">
            {categories.map((item, index) => (
              <div key={index} className="flex items-center space-x-5">
                <div className=" flex items-center justify-center bg-white rounded-full">
                  <span className="text-4xl p-2"><Image src={item.icon} alt={item.label} height={60} width={60} /></span>
                </div>
                <span className="text-lg">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Hydration />
      <RoadMap/>
      <Footer />
    </>
  );
}
