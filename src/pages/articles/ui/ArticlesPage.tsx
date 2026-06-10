import { FC } from 'react';
import { Link } from 'react-router-dom';

import { useAppPaths, useTranslation } from '@shared/i18n';
import { formatDate } from '@shared/lib';
import { PlayIcon } from '@shared/ui';
import { articlesMock } from '@entities/article';
import { SegaLayout } from '@widgets/sega-layout';

import classes from '@shared/styles/sega.module.scss';

export const ArticlesPage: FC = () => {
  const { t } = useTranslation();
  const paths = useAppPaths();

  const sorted = [...articlesMock].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <SegaLayout>
      <section className={`${classes.sec} ${classes.achievements}`}>
        <div className={classes.wrap}>
          <div className={classes.banner}>
            <span>{t.articlesPage.banner}</span>
          </div>

          <p className={classes.pageLead}>{t.articlesPage.lead}</p>

          <div className={classes.projGrid}>
            {sorted.map((article) => (
              <Link key={article.id} className={classes.proj} to={paths.article(article.slug)}>
                <div className={classes.projHead}>
                  <span className={classes.projYear}>{formatDate(article.date)}</span>
                  <span className={classes.projGo}>
                    {t.common.read} <PlayIcon className={classes.txtIcon} />
                  </span>
                </div>
                <div className={classes.projTitle}>{article.title}</div>
                <p className={classes.projDesc}>
                  {t.common.author} · {article.author}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SegaLayout>
  );
};
