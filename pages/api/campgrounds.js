// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mongoose = require('mongoose');

mongoose.connect = ('mongodb://localhost:27017/yelp-camp',
{
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
}
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database Connected");
});

export default (req, res) => {
  res.statusCode = 200;
  res.json({ name: 'Bob' });

};
