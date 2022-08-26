const pg = require("pg");

const pool = new pg.Pool({
  host: "localhost",
  post: 5432,
  database: "socialnetwork",
  user: "angela.lee",
  password: "",
});

pool
  .query(
    `
    UPDATE posts
    SET loc = POINT(lng, lat)
    WHERE loc is NULL;
`
  )
  .then(() => {
    console.log("Update complete");
    pool.end();
  });
