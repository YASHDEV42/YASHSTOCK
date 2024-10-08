"use client";
import Link from "next/link";
import { User } from "@/types";
import gsap from "gsap";
import { useEffect } from "react";

interface HeroProps {
  user: User | null;
}
const Hero: React.FC<HeroProps> = ({ user }) => {
  useEffect(() => {
    gsap.from("h1", {
      duration: 1.5,
      x: -100,
      opacity: 0,
      ease: "power1",
    });
    gsap.to("h1", {
      duration: 1.5,
      x: 0,
      opacity: 1,
      ease: "power1",
    });
    gsap.from("p", {
      duration: 1,
      x: 100,
      opacity: 0,
      ease: "power1",
    });
    gsap.to("p", {
      duration: 2,
      x: 0,
      opacity: 1,
      ease: "power1",
    });
    gsap.from("button", {
      duration: 0.5,
      scale: -2,
      opacity: -10,
      ease: "power1",
    });
    gsap.to("button", {
      duration: 0.5,
      scale: 1,
      opacity: 1,
      ease: "power1",
    });

    return () => {};
  }, []);

  return (
    <section>
      {user ? (
        user.role !== "ADMIN" ? (
          <div className="center-col h-screen gap-2">
            <h1 className="">Welcome back, {user.name}!</h1>
            <p>The best place to buy any product</p>
            <div className="mt-2">
              <button className="primary-btn mr-4">
                <Link href="/products">Browse</Link>
              </button>
              <button className="secondary-btn">
                <Link href="/cart">See Cart</Link>
              </button>
            </div>
          </div>
        ) : (
          <div className="center-col h-screen gap-2">
            <h1>
              Welcome back,{" "}
              <span
                className="
              bg-gradient-to-r from-red-950 to-red-800 text-transparent bg-clip-text
            "
              >
                {user.name}
              </span>
            </h1>
            <p>The best place to buy any product</p>
            <div className="mt-2">
              <button className="primary-btn mr-4">
                <Link href="/products">Browse</Link>
              </button>
              <button className="secondary-btn">
                <Link href="/dashboard">Dashboard</Link>
              </button>
            </div>
          </div>
        )
      ) : (
        <div className="center-col h-screen gap-2">
          <h1>Welcome in YASHSTOCK</h1>
          <p>The best place to buy any product</p>
          <div className="mt-2">
            <button
              onMouseOver={(e) => e.currentTarget.classList.add("hover-this")}
              onMouseOut={(e) => e.currentTarget.classList.remove("hover-this")}
              className="primary-btn mr-4"
            >
              <Link href="/products">Browse</Link>
            </button>
            <button className="secondary-btn">
              <Link href="/register">Sign Up</Link>
            </button>
          </div>
        </div>
      )}
      <span
        className="w-full bg-black h-80 absolute left-0 -bottom-64 rounded-b-full
        bg-gradient-to-b from-red-50 to-red-200 z-0
      "
      ></span>
    </section>
  );
};

export default Hero;
