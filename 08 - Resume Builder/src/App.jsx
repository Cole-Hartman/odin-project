import React, { useState } from "react";
import "./App.css";
import General from "./components/General";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Experience2 from "./components/Experience2";
import Resume from "./components/Resume";

function App() {
  const [name, setName] = useState("Cole Hartman");
  const [title, setTitle] = useState("Software Engineer");
  const [about, setAbout] = useState(
    "Hello everyone, I'm Cole! I am currently a sophomore pursuing my Bachelors in Computer Science at CSULB. I have a passion for the dynamic world of Full-Stack Development. Outside of school I am building full-stack apps to expand my knowledge while having some fun with UI/UX design."
  );

  const [school, setSchool] = useState(
    "California State University, Long Beach"
  );
  const [degreemajor, setDegreemajor] = useState(
    "Bachelor of Science in Computer Science"
  );
  const [gpa, setGpa] = useState("3.9/4");

  const [experience, setExperience] = useState("Resume Builder");
  const [date, setDate] = useState("July 2024");
  const [type, setType] = useState("The Odin Project");
  const [bullet1, setBullet1] = useState(
    "• Created a React app for generating dynamic CVs with real-time editing and submission."
  );
  const [bullet2, setBullet2] = useState(
    "• Deployed the project on Netlify, enabling automatic updates and continuous integration."
  );

  const [experience2, setExperience2] = useState("Apple");
  const [date2, setDate2] = useState("May 2052");
  const [type2, setType2] = useState("Software Engineer");
  const [bullet1Two, setBullet1Two] = useState(
    "• Engineered Apple app features, ensuring top performance and UX with agile methods."
  );
  const [bullet2Two, setBullet2Two] = useState(
    "• Integrated advanced iOS/macOS tech, enhancing products with scalable solutions."
  );

  return (
    <>
      <section className="bg-slate-700 h-full w-full flex justify-center items-center p-5 gap-10">
        {/* Builder Section */}
        <div className="w-2/6 overflow-y-scroll bg-zinc-900 text-white shadow-xl rounded-lg p-10 h-full">
          <General
            name={name}
            setName={setName}
            title={title}
            setTitle={setTitle}
            about={about}
            setAbout={setAbout}
          />
          <Education
            school={school}
            setSchool={setSchool}
            degreemajor={degreemajor}
            setDegreemajor={setDegreemajor}
            gpa={gpa}
            setGpa={setGpa}
          />
          <Experience
            experience={experience}
            setExperience={setExperience}
            date={date}
            setDate={setDate}
            type={type}
            setType={setType}
            bullet1={bullet1}
            setBullet1={setBullet1}
            bullet2={bullet2}
            setBullet2={setBullet2}
          />
          <Experience2
            experience2={experience2}
            setExperience2={setExperience2}
            date2={date2}
            setDate2={setDate2}
            type2={type2}
            setType2={setType2}
            bullet1Two={bullet1Two}
            setBullet1Two={setBullet1Two}
            bullet2Two={bullet2Two}
            setBullet2Two={setBullet2Two}
          />
          <div className="border-b" />
        </div>

        {/* Resume Section */}
        <div className=" bg-white text-black shadow-xl rounded-lg p-3 h-full child:font-serif">
          <Resume
            name={name}
            title={title}
            about={about}
            school={school}
            degreemajor={degreemajor}
            gpa={gpa}
            experience={experience}
            date={date}
            type={type}
            bullet1={bullet1}
            bullet2={bullet2}
            experience2={experience2}
            date2={date2}
            type2={type2}
            bullet1Two={bullet1Two}
            bullet2Two={bullet2Two}
          />
        </div>
      </section>
    </>
  );
}

export default App;
