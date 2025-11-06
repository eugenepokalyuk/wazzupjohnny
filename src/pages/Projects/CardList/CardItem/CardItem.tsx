import { FC, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';

import {
  Button,
  Card,
  Color,
  Link,
  Size,
  Tags,
  Text,
  Variant,
} from '@components/ui';
import { ProjectItemProps } from '@services/Api';

import classes from './CardItem.module.scss';

interface Props {
  project: ProjectItemProps;
  onVisible: (index: number) => void;
  index: number;
  active: boolean;
}

export const CardItem: FC<Props> = ({ project, onVisible, index, active }) => {
  const { ref, inView } = useInView({
    threshold: 1,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      onVisible(index);
    }
  }, [inView, index, onVisible]);

  return (
    <div ref={ref}>
      <Card
        className={clsx(classes.box, {
          [classes.active]: active,
        })}
      >
        <div className={classes.card}>
          <div className={classes.title_box}>
            <Text tag={Tags.Heading_3} size={Size.LG}>
              {project.title}
            </Text>

            <Text tag={Tags.Heading_2} size={Size.SM} color={Color.Secondary}>
              {project.created}
            </Text>
          </div>

          <div className={classes.tags_box}>
            {project.badges.map((badge, idx) => (
              <Button key={idx} variant={Variant.Accent} size={Size.XS} tilt>
                {badge}
              </Button>
            ))}
          </div>

          <Text>{project.description}</Text>
        </div>

        <div
          className={clsx(classes.button_box, {
            [classes.two]: project.url && project.urlGitHub,
          })}
        >
          {project.url && (
            <Link to={project.url} newTab>
              <Button variant={Variant.Secondary} wide>
                {'Посмотреть сайт'}
              </Button>
            </Link>
          )}

          {project.urlGitHub && (
            <Link to={project.urlGitHub} newTab>
              <Button variant={Variant.Secondary} wide>
                {'Посмотреть код'}
              </Button>
            </Link>
          )}
        </div>
      </Card>
    </div>
  );
};
