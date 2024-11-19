import { FC } from 'react';

import { Link, Text } from '@components/ui';

import classes from './Courses.module.scss';
import { CoursesMock } from './Courses.mock';

export const Courses: FC = () => (
  <div className={classes.board}>
    <Text>{'Прошел крутые курсы'}</Text>

    {CoursesMock.map((course, index) => (
      <div key={index} className={classes.board_row}>
        <Text>{course.title}</Text>

        <div className={classes.lessons}>
          {course.lessons.map((lesson, lessonIndex) => (
            <Link key={lessonIndex} to={lesson.link} className={classes.link}>
              {lesson.name}
            </Link>
          ))}
        </div>
      </div>
    ))}
  </div>
);
