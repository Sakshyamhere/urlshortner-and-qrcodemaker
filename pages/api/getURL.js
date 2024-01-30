import Url from "../../models/UrlSchema";
import connectDB from "../lib/connectDB";

export default async function handler(req, res) {
    connectDB()
  const queryUrl = req.query.url;
  const ourUrl = `http://localhost:3000/url/${queryUrl}`;
  if (req.method === "GET") {
    try {
      const result = await Url.find({ ourUrl: ourUrl });
      res.status(200).send(result);
    } catch (error) {
      console.log(`Error: ${error}`);
      res.status(500).send(`Error: ${error}`);
    }
  }
}
