// Meme controllers
const memeService = require("../services/meme.service");

const getMemes = async (req, res) => {
  const memes = await memeService.getMemes();
  res.send(memes);
};

const getPopularMemes = async (req, res) => {
  const popularMemes = await memeService.getPopularMemes();
  res.send(popularMemes);
};

const getTrendingMemes = async (req, res) => {
  const trendingMemes = await memeService.getTrendingMemes();
  res.send(trendingMemes);
};

const likeMeme = async (req, res) => {
  const newLikes = await memeService.likeMeme();
  res.send(newLikes);
};

const updateMemeDownload = async (req, res) => {
  const newDownloads = await memeService.downloadMeme(req.params.id);
  res.send(newDownloads);
};

const createMeme = async (req, res) => {
// @todo
};

module.exports = {
  getMemes,
  getPopularMemes,
  getTrendingMemes,
  likeMeme,
  updateMemeDownload,
  createMeme
}