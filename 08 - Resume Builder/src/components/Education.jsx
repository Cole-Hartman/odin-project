function Education({
  school,
  setSchool,
  degreemajor,
  setDegreemajor,
  gpa,
  setGpa,
}) {
  return (
    <>
      <div className="text-xl pt-1">Education</div>
      <form className="pb-8 pt-3 flex flex-col gap-2 border-b child:rounded-md child:p-1">
        <label>School:</label>
        <input
          type="text"
          required
          value={school}
          className="text-black"
          onChange={(e) => setSchool(e.target.value)}
        />

        <label>Degree & Major:</label>
        <input
          type="text"
          required
          value={degreemajor}
          className="text-black"
          onChange={(e) => setDegreemajor(e.target.value)}
        />

        <label>GPA:</label>
        <input
          type="text"
          required
          value={gpa}
          className="text-black"
          onChange={(e) => setGpa(e.target.value)}
        />
      </form>
    </>
  );
}

export default Education;
