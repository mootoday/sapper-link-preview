import got from "got";
import * as cheerio from "cheerio";

// TODO: Expand to include other meta tags (e.g. Facebook, Twitter, etc.)
const getTitle = ($) => $("head title").text()
const getDescription = ($) => $("meta[name=description]").attr("content")
const getImgSrc = ($) => $("meta[property='og:image']").attr("content")

export const get = async (req, res) => {
  const { href } = req.query;
  const fetchResponse = await got(href);
  const $ = cheerio.load(fetchResponse.body);

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    title: getTitle($),
    description: getDescription($),
    imgSrc: getImgSrc($)
  }));
}