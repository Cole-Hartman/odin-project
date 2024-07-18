function Experience({
  experience,
  setExperience,
  date,
  setDate,
  type,
  setType,
  bullet1,
  setBullet1,
  bullet2,
  setBullet2,
}) {
  return (
    <>
      <div className="text-xl pt-1">Experience 1</div>
      <form className="pb-8 pt-3 flex flex-col gap-2 child:rounded-md child:p-1">
        <label>Experience:</label>
        <input
          type="text"
          required
          value={experience}
          className="text-black"
          onChange={(e) => setExperience(e.target.value)}
        />

        <label>Date:</label>
        <input
          type="text"
          required
          value={date}
          className="text-black"
          onChange={(e) => setDate(e.target.value)}
        />

        <label>Type:</label>
        <input
          type="text"
          required
          value={type}
          className="text-black"
          onChange={(e) => setType(e.target.value)}
        />

        <label>Bullet:</label>
        <input
          type="text"
          required
          value={bullet1}
          className="text-black"
          onChange={(e) => setBullet1(e.target.value)}
        />

        <label>Bullet:</label>
        <input
          type="text"
          required
          value={bullet2}
          className="text-black"
          onChange={(e) => setBullet2(e.target.value)}
        />
      </form>
    </>
  );
}

export default Experience;
