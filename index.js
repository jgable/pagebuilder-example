var fs = require("fs"),
	path = require("path");

var qunitServerless = require("grunt-qunit-serverless");

var PageBuilder = qunitServerless.PageBuilder,
	outputPath = path.join(process.cwd(), "_output"),
	// Other options available: https://github.com/jgable/grunt-qunit-serverless#options
	opts = {
		includeFiles: ["scripts/includes/*.js"],
		templateFiles: ["scripts/templates/*.js"],
		testFiles: ["scripts/tests/*.js"]
	};


// Create our page builder
var builder = new PageBuilder(opts);

// Make our output dir if not already made
if(!fs.existsSync(outputPath)) {
	fs.mkdirSync(outputPath);
}

// Optionally, override the tmpDir to manipulate where it's output.
builder.tmpDir = path.join(outputPath);

// Build the test file
builder.build(function(err, pagePath, pageHtml) {
	if(err) {
		throw err;
	}

	console.log("output to: ", pagePath);
});