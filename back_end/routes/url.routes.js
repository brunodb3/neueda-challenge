// /routes/url.routes.js
//  - URL routes definition
// -------------------------------------------------------------------------------------------------

// importing 3rd party libraries
const shortid = require('shortid');
const mongoose = require('mongoose');
const validUrl = require('valid-url');

// importing custom libraries
const UrlModel = mongoose.model('Url');

// global variables
const baseUrl = process.env.BASE_URL;
const errorUrl = `${baseUrl}/404`;

// exporting the module
module.exports = app => {
  /**
   * @description Returns a 404 - Not Found error
   */
  app.get('/404', async (req, res) => res.send('404 - Not Found'));

  /**
   * @description Redirects the client to requested URL
   * @param code Target URL code
   */
  app.get('/api/:code', async (req, res) => {
    const urlCode = req.params.code;
    const item = await UrlModel.findOne({ urlCode });

    if (item) {
      return res.redirect(item.originalUrl);
    } else {
      return res.redirect(errorUrl);
    }
  });

  /**
   * @description Creates a new short URL on the database
   * @param originalUrl Target original URL to shorten
   */
  app.post('/shorten-url', async (req, res) => {
    const { originalUrl } = req.body;

    if (!validUrl.isUri(originalUrl)) {
      return res.status(401).json({ error: 'Invalid URL' });
    }

    try {
      const item = await UrlModel.findOne({ originalUrl });

      if (item) {
        return res.status(200).json(item);
      }

      const updatedAt = new Date();
      const urlCode = shortid.generate();

      shortUrl = `${baseUrl}/api/${urlCode}`;

      const newItem = new UrlModel({
        urlCode,
        shortUrl,
        updatedAt,
        originalUrl
      });

      await newItem.save();

      return res.status(200).json(newItem);
    } catch (err) {
      return res.status(401).json({ error: 'Error getting URL' });
    }
  });
};
