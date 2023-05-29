import React from "react";
import TypingText from "./typingText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <div id="home" className="container w-full h-[100vh] flex flex-col justify-center align-middle items-center">
      <div className="flex flex-col space-y-6 w-5/6 lg:w-4/6 mx-auto">
        <span className="text-[var(--green-bright)] tracking-wider">
          Hi there
        </span>
        <h1 className="text-[var(--white)] text-4xl md:text-7xl w-full text-left font-bold font-museo">
          I&apos;m <span className="">Gowtham</span>
          <span className="text-[var(--green-bright)]">.</span>
        </h1>

        <TypingText className="text-[var(--light-slate)] text-2xl md:text-4xl text-left font-bold font-museo h-12 md:h-auto" />

        <div className="md:w-4/6">
          <p className="text-[var(--slate)] text-sm md:text-base md:text-justify tracking-wider">
            I&apos;m a software engineer and artist based in London, UK. I have
            an interest in full stack development, machine learning,
            human-computer interactions and the vast realm of everything in
            between.
          </p>
        </div>

        <div className="flex justify-center align-middle md:justify-start">
          <button className="pri-btn flex flex-row justify-center align-middle gap-2 w-full md:w-auto mt-6 lg:mt-10 btn-hover">
            <FontAwesomeIcon icon={faEnvelope} className="h-[25px]" />
            <div className="text-base">Say hi!</div>
          </button>
        </div>
      </div>
    </div>
  );
}
