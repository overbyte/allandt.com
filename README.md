# overbyte.co.uk

# Deploy status

[![Netlify Status](https://api.netlify.com/api/v1/badges/c38c2f58-7011-436b-bf55-0113a9fb2bd3/deploy-status)](https://app.netlify.com/sites/overbytecouk/deploys)

## Requirements

This project requires the following environment variables to access Storyblok
CMS API:
* SB_TOKEN

For local testing, these should be stored in a `.env` file in the root of the
project and not committed to GIT.
For deployment, this should be added to the environment before running the
generate command

These can be found at https://app.storyblok.com/#!/me/spaces/103220/edit?tab=api
and on the most recent publish json in Storyblok

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
