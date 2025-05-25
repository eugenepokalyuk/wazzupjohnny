import { FC, useEffect } from 'react';

import { Button, Card, CardFooter, CardHeader, Link, Size, Tags, Text, Variant } from '@components/ui';
import { Urls } from '@services/Route';

import classes from './Error.module.scss';

export const Error:FC = () => {
  useEffect(() => {
    document.title = 'Ooops! - wazzupjohnny';
  }, []);

  return (
    <div className={classes.box}>
      <Card variant={Variant.Secondary} className={classes.card}>
        <CardHeader>
          <Text tag={Tags.Heading} size={Size.XL}>
            {'!@#$#%, что-то пошло не так!'}
          </Text>
        </CardHeader>

        <CardFooter className={classes.card_footer}>
          <Link to={Urls.Home} className={classes.back_home_button}>
            <Button wide>{'На главную страницу'}</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
