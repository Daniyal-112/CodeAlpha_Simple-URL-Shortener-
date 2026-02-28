import urlModel from "../models/urlModel.js";

const redirectUrl = async (req, res) => {
  try {
    const { shortCode } = req.params;
    const checkUrl = await urlModel.findOne({ shortCode });
    if (!checkUrl) {
      return res.status(404).json({
        Message: "Url not found",
      });
    }
    checkUrl.clicks++;
    await checkUrl.save();
    res.redirect(checkUrl.originalUrl);
  } catch (err) {
    res.status(500).json({
      Message: "Server Error",
    });
  }
};

export default redirectUrl;
