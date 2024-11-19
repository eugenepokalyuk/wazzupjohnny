import { FC } from 'react';
import { Link, Text } from '@components/ui';

import classes from './Books.module.scss';
import { BooksMock } from './Books.mock.ts';

export const Books: FC = () => (
  <div className={classes.board}>
    <Text>{'Нашел полезные штуки'}</Text>

    {BooksMock.map((category, categoryIndex) => (
      <div key={categoryIndex} className={classes.board_row}>
        <Text>{category.title}</Text>

        <div className={classes.books}>
          {category.books.map((book, bookIndex) => (
            <div key={bookIndex} className={classes.book_item}>
              <Link to={book.link} className={classes.link}>
                {book.name}
              </Link>

              <Text className={classes.book_description}>
                {book.description}
              </Text>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);
