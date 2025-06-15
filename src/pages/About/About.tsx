import { FC } from 'react';

import { Layout } from '@components/units';
import { Size, Tags, Text } from '@components/ui';
import ImageAvatarSrc from '@public/images/about/avatar.jpg';
import { factsMock } from '@services/Api';

import classes from './About.module.scss';
import { FactItem } from './FactsItem/FactsItem';

export const About: FC = () => (
  <Layout wide>
    <div className={classes.container}>
      <div className={classes.greetings_box}>
        <div className={classes.image_box}>
          <img src={ImageAvatarSrc} alt="Фото Жени" />
        </div>

        <Text tag={Tags.Heading} size={Size.XXL}>
          {'Меня зовут Женя'}
        </Text>
      </div>

      <div className={classes.texts}>
        <Text tag={Tags.Paragraph} size={Size.LG}>
          {
            'Я frontend-разработчик с душой сноубордиста, который обожает скорость и свободу на склонах, ласковую абиссинскую кошку и тяжелую музыку'
          }
        </Text>

        <Text tag={Tags.Paragraph} size={Size.LG}>
          {
            'Мне нравится создавать интерактивные, интуитивно понятные и отзывчивые пользовательские интерфейсы, которые соответствуют современным стандартам веб-разработки'
          }
        </Text>

        <Text tag={Tags.Paragraph} size={Size.LG}>
          {
            'Для меня важно не просто писать код, а находить эффективные решения, которые делают жизнь пользователей проще и комфортнее. Я стремлюсь к тому, чтобы каждый интерфейс был удобным и продуманным, обеспечивая высокое качество взаимодействия'
          }
        </Text>

        <Text tag={Tags.Paragraph} size={Size.LG}>
          {
            'Буду рад обсудить, как мой опыт и подход помогут вашей компании достичь новых высот'
          }
        </Text>
      </div>

      <div className={classes.facts_box}>
        <div className={classes.grid}>
          {factsMock.map(({ imgSrc, imgAlt, title, description, link }) => (
            <FactItem
              key={title.toString()}
              imgSrc={imgSrc}
              imgAlt={imgAlt}
              title={title}
              description={description}
              link={link}
            />
          ))}
        </div>
      </div>
    </div>
  </Layout>
);
