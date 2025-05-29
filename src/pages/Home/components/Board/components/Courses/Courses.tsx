import { FC } from 'react';

import { Link, Text } from '@components/ui';

import classes from './Courses.module.scss';
import { CoursesMock } from './Courses.mock';
import { BoardCard } from '../BoardCard/BoardCard';

export const Courses: FC = () => (
  <BoardCard title="Прошел крутые курсы">
    {CoursesMock.map((course, index) => (
      <div key={index} className={classes.board_row}>
        <Text className={classes.category_title}>{course.title}</Text>

        <div className={classes.lessons}>
          {course.lessons.map((lesson, lessonIndex) => (
            <Link
              key={lessonIndex}
              to={lesson.link}
              className={classes.link}
              newTab
            >
              {lesson.name}
            </Link>
          ))}
        </div>
      </div>
    ))}
  </BoardCard>
);
