This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Blog Functionality

- Comments displaying on blog posts after approval in Sanity Studio
- Tags and Categories
- Sharing posts
- On homepage the recent 4 blog posts display and Load More button displays older posts
- Blog post read time calculation
- Images in posts have an option to add caption

## Global Tasks

1. Sitemap generating
2. Live Preview Mode
3. Search Functionality
4. Update Read Me about Sanity setup

## Tasks on Blog Posts

1. Sticky Headings Nav
2. Similar posts section
3. Progress bar on post
4. Comments
5. Update classes on rich text components types
6. Videos
7. Image Slider
8. Fill content on all blog posts

## Other Pages

1. About Us
2. Contact
3. Authors page
4. Categories page

## Issues

1. Post Body empty <p></p> populating
2. Hydration issue with post comments form
3. Image width/height and preloading

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

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Setup Sanity initialization

Create _".env.local"_ in the root of the repository

You will need to add the following code:

```bash
NEXT_PUBLIC_SANITY_DATASET={value}
NEXT_PUBLIC_SANITY_PROJECT_ID={value}
NEXT_PUBLIC_SANITY_API_VERSION={value}
SANITY_API_TOKEN={token}
```
