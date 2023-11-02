This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Global Blog Functionality

- Tags and Categories
- Author page
- Category page
- Pages like About Us and Contact Us

## Blog Homepage Functionality

- On homepage the recent 4 blog posts display and Load More button displays older posts

## Blog Post Functionality

- Breadcrumbs
- Comments displaying on blog posts after approval in Sanity Studio
- Gallery slider
- Option to add caption to images
- Progress bar calculating reading post
- Read time calculation
- Sharing posts
- Videos embed

## Global Tasks

1. Sitemap generating
2. Live Preview Mode
3. Search Functionality
4. Redirect urls in next.config
5. Sitewide section in Sanity
6. Replace shortcode text in CMS

## Tasks on Blog Posts

1. Sticky Headings Nav
2. Similar posts section
3. Comments
4. Fill content on all blog posts/pages
5. Form option to Rich Text
6. Two Column Text option

## Other Pages

1. Custom 404 Error

## Issues

1. Hydration issue with post comments form
2. Inspect element does not work on post page article tag
3. ES Lint Console log errors
4. Progress bar on posts not sticky on scroll
5. Dynamic alt tag displaying on gallery
6. Image width and height attribute console warning issue
7. Any types fixed across codebase

## Getting Started

Project needs to run in Node Version 18. Install Next.JS with TailwindCSS

```bash
npx create-next-app@latest {project-name} --typescript --eslint
```

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

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Sanity Setup

Run the following command and run through the steps in the terminal:

```bash
yarn create sanity@latest
```

## Setup Sanity initialization

Create _".env.local"_ in the root of the repository

You will need to add the following code:

```bash
NEXT_PUBLIC_SANITY_DATASET={value}
NEXT_PUBLIC_SANITY_PROJECT_ID={value}
NEXT_PUBLIC_SANITY_API_VERSION={value}
SANITY_API_TOKEN={token}
```
