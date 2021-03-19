# HiddenForest

Website for interacting with hidden forest services

## Setup

To install all dependencies, use `npm ci`.

```bash
npm ci
```

## Development

To run this project in development mode use the below command.

```bash
npm run develop
```

You should then be able to view the development site at [http://localhost:3000](http://localhost:3000).

## Testing

To run tests, linting, and type checking, the below commands are used. These also run before each push.

```bash
npm test
npm run lint
npm run type-check
```

To help with formatting issues from linting, use prettier (this also runs automatically on each commit):

```bash
npm run format
```

Finally, to perform manual testing without using the development server, use storybook.

```bash
npm run storybook
```

You can view storybook at [http://localhost:6006](http://localhost:6006).

## Contributing

#### Adding Packages

If you need to add any new packages, add them using `npm i --save package` and `npm i --save-dev package`. Use the `--save` tag for packages needed in production and the `--save-dev` tag for other packages.

To update a package, use `npm update package` (or `npm update` to update all packages).

#### Pipeline

When you push a commit, the pipeline will first install all dependencies with `npm ci` and then create a production build with `npm run build`. If this succeeds, the next step will run unit tests, linting, and type checking. From here a deployment step can be added, or a service like Vercel can be connected to the repo.

## Usage

To create a production build use `npm run build`. Use commands below to start the production site locally.

```bash
npm run build
npm start
```

The production build can be visited at [http://localhost:3000](http://localhost:3000).
