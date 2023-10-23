This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Global Tasks

1. Favicon
2. Live Preview Mode
3. Search Functionality
4. Sitemap generating
5. Back to top/ Scroll to next
6. Load more posts on homepage

## Tasks on Blog Posts

1. Sticky Headings Nav
2. Similar posts section
3. Progress bar on post
4. Comments
5. Update classes on rich text components types
6. Add tags
7. Image Slider
8. Image with caption

## Other Pages

1. About Us
2. Contact
3. Authors page
4. Categories page

## Issues

1. Post Body empty <p></p> populating
2. Hydration issue with post comments form

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

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Sanity Integration

```bash
sanity login
```

I selected Github, but you choose the option you use to login to Sanity

```bash
sanity start
```

It will say _"Content Studio successfully compiled! Go to http://localhost:3333"_

A browser page will open to login to your Sanity account.

To deploy sanity cms to production you need to run:

```bash
sanity deploy
```

## Setup Sanity initialization

Create _".env.local"_ in the root of the repository

You will need to add the following code:

```bash
NEXT_PUBLIC_SANITY_DATASET={value}
NEXT_PUBLIC_SANITY_PROJECT_ID={value}
SANITY_API_TOKEN={token}
```
