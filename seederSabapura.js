import db from "./setupDB.js";

const url = "https://sabapura.com/data.json";
const data = await (await fetch(url)).json();
//console.log(data.find(d => d.shop_name.indexOf("車の道場") >= 0));

const removeTags = (s) => s.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");

data.forEach((d) => {
  if (!d.text) { // 説明文章がないデータは採用しない
    return;
  }
  db.query(
    `INSERT INTO places (name, description, address, longitude, latitude, thumbnail) VALUES (
      (?), (?), (?), (?), (?), (?)
    )`,
    [
      d.shop_name,
      removeTags(d.text),
      d.address,
      d.longitude,
      d.latitude,
      d.top.topImage.url,
    ],
  );
});

const answer = db.query("SELECT * FROM places");
console.log(answer);
