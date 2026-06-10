import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import clsx from 'clsx';

import { SegaShell } from '@components/sega';
import classes from '@components/sega/sega.module.scss';
import { PlayIcon } from '@components/ui';
import { articlesMock } from '@services/Api';
import { Urls } from '@services/Route/urls';
import { formatDate } from '@utils/string';

import { ReadingProgressBar } from '../ReadingProgressBar/ReadingProgressBar';
import { ContentBlock } from '../ContentBlock/ContentBlock';

export const ArticlePage: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articlesMock.find((a) => a.slug === slug);

  if (!article) {
    return (
      <SegaShell>
        <section className={`${classes.sec} ${classes.achievements}`}>
          <div className={classes.wrap}>
            <div className={classes.notFound}>
              GAME OVER · СТАТЬЯ НЕ НАЙДЕНА
            </div>
            <div style={{ textAlign: 'center' }}>
              <Link to={Urls.Articles} className={classes.backBtn}>
                ◀ К СТАТЬЯМ
              </Link>
            </div>
          </div>
        </section>
      </SegaShell>
    );
  }

  return (
    <SegaShell>
      <ReadingProgressBar />

      <section className={`${classes.sec} ${classes.achievements}`}>
        <div className={classes.articleWrap}>
          <Link to={Urls.Articles} className={classes.backBtn}>
            <PlayIcon className={clsx(classes.txtIcon, classes.iconFlip)} /> К
            СТАТЬЯМ
          </Link>

          <h1 className={classes.articleTitle}>{article.title}</h1>
          <div className={classes.articleMeta}>
            АВТОР: {article.author} · {formatDate(article.date)}
          </div>

          <div className={classes.articleBody}>
            {article.content.map((block, index) => (
              <ContentBlock key={index} block={block} />
            ))}
          </div>

          {article.externalLinks && (
            <div className={classes.sources}>
              <div className={classes.sourcesTitle}>ИСТОЧНИКИ</div>
              <div className={classes.sourceLinks}>
                {article.externalLinks.map((link) => (
                  <a
                    key={link.url}
                    className={classes.sourceLink}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </SegaShell>
  );
};
