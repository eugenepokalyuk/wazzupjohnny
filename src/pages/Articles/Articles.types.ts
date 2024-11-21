export interface ExternalLink {
  label: string;
  url: string;
}

export enum ContentType {
  Heading = 'heading',
  Subheading = 'subheading',
  Paragraph = 'paragraph',
  Code = 'code',
  List = 'list',
  Link = 'link',
  Ad = 'ad',
}

export interface ArticleContent {
  type: ContentType;
  content?: string;
  description?: string;
  listTitle?: string;
  listItems?: string[];
  linkUrl?: string;
  imageUrl?: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  content: ArticleContent[];
  externalLinks?: ExternalLink[];
}
