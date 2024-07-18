import { useState } from "react";

function General({ name, setName, title, setTitle, about, setAbout, }) {
  return (
    <>
      <div className="text-xl">General</div>
      <form className="pb-8 pt-3 flex flex-col gap-2 border-b child:rounded-md child:p-1">
        <label>Name:</label>
        <input
          type="text"
          required
          value={name}
          className="text-black"
          onChange={(e) => setName(e.target.value)}
        />

        <label>Title:</label>
        <input
          type="text"
          required
          value={title}
          className="text-black"
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>About:</label>
        <textarea
          type="text"
          required
          value={about}
          className="text-black"
          onChange={(e) => setAbout(e.target.value)}
        />
      </form>
    </>
  );
}

export default General;
