# Marvel Character Gallery

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## About the Project

Marvel Character Gallery is a web application that allows users to explore various Marvel characters, view their profiles, and explore their comic book appearances. The project fetches data from the Marvel API to display character information.

## Getting Started

### Prerequisites

You need to have Node.js and npm (or yarn, pnpm, bun) installed on your machine.

### Getting a Marvel API Key

1. **Sign Up for a Marvel Developer Account**

   First, go to the Marvel Developer Portal website and click “Get Started” to create a developer account. You’ll need to give your name, email, and password.

2. **Read and Accept Terms of Use**

3. **Get Your API Key**

   Once you accept the Marvel API Terms of Service, you’ll be given a public and private API key, which you’ll need to authenticate all API requests. Keep your private key secure and regenerate it if you need to.

For a detailed how-to guide on getting your key, visit [Marvel Developer Documentation](https://developer.marvel.com/documentation/getting_started).

### Installation

First, clone the repository:

```bash
git clone <repository-url>
cd <repository-name>
```

Then, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Configuration

Create a `.env.local` file in the root directory of the project and add the following environment variables:

```bash
PUBLIC_MARVEL_KEY=<your-marvel-api-public-key>
PRIVATE_MARVEL_KEY=<your-marvel-api-private-key>
```

### Running the Project

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building the Project

Build the project for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

Run the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
# or
bun start
```

### Testing the Project

Run the tests:

```bash
npm run test
# or
yarn test
# or
pnpm test
# or
bun test
```

## Technologies

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Jest](https://jestjs.io/)
