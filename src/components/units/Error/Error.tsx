import { FC } from 'react';

import { Button, Link } from '@components/ui';
import { Urls } from '@services/Route';

import classes from './Error.module.scss';

export const Error: FC = () => {
  return (
    <div className={classes.box}>
      <div>
        <h1>{'404 - Page Not Found'}</h1>

        <p>{'Oops! It looks like you’re in the wrong place.'}</p>

        <Link to={Urls.Home} className={classes.back_home_button}>
          <Button>{'Go Back Home'}</Button>
        </Link>
      </div>
    </div>
  );
};
