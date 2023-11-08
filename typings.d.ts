type Base = {
  _createdAt: string;
  _id: string;
  _publishedAt: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: [];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
}

interface Category extends Base {
  description: string;
  slug: Slug;
  title: string;
}

interface Comment {
  approved: boolean;
  comment: string;
  email: string;
  name: string;
  post: {
    _ref: string
    _type: string
  }
  publishedAt: string;
}

interface Image {
  _type: "image";
  asset: Reference;
}

interface MainImage {
  _type: "image";
  asset: Reference;
}

interface MenuItem {
  _key: string;
  menuName: string;
  slug: string;
}

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
  comments: Comment[];
  description: string;
  mainImage: Image;
  relatedPost?: Post[];
  slug: Slug;
  tags: Tag[];
  title: string;
}

interface Reference {
  _ref: string;
  _type: "reference";
}

interface RelatedPostRef {
  _key?: string;
  _ref?: string;
  _type?: string;
}

interface Slug {
  _type: "slug";
  current: string;
}

interface SocialLinks {
  fbLink: string;
  linkedinLink: string;
  pinterestLink: string;
  redditLink: string;
  twitterLink: string;
}

interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  text: string;
}

interface SiteData {
  headerText: string;
  footerText: string;
  menu: MenuItem[];
  siteTitle: string;
  socialLinks: SocialLinks;
}

interface Tag extends Base {
  title: string;
}

interface TextMedia {
  copy: Block[];
  image: Image;
}

interface Title {
  _type: "string";
  current: string;
}
