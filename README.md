# Personal Website

This repository contains the source code for my personal website.

## Technologies Used

- Node.js
- React
- TypeScript
- Webpack
- AWS S3

## Local Development

This project requires Node.js to be installed. Once you have that, you can install the necessary packages by running:

```bash
npm install
```

You can start the development server by running:

```bash
npm start
```

This starts the webpack dev server at `http://localhost:9000`.

## Deployment

The website is deployed on AWS S3. To prepare the build, run:

```bash
npm run build
```

This will create a `dist` folder with the bundled files ready to be deployed.

## License

[MIT](https://choosealicense.com/licenses/mit/)
