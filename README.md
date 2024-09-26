This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses OpenWeatherAPI, so change your API key on next.config.mjs to make sure it's working properly.

## Dependencies

This project uses some dependencies, so make sure install some of these dependencies in case there is error on this project:

```bash
npm i react-icons
npm i tailwind-merge clsx
npm i react-query
npm i Axios
npm i date-fns
npm i jotai
```

Or you can check out some dependencies resources in case the installation dependencies code doesn't work:

- [React Icons](https://react-icons.github.io/react-icons/) - popular icons for React projects.
- [Tailwind Merge](https://www.npmjs.com/package/tailwind-merge?activeTab=readme) - merge Tailwind CSS classes in JS without style conflicts.
- [React Query](https://tanstack.com/query/v3) - react libraries for managing server state.
- [Axios](https://axios-http.com/docs/intro) - a promise-based HTTP Client for node.js and the browser.
- [Date-fns](https://date-fns.org/) - modern JavaScript date utility library.
- [Jotai](https://jotai.org/) - primitive and flexible state management for React.

## How to use

1. Make sure to put your OpenWeather API key onto next.config.mjs, otherwise it won't work.
2. This project shows all the weather data such as temperature, visibility, air pressure, humidity, and weather forecast for the next few days.
3. You can also use search bar that allows you to check weather data from the other countries or cities.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
