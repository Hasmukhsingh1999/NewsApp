const axios = require("axios");


exports.getNews = async (req, res, next) => {
  try {
    let countryCode = req.query.country;
    if (!countryCode) {
      countryCode = "us";
    }
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=e8373b7800c1406a8d7d16382aafc07b`
    );
    const articles = response.data.articles;
    const selectedCountry = countryCode; 
    res.render("index", {
      articles: articles,
      selectedCountry: selectedCountry,
    });
  } catch (error) {
    console.error(error);
  }
};
