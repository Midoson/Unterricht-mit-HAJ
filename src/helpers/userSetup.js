function userMarkdownSetup(md) {
  // The md parameter stands for the markdown-it instance used throughout the site generator.
  // Feel free to add any plugin you want here instead of /.eleventy.js
}
function userEleventySetup(eleventyConfig) {
  // The eleventyConfig parameter stands for the the config instantiated in /.eleventy.js.
  // Feel free to add any plugin you want here instead of /.eleventy.js

  // Eigene Seiten: Jeder Ordner in /tools wird unverändert als eigene Seite veröffentlicht.
  // tools/<name>/index.html  ->  https://<deine-seite>/<name>/
  // Ordner, die mit "." oder "_" beginnen, werden übersprungen.
  const fs = require("fs");
  if (fs.existsSync("tools")) {
    fs.readdirSync("tools", { withFileTypes: true })
      .filter((d) => d.isDirectory() && !/^[._]/.test(d.name))
      .forEach((d) => {
        eleventyConfig.addPassthroughCopy({ [`tools/${d.name}`]: d.name });
      });
  }
}
exports.userMarkdownSetup = userMarkdownSetup;
exports.userEleventySetup = userEleventySetup;
