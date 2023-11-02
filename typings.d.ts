type Base = {
  _createdAt: string;
  _id: string;
  _publishedAt: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Page extends Base {
  body: Block[];
  mainImage: Image;
  slug: Slug;
  title: string;
}

interface Post extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  tags: Tag[];
  comments: Comment[];
  description: string;
  mainImage: Image;
  slug: Slug;
  title: string;
}

interface Comment extends Base {
  approved: boolean;
  name: string;
  email: string;
  comment: string;
  post: {
    _ref: string
    _type: string
  }
}

interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}

interface Gallery {
  image: Image[];
}

interface Image {
  _type: "image";
  asset: Reference;
}

interface Reference {
  _ref: string;
  _type: "reference";
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
}

interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

interface Category extends Base {
  description: string;
  title: string;
  slug: Slug;
}

interface Tag extends Base {
  title: string;
}

interface MainImage {
  _type: "image";
  asset: Reference;
}

interface Title {
  _type: "string";
  current: string;
}
