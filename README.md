## Deploy

When deploying the website you might need to first delete `node-modules/gh-pages/.cache`.

`rm -rf node_modules/gh-pages/.cache`

Then deploy to GitHub pages

`npm run deploy`


# gatsby-starter-default
The default Gatsby starter.

For an overview of the project structure please refer to the [Gatsby documentation - Building with Components](https://www.gatsbyjs.org/docs/building-with-components/).

## Install

Make sure that you have the Gatsby CLI program installed:
```sh
npm install --global gatsby-cli
```

And run from your CLI:
```sh
gatsby new gatsby-example-site
```

Then you can run it by:
```sh
cd gatsby-example-site
npm run develop
```
