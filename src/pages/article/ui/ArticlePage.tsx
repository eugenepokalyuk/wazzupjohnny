import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import clsx from 'clsx';

import { useAppPaths, useTranslation } from '@shared/i18n';
import { formatDate } from '@shared/lib';
import { PlayIcon } from '@shared/ui';
import { articlesMock, ContentBlock, ReadingProgressBar } from '@entities/article';
import { SegaLayout } from '@widgets/sega-layout';

import classes from '@shared/styles/sega.module.scss';

export const ArticlePage: FC = () => {
  const { t } = useTranslation();
  const paths = useAppPaths();
  const { slug } = useParams<{ slug: string }>();
  const article = articlesMock.find((a) => a.slug === slug);

  if (!article) {
    return (
      <SegaLayout>
        <section className={`${classes.sec} ${classes.achievements}`}>
          <div className={classes.wrap}>
            <div className={classes.notFound}>{t.articlesPage.notFound}</div>
            <div style={{ textAlign: 'center' }}>
              <Link to={paths.articles} className={classes.backBtn}>
                ◀ {t.common.back}
              </Link>
            </div>
          </div>
        </section>
      </SegaLayout>
    );
  }

  return (
    <SegaLayout>
      <ReadingProgressBar />

      <section className={`${classes.sec} ${classes.achievements}`}>
        <div className={classes.articleWrap}>
          <Link to={paths.articles} className={classes.backBtn}>
            <PlayIcon className={clsx(classes.txtIcon, classes.iconFlip)} /> {t.common.back}
          </Link>

          <h1 className={classes.articleTitle}>{article.title}</h1>
          <div className={classes.articleMeta}>
            {t.common.author}: {article.author} · {formatDate(article.date)}
          </div>

          <div className={classes.articleBody}>
            {article.content.map((block, index) => (
              <ContentBlock key={index} block={block} />
            ))}
          </div>

          {article.externalLinks && (
            <div className={classes.sources}>
              <div className={classes.sourcesTitle}>{t.common.sources}</div>
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
    </SegaLayout>
  );
};
