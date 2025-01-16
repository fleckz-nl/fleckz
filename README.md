# Fleckz App


## How to develop

> **Prerequisites**
>
> - Redwood requires [Node.js](https://nodejs.org/en/) (=20.x) and [Yarn](https://yarnpkg.com/)
> - Are you on Windows? For best results, follow our [Windows development setup](https://redwoodjs.com/docs/how-to/windows-development-setup) guide

Set the environment variables:

```bash
# .env
DATABASE_URL=YOUR_DATABASE_URL
SESSION_SECRET=YOUR_SESSION_SECRET
POSTMARK_KEY=YOUR_POSTMARK_KEY
SESSION_SECRET=YOUR_SESSION_SECRET # yarn redwood generate secret
UPLOADCARE_PUBLIC_KEY=YOUR_UPLOADCARE_PUBLIC_KEY
```

> Note: the app relies on two external services, [Postmark](https://postmarkapp.com/) (to send emails) and [Uploadcare](https://uploadcare.com/) (to manage file uploads)

Install dependencies:

```bash
yarn install
```

Seed the database:

```bash
yarn redwood exec seed
```

Then start the development server:

```bash
yarn redwood dev
```

Your browser should automatically open to [http://localhost:8910](http://localhost:8910).


## License

This project is licensed under [Functional Source License (FSL) 1.1 MIT](https://fsl.software/) to achieve the balance of sustainability and openness.
The license converts to MIT after two years.
