import db from "./setupDB.js";

const data = db.query("SELECT * FROM places");
const json = data.map((d) => {
  const names = [
    "id",
    "name",
    "description",
    "address",
    "longitude",
    "latitude",
    "thumbnail",
    "likes",
  ];
  const res = {};
  for (let i = 0; i < d.length; i++) {
    res[names[i]] = d[i];
  }
  return res;
});
await Deno.writeTextFile("static/places.json", JSON.stringify(json, null, 2));
