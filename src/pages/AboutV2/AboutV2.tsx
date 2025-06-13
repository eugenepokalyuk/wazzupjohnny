import { FC } from 'react';

import { Layout } from '@components/units';
import { Size, Tags, Text } from '@components/ui';

import classes from './AboutV2.module.scss';
import ImageSelfPresentation2 from '/public/images/selfPresentation2.jpg';
import ImgCat from '/public/images/facts/cat.png';
import ImgBlog from '/public/images/facts/laptop.png';
import ImgArticles from '/public/images/facts/comic.png';
import ImgMusic from '/public/images/facts/headphones_white.png';
import ImgSnowboard from '/public/images/facts/snowboard.png';
import ImgCoffee from '/public/images/facts/coffee.png';
import ImgSketchbook from '/public/images/facts/sketchbook.png';

export const AboutV2: FC = () => (
  <Layout wide>
    <div className={classes.greetings_box}>
      <Text tag={Tags.Heading} size={Size.XL}>
        {'Привет! Меня зовут Женя'}
      </Text>

      <div className={classes.self_box}>
        <img src={ImageSelfPresentation2} alt="Фото Жени" />
      </div>

      <Text tag={Tags.Paragraph} size={Size.LG}>
        {
          'Я frontend-разработчик с душой сноубордиста, который обожает скорость и свободу на склонах, ласковую абиссинскую кошку и тяжелую музыку.'
        }
      </Text>
    </div>

    <div className={classes.grid}>
      <div className={classes.grid_item}>
        <img
          src={ImgCat}
          alt="Абиссинская кошка Астры"
          className={classes.grid_img}
        />

        <div>
          <Text tag={Tags.Heading_3}>
            {'🐾 Канал о моей абиссинской кошке Астры'}
          </Text>

          <Text tag={Tags.Paragraph}>
            {
              'Веду Telegram-канал, где делюсь забавными моментами и фото из жизни Астры — она настоящая звезда!'
            }
          </Text>
        </div>
      </div>

      <div className={classes.grid_item}>
        <img
          src={ImgBlog}
          alt="Блог о разработке"
          className={classes.grid_img}
        />

        <div>
          <Text tag={Tags.Heading_3}>{'💻 Блог о разработке и кодинге'}</Text>

          <Text tag={Tags.Paragraph}>
            {
              'Пишу в Telegram о своих проектах, делюсь мыслями и текстами, которые вдохновляют меня в свободное время.'
            }
          </Text>
        </div>
      </div>

      <div className={classes.grid_item}>
        <img
          src={ImgArticles}
          alt="Статьи на сайте"
          className={classes.grid_img}
        />
        <div>
          <Text tag={Tags.Heading_3}>{'📚 Автор статей на сайте'}</Text>
          <Text tag={Tags.Paragraph}>
            {
              'Создаю материалы, которых мне не хватало в своё время, чтобы помочь другим разработчикам.'
            }
          </Text>
        </div>
      </div>

      <div className={classes.grid_item}>
        <img
          src={ImgMusic}
          alt="Музыкальные плейлисты"
          className={classes.grid_img}
        />
        <div>
          <Text tag={Tags.Heading_3}>{'🎧 Собираю музыкальные плейлисты'}</Text>
          <Text tag={Tags.Paragraph}>
            {
              'У меня уже около 20 плейлистов, чтобы делиться своим уникальным вайбом и настроением с друзьями и подписчиками.'
            }
          </Text>
        </div>
      </div>

      <div className={classes.grid_item}>
        <img src={ImgSnowboard} alt="Сноуборд" className={classes.grid_img} />
        <div>
          <Text tag={Tags.Heading_3}>
            {'🏂 Максимальная скорость на сноуборде'}
          </Text>
          <Text tag={Tags.Paragraph}>
            {
              '40.9 км/ч — скорость, с которой я люблю мчаться по склонам, ощущая свободу и адреналин.'
            }
          </Text>
        </div>
      </div>

      <div className={classes.grid_item}>
        <img src={ImgSketchbook} alt="Скетчбук" className={classes.grid_img} />
        <div>
          <Text tag={Tags.Heading_3}>{'✏️ Скетчбук всегда на столе'}</Text>
          <Text tag={Tags.Paragraph}>
            {
              'Постоянно рисую и записываю важные детали карандашом — это помогает мне структурировать мысли и вдохновляет.'
            }
          </Text>
        </div>
      </div>

      <div className={classes.grid_item}>
        <img src={ImgCoffee} alt="Чай и кофе" className={classes.grid_img} />
        <div>
          <Text tag={Tags.Heading_3}>{'🍵 Люблю чайные церемонии и кофе'}</Text>
          <Text tag={Tags.Paragraph}>
            {
              'Обожаю китайский чай и домашние чайные церемонии, но не отказываюсь и от воронки или капучино — каждый напиток по-своему особенный.'
            }
          </Text>
        </div>
      </div>
    </div>
  </Layout>
);
