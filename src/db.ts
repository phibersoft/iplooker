import pg from "pg";
var credentials =
  process.env.NODE_ENV === "production"
    ? {
        host: "ec2-52-31-233-101.eu-west-1.compute.amazonaws.com",
        database: "dpnaus5po1vlk",
        user: "gehwlrxmthechc",
        password:
          "6e63f37a694e5c037a84a2edc651e309143ba21f8decf45bcae1240e9fcd42de",
        port: 5432,
      }
    : {
        host: "localhost",
        database: "develop",
        user: "postgres",
        password: "alakamyok8",
        port: 5432,
      };
var db = new pg.Pool({
  ...credentials,
});

export default db;
