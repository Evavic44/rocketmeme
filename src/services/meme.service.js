// Meme Service

const Meme = require("../models/meme.model");

/**
* @description    Get memes
* @todo           Implement pagination
* @returns        An array of memes, based on pagination
*/
async function getMemes() {
  return (await Meme.find().lean());
}

/**
* @description    Get trending memes
* @returns        A maximum of 15
*/
async function getPopularMemes() {
  return (await Meme.find().sort({ downloads: "1" }).limit(15).lean());
}

/**
* @description    Get trending memes
* @returns        A maximum of 15
*/
async function getTrendingMemes() {
  return (await Meme.find().sort({ likes: "1" }).limit(15).lean());
}

/**
* @description    Search for memes based on title and categories
*/
async function searchMeme(searchValue) {
  const testReg = new RegExp(searchValue);
  const meme = await Meme.find({title: testReg });
  return meme;
}

/**
* @description    Like a meme.
                  Simple update the number of likes of a meme plus one
*/
async function likeMeme(memeId) {
  const meme = await Meme.findById(memeId);
  meme.likes += 1;
  await meme.save();
  return meme.likes;
}

/**
* @description    Download meme.
                  Simple update the number of downloads of a meme
*/
async function downloadMeme(memeId) {
  const meme = await Meme.findById(memeId);
  meme.downloads += 1;
  await meme.save();
  return meme;
}

module.exports = {
  getMemes,
  getTrendingMemes,
  getPopularMemes,
  downloadMeme,
  searchMeme,
  likeMeme,
};