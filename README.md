# mailing-esbuild-node

This project aim is to use mailing to send an email using only node without Next.js.

The `.env` file should look like:

```dotenv
MAIL_HOST=<your mail server host>
MAIL_PORT=<your mail server port>
MAIL_AUTH_USER=<your mail server user>
MAIL_AUTH_PASS=<your mail server password>
MAIL_FROM=<your mail server from email>
MAIL_TO=<your destination email>
```

To start mailing development server use:

```bash
yarn
npx mailing
```

To send a test email use:

```bash
yarn
yarn test
```
