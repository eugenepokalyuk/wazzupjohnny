import { FC } from 'react';

import { Link, Size, Tags, Text } from '@components/ui';
import { ArticleContent, ContentType } from '@pages/Articles/Articles.types.ts';

import classes from './ContentBlock.module.scss';

interface ContentBlockProps {
  block: ArticleContent;
}

export const ContentBlock: FC<ContentBlockProps> = ({ block }) => {
  switch (block.type) {
    case ContentType.Heading:
      return (
        <Text tag={Tags.Heading} size={Size.LG} className={classes.heading}>
          {block.content}
        </Text>
      );
    case ContentType.Subheading:
      return (
        <Text
          tag={Tags.Heading_2}
          size={Size.MD}
          className={classes.subheading}
        >
          {block.content}
        </Text>
      );
    case ContentType.Paragraph:
      return (
        <Text tag={Tags.Paragraph} size={Size.SM} className={classes.paragraph}>
          {block.content}
        </Text>
      );
    case ContentType.Code:
      return (
        <pre className={classes.code}>
          <code>{block.content}</code>
        </pre>
      );
    case ContentType.List:
      return (
        <div className={classes.list}>
          {block.listTitle && (
            <Text
              tag={Tags.Heading_3}
              size={Size.MD}
              className={classes.listTitle}
            >
              {block.listTitle}
            </Text>
          )}
          <ul>
            {block.listItems?.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </div>
      );
    case ContentType.Link:
      return (
        block.linkUrl && (
          <Link
            to={block.linkUrl}
            // @ts-ignores
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >
            {block.content}
          </Link>
        )
      );
    default:
      return null;
  }
};
