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
}

export interface ArticleContent {
  type: ContentType;
  content: string;
  listTitle?: string;
  listItems?: string[];
  linkUrl?: string;
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
