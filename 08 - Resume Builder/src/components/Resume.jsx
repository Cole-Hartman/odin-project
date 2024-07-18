import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

function Resume({
  name,
  title,
  about,
  school,
  degreemajor,
  gpa,
  experience,
  date,
  type,
  bullet1,
  bullet2,
  experience2,
  date2,
  type2,
  bullet1Two,
  bullet2Two,
}) {
  const componentRef = useRef();

  return (
    <>
      {/* General */}
      <section id="resume" ref={componentRef}>
        <div id="name" className="text-2xl">
          {name}
        </div>
        <div id="title" className="text-md italic">
          {title}
        </div>
        <div className="pt-6 text-xl border-b border-black pb-2">About</div>

        <div id="about" className="text-sm mb-8 pt-2">
          {about}
        </div>

        {/* Education */}
        <div id="name" className="text-xl border-b border-black pb-2">
          Education
        </div>
        <div className="grid grid-cols-3 grid-rows-1 items-center space-x-20 pt-2">
          <div id="school" className="text-sm font-bold col-span-2">
            {school}
          </div>
          <div className="flex col-start-auto text-sm font-bold">
            <div className="pr-2">GPA: </div>
            <div id="about">{gpa}</div>
          </div>
        </div>
        <div id="title" className="text-sm italic mb-9">
          {degreemajor}
        </div>

        {/* Experience */}
        <section id="experience-section">
          <div className="text-xl border-b border-black pb-2">Experience</div>
          <div className="grid grid-cols-3 grid-rows-1 items-center space-x-20 pt-2">
            <div id="experience" className="text-sm font-bold col-span-2">
              {experience}
            </div>
            <div id="date" className="font-bold text-sm">
              {date}
            </div>
          </div>
          <div id="type" className="text-sm italic">
            {type}
          </div>
          <div className="text-sm pl-3">{bullet1}</div>
          <div className="text-sm pl-3 mb-4">{bullet2}</div>
        </section>

        {/* Experience 2 */}
        <section id="experience-section">
          <div className="grid grid-cols-3 grid-rows-1 items-center space-x-20 pt-2">
            <div id="experience" className="text-sm font-bold col-span-2">
              {experience2}
            </div>
            <div id="date" className="font-bold text-sm">
              {date2}
            </div>
          </div>
          <div id="type" className="text-sm italic">
            {type2}
          </div>
          <div className="text-sm pl-3">{bullet1Two}</div>
          <div className="text-sm pl-3">{bullet2Two}</div>
        </section>
      </section>

      <div>
        <ReactToPrint
          trigger={() => (
            <button
              type="button"
              className="border border-gray-400 bg-gray-400 rounded-xl px-4 py-1 bottom-10 right-10 absolute"
            >
              Print
            </button>
          )}
          content={() => componentRef.current}
          documentTitle="new resume"
        />
      </div>
    </>
  );
}

export default Resume;
