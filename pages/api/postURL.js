import connectDB from "../lib/connectDB";
import Url from "../../models/UrlSchema";

export default async function handler(req, res) {
  connectDB();
  if (req.method == "POST") {
    try {
      const { givenUrl , ourUrl} = req.body.body;
      const url = new Url({
        url: givenUrl,
        ourUrl: ourUrl
      });
      await url.save();
      res.status(200).json({ done: true, url: url });
    } catch (error) {
      console.log(`Error : ${error}`);
    }
  }
}
