module.exports = function (eleventyConfig) {
  // Salin folder `assets` ke folder output `_site`
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/venobox");

  // Atur direktori sumber dan output
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
};