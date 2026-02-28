import { nanoid } from "nanoid";
import urlModel from "../models/urlModel.js";
const createShortUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;
    if (!originalUrl) {
      return res.status(400).json({
        status: 0,
        Message: "Please enter URl",
      });
    }
    const shortCode = nanoid(8);
    const newUrl = await urlModel.create({
      originalUrl,
      shortCode,
    });
    res.status(201).json({
      Message: "ShortUrl Created",
      originalUrl,
      shortUrl: `${req.protocol}://${req.get("host")}/${shortCode}`,
    });
  } catch (er) {
    res.status(500).json({
      status: 0,
      Message: "Server Error",
    });
  }
};

export default createShortUrl;
