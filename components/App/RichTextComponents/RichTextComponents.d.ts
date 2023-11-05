// Define interface for the component value/children values
interface rteImageValue {
  alt: string;
  caption?: string;
}

interface rteLinkValue {
  href: string;
}

interface rteYoutubeValue {
  caption: string;
  url: string;
}

// Define props interfaces for each component
interface RTEContentProps {
  children: React.ReactNode;
}

interface RTEGalleryProps {
  value: ImageValue;
}

interface RTEImageProps {
  value: ImageValue;
}

interface RTELinkProps {
  children: React.ReactNode;
  value: LinkValue;
}

interface RTEYoutubeProps {
  value: YoutubeValue;
}