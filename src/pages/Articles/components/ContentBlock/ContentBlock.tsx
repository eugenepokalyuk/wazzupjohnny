import { FC } from 'react';

import { ArticleContent, ContentType } from '@pages/Articles/Articles.types.ts';

import { Ad } from './components/Ad/Ad';
import { Code } from './components/Code/Code';
import { Heading } from './components/Heading/Heading';
import { Link } from './components/Link/Link';
import { List } from './components/List/List';
import { Paragraph } from './components/Paragraph/Paragraph';
import { Subheading } from './components/Subheading/Subheading';

interface ContentBlockProps {
  block: ArticleContent;
}

export const ContentBlock: FC<ContentBlockProps> = ({ block }) => {
  switch (block.type) {
    case ContentType.Heading:
      return <Heading content={block.content || ''} />;

    case ContentType.Subheading:
      return <Subheading content={block.content || ''} />;

    case ContentType.Paragraph:
      return <Paragraph content={block.content || ''} />;

    case ContentType.Code:
      return <Code content={block.content || ''} />;

    case ContentType.List:
      return (
        <List listTitle={block.listTitle} listItems={block.listItems || []} />
      );

    case ContentType.Link:
      return (
        <Link content={block.content || ''} linkUrl={block.linkUrl || '#'} />
      );

    case ContentType.Ad:
      return (
        <Ad
          content={block.content || ''}
          description={block.description}
          imageUrl={block.imageUrl}
          linkUrl={block.linkUrl || '#'}
        />
      );

    default:
      return null;
  }
};
