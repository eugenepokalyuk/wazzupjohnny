import { FC } from 'react';
import { Link } from 'react-router-dom';

import { SegaShell } from '@features/Sega';
import classes from '@features/Sega/sega.module.scss';
import { PlayIcon } from '@components/ui';
import { articlesMock } from '@services/Api';
import { formatDate } from '@utils/string';

export const Articles: FC = () => {
  const sorted = [...articlesMock].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <SegaShell>
      <section className={`${classes.sec} ${classes.achievements}`}>
        <div className={classes.wrap}>
          <div className={classes.banner}>
            <span>📜 DEVLOG WORLD</span>
          </div>

          <p className={classes.pageLead}>
            {
              'Здесь я пишу о разработке, фреймворках и инструментах. Выбирай запись и читай'
            }
          </p>

          <div className={classes.projGrid}>
            {sorted.map((article) => (
              <Link
                key={article.id}
                className={classes.proj}
                to={`/articles/${article.slug}/`}
              >
                <div className={classes.projHead}>
                  <span className={classes.projYear}>
                    {formatDate(article.date)}
                  </span>
                  <span className={classes.projGo}>
                    READ <PlayIcon className={classes.txtIcon} />
                  </span>
                </div>
                <div className={classes.projTitle}>{article.title}</div>
                <p className={classes.projDesc}>АВТОР · {article.author}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SegaShell>
  );
};
