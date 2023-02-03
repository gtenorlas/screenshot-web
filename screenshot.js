const request = require('request-promise-native')

// @param {String} token - String containing your API Key
// @param {String} url - Encoded URI string container the URI you're targeting
// @param {Integer} width - Integer indicating the width of your target render
// @param {Integer} height - Integer indicating the height of your target render
// @param {String} output - String specifying the output format, "image" or "json"
var token = "1X4KTM6-9404RJA-QZ531EP-B8405CE";
//var url = encodeURIComponent("https://google.com");
var width = 1920;
var height = 1080;
var output = "json";

// Construct the query params and URL

// Call the API and save the screenshot
const screenshot = (url) => {

  var query = "https://shot.screenshotapi.net/screenshot";
  query += `?token=${token}&url=${url}&width=${width}&height=${height}&output=${output}`;

  return request.get({url: query, encoding: 'binary'}, (err, response, body) => {
    return body;
  });
};
//screenshot('https://google.com');
module.exports = { screenshot };
