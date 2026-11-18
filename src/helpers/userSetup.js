function userMarkdownSetup(md) {
  // The md parameter stands for the markdown-it instance used throughout the site generator.
  // Feel free to add any plugin you want here instead of /.eleventy.js
}
function userEleventySetup(eleventyConfig) {
  // The eleventyConfig parameter stands for the the config instantiated in /.eleventy.js.
  // Feel free to add any plugin you want here instead of /.eleventy.js

  // Leserbrief verfassen: einzelne HTML-Seite, wird unverändert nach /leserbrief-verfassen/ kopiert.
  eleventyConfig.addPassthroughCopy({
    "tools/leserbrief-verfassen/index.html": "leserbrief-verfassen/index.html",
  });
}
exports.userMarkdownSetup = userMarkdownSetup;
exports.userEleventySetup = userEleventySetup;
