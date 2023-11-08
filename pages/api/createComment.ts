// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {
  NextApiRequest,
  NextApiResponse
} from "next";
import { createClient } from "@sanity/client";

const client = createClient({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_READ_TOKEN
})

export default async function createComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const str = req.body.comment.replace(/(?:\r\n|\r|\n)/g, "<br>");
    const { _id, name, email } = req.body;
    const comment = str;

    if (!_id || !name || !email || !comment) {
      return res.status(400).json({ message: "Invalid data" });
    }

    await client.create({
      _type: "comment",
      name,
      email,
      comment,
      publishedAt: new Date().toISOString(),
      post: {
        _type: "reference",
        _ref: _id
      }
    });

    res.status(200).json({ message: "Comment submitted" });
  } catch (error) {
    return res.status(500).json({ message: "Could not submit comment", error });
  }
}
