# Material Theme Changelog on Sanity.io

> Material Theme Changelog saved as structured content on Sanity.io

## Develop

You should have `sanity` CLI installed and access to the Material Theme Changelog project on Sanity.io.

- Clone the repository
- `sanity login`
- `yarn start` - run the local Sanity studio

### Schema changes

`Schemas` are the main part of the repo and should be modified carefully.
Sanity documentation: https://www.sanity.io/docs/content-studio/the-schema

We have a custom `light-block-content` which is basically a small version of the big `block-content`, used for every block content inside `release`.

## Deploy

- `yarn test`
- `yarn deploy`


