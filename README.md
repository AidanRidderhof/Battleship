# repo-template
This is a basic template repository to copy and build projects off of
It comes with:
- An html, css, and javascript file
- a preconfigured package.json
- preconfigured webpack files for production and development

## Dependencies
- css-loader
- html-loader
- html-webpack-plugin
- style-loader
- webpack
- webpack-cli
- webpack-dev-server
- webpack-merge

## Scripts
- "dev": "webpack serve --open --config webpack.dev.js",
- "build": "webpack --config webpack.prod.js",
- "deploy": "git subtree push --prefix dist origin gh-pages"

Make sure to change name, description, and urls in the package.json
