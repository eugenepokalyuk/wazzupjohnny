import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Urls } from '@services/Route';

import classes from './Footer.module.scss';

export const footerMock = [
  {
    title: 'Продукты',
    links: [
      { label: 'Продукт 1', url: '/product1', isExternal: false },
      { label: 'Продукт 2', url: '/product2', isExternal: false },
      { label: 'Продукт 3', url: '/product3', isExternal: false },
      { label: 'Продукт 4', url: '/product4', isExternal: false },
    ],
  },
  {
    title: 'Поддержка',
    links: [
      { label: 'Справочный центр', url: '/help', isExternal: false },
      { label: 'Часто задаваемые опросы', url: '/faq', isExternal: false },
      { label: 'Информация о доставке', url: '/shipping', isExternal: false },
      { label: 'Условия возврата', url: '/returns', isExternal: false },
    ],
  },
  {
    title: 'Следуйте за нами',
    links: [
      { label: 'Twitter', url: 'https://twitter.com', isExternal: true },
      { label: 'Facebook', url: 'https://facebook.com', isExternal: true },
      { label: 'Instagram', url: 'https://instagram.com', isExternal: true },
      { label: 'LinkedIn', url: 'https://linkedin.com', isExternal: true },
    ],
  },
];

export const Footer:FC = () => (
  <footer className={classes.footer}>
    <div className={classes.box}>
      <div className={classes.narrow_column}>
        <div className={classes.logo}>
          <Link to={Urls.Home}>{'Forma'}</Link>
        </div>
      </div>

      <div className={classes.wide_column}>
        {footerMock.map((section, index) => (
          <div key={index} className={classes.column_section}>
            <h4>{section.title}</h4>

            <ul>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  {link.isExternal ? (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.url}>{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </footer>
);
