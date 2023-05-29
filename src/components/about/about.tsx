import React from "react";
import Me from "../misc/me";

export default function About() {
  return (
    <div id="aboutme" className="container flex flex-col min-h-fit">
      <div className="w-5/6 lg:w-4/6 mx-auto my-12 md:my-28">
        <div className="flex flex-col overflow-hidden text-sm md:text-base gap-y-4">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-4">
            <h1 className="title text-left flex-1 overflow-hidden">
              <span className="text-[var(--green-bright)]">/ </span>about me
            </h1>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row gap-4 flex-1 overflow-hidden">
            <AboutText className="flex-1 overflow-hidden" />
            <div className="flex-1">
              <Me className="object-contain w-4/6 md:w-[55%] h-auto mx-auto md:ml-auto md:mr-[10%] rounded-lg border-[var(--green-bright)] border-solid border my-6 md:my-auto justify-end" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const AboutText = ({ className }: { className?: string }) => {
  return (
    <div className={`md:text-justify + ${className}`}>
      I am currently a Software Engineer at{" "}
      <a
        href="https://hived.space"
        target="_blank"
        className="text-[var(--green-bright)] hover:text-[var(--lightest-slate)"
      >
        HIVED
      </a>
      , taking lead on front-end development. I am also a freelance
      developer and designer.
      <br />
      <br />
      Here are a few technologies I&apos;ve been working with recently:
      <br />
      <br />
      <ul className="list-disc list-inside columns-2 about-tech-stack space-y-2">
        <li>JavaScript ES6+</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>Flutter</li>
        <li>AWS Services</li>
        <li>Python</li>
        <li>Typescript</li>
        <li>Golang</li>
        <li>HTML &amp; CSS</li>
      </ul>
      <br />
      <br />
      Outside of programming, I enjoy playing going to the gym, playing video
      games, hiking and painting. I also love to travel and explore new places.
    </div>
  );
};
