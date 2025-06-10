import { FC } from 'react';

import classes from './MarqueeBanner.module.scss';

export const MarqueeBanner: FC = () => (
  <section className={classes.section}>
    {texts.map((text, idx) => (
      <div
        key={idx}
        className={classes.marquee + (idx === 0 ? ' ' + classes.first : '')}
      >
        <span
          className={
            idx % 2 === 0
              ? classes.marquee_content
              : classes.marquee_content_reverse
          }
          data-text={text}
        >
          {text}
          {text}
        </span>
      </div>
    ))}
  </section>
);

const texts = [
  'СОЗДАЁМ ВМЕСТЕ • ДИВИМСЯ ИННОВАЦИЯМ • СТРОИМ БУДУЩЕЕ • ТЕХНОЛОГИИ И ИСКУССТВО • ВОПЛОЩАЕМ МЕЧТЫ В ЖИЗНЬ • МЫСЛИМ ГЛОБАЛЬНО',
  'КОДИРУЕМ С УВЛЕЧЕНИЕМ • ЦЕНИМ КАЖДЫЙ ПИКСЕЛЬ • ИГРАЕМ С ДАННЫМИ • РАЗРУШАЕМ ГРАНИЦЫ • СОТВОРЯЕМ ЧУДЕСА • ОТКРЫТЫ ДЛЯ ИДЕЙ',
  'НЕПРЕРЫВНОЕ ОБУЧЕНИЕ • РАЗВИТИЕ И РОСТ • ВМЕСТЕ К СВЕТЛОМУ БУДУЩЕМУ • ПРОГРАММИРУЕМ МИР • НОВЫЕ ВОЗМОЖНОСТИ КАЖДЫЙ ДЕНЬ • ОБЩАЕМСЯ С КОДОМ',
  'ВДОХНОВЛЯЕМ ИННОВАЦИЯМИ • ПРЕОДОЛЕВАЕМ ВЫЗОВЫ • СТРОИМ КОД И СООБЩЕСТВО • СКЕТЧИМ, КОДИМ, СОЗДАЁМ • ДЕЛИМСЯ ЗНАНИЯМИ И ОПЫТОМ',
  'ХАКАТОНЫ КАЖДУЮ НЕДЕЛЮ • ПРОЕКТИРУЕМ БУДУЩЕЕ • ЖИВЁМ КРЕАТИВОМ • РАБОТАЕМ ИГРАЯ • МЕЧТАЕМ И РЕАЛИЗУЕМ • НЕТ ГРАНИЦ ДЛЯ ФАНТАЗИИ',
];
