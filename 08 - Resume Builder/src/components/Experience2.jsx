function Experience2({
  experience2,
  setExperience2,
  date2,
  setDate2,
  type2,
  setType2,
  bullet1Two,
  setBullet1Two,
  bullet2Two,
  setBullet2Two,
}) {
  return (
    <>
      <div className="text-xl pt-1">Experience 2</div>
      <form className="pb-8 pt-3 flex flex-col gap-2 child:rounded-md child:p-1">
        <label>Experience:</label>
        <input
          type="text"
          required
          value={experience2}
          className="text-black"
          onChange={(e) => setExperience2(e.target.value)}
        />

        <label>Date:</label>
        <input
          type="text"
          required
          value={date2}
          className="text-black"
          onChange={(e) => setDate2(e.target.value)}
        />

        <label>Type:</label>
        <input
          type="text"
          required
          value={type2}
          className="text-black"
          onChange={(e) => setType2(e.target.value)}
        />

        <label>Bullet:</label>
        <input
          type="text"
          required
          value={bullet1Two}
          className="text-black"
          onChange={(e) => setBullet1Two(e.target.value)}
        />

        <label>Bullet:</label>
        <input
          type="text"
          required
          value={bullet2Two}
          className="text-black"
          onChange={(e) => setBullet2Two(e.target.value)}
        />
      </form>
    </>
  );
}

export default Experience2;
