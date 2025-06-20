import { ContentType } from '@pages/Articles/Articles.types.ts';

export const matterArticle = {
  id: 'matter-js-detailed-001',
  slug: 'matter-js-detailed-react-physics',
  title: 'Matter JS: Подробный разбор интерактивной физики React-компонента',
  author: 'Евгений Покалюк',
  date: '2025-06-21',
  content: [
    {
      type: ContentType.Heading,
      content: 'Введение',
    },
    {
      type: ContentType.Paragraph,
      content:
        'В этой статье я подробно расскажу о создании компонента, который оживляет текст с помощью физического движка Matter.js. Компонент позволяет превратить слова в интерактивные объекты, которые можно бросать, вращать и наблюдать за их поведением, создавая эффект антистресса и живого интерфейса',
    },
    {
      type: ContentType.Heading,
      content: 'Основная идея и задачи',
    },
    {
      type: ContentType.Paragraph,
      content:
        'Изначально многие просили сделать мобильную версию эффекта, где слова с физикой можно было бы не только видеть, но и взаимодействовать с ними только на десктопе. Основная задача — обеспечить плавный, отзывчивый и адаптивный компонент, который работает на любых устройствах и поддерживает разные способы запуска эффекта',
    },
    {
      type: ContentType.Subheading,
      content: 'Почему Matter.js?',
    },
    {
      type: ContentType.Paragraph,
      content:
        'Matter.js — это популярный 2D-физический движок на JavaScript, который отлично подходит для моделирования гравитации, столкновений и других физических эффектов. Он легко интегрируется с React и обеспечивает хорошую производительность, что критично для мобильных устройств',
    },
    {
      type: ContentType.Heading,
      content: 'Структура компонента MatterBoxV2',
    },
    {
      type: ContentType.Paragraph,
      content: 'Компонент построен с использованием React и хуков',
    },
    {
      type: ContentType.List,
      listTitle: 'В основе лежат три рефа:',
      listItems: [
        'containerRef — контейнер всего компонента',
        'textRef — элемент с текстом',
        'canvasContainerRef — контейнер для канваса, где Matter.js рендерит физику',
      ],
    },
    {
      type: ContentType.Paragraph,
      content:
        'Текст разбивается на слова, каждое из которых становится отдельным DOM-элементом и физическим телом',
    },
    {
      type: ContentType.Code,
      content: `const containerRef = useRef<HTMLDivElement | null>(null);
const textRef = useRef<HTMLDivElement | null>(null);
const canvasContainerRef = useRef<HTMLDivElement | null>(null);`,
    },
    {
      type: ContentType.Heading,
      content: 'Заполнение текста и подготовка слов',
    },
    {
      type: ContentType.Paragraph,
      content:
        'При получении массива навыков (content) мы формируем HTML с отдельными span для каждого слова, задавая им стили (цвет, фон, отступы, скругления):',
    },
    {
      type: ContentType.Code,
      content: `useEffect(() => {
  if (!textRef.current) return;

  const newHTML = content
    .map(
      (skill) =>
        \`<span
          class="word"
          style="color: \${skill.color}; background: \${skill.backgroundColor}; border-radius: 24px; padding: 0.15em 0.5em; margin: 0 0.2em;"
        >\${skill.name}</span>\`,
    )
    .join(' ');

  textRef.current.innerHTML = newHTML;
}, [content]);`,
    },
    {
      type: ContentType.Heading,
      content: 'Триггеры запуска эффекта',
    },
    {
      type: ContentType.Paragraph,
      content:
        'Компонент поддерживает разные способы запуска анимации: автоматически, по скроллу, клику или наведению. Для скролла используется IntersectionObserver, который запускает эффект при появлении компонента в зоне видимости:',
    },
    {
      type: ContentType.Code,
      content: `useEffect(() => {
  if (trigger === 'auto') {
    setEffectStarted(true);
    return;
  }

  if (trigger === 'scroll' && containerRef.current) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEffectStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }
}, [trigger]);`,
    },
    {
      type: ContentType.Heading,
      content: 'Инициализация Matter.js и физика',
    },
    {
      type: ContentType.Paragraph,
      content:
        'После запуска эффекта создаётся движок Matter.js с гравитацией, рендером и телами для слов и границ контейнера. Границы (пол, стены, потолок) — статичные объекты, чтобы слова не улетали за пределы. Каждое слово получает физическое тело с размерами, соответствующими его DOM-элементу, и случайной начальной скоростью и угловой скоростью для живости анимации',
    },
    {
      type: ContentType.Code,
      content: `const engine = Engine.create();
engine.world.gravity.y = gravity;

const render = Render.create({
  element: canvasContainerRef.current,
  engine,
  options: {
    width,
    height,
    background: backgroundColor,
    wireframes,
  },
});

const boundaryOptions = { isStatic: true, render: { fillStyle: backgroundColor } };

const floor = Bodies.rectangle(width / 2, height + 25, width, 50, boundaryOptions);
const leftWall = Bodies.rectangle(-25, height / 2, 50, height, boundaryOptions);
const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, boundaryOptions);
const ceiling = Bodies.rectangle(width / 2, -25, width, 50, boundaryOptions);

const wordSpans = textRef.current.querySelectorAll('.word');

const wordBodies = Array.from(wordSpans).map(elem => {
  const rect = elem.getBoundingClientRect();
  const x = rect.left - containerRect.left + rect.width / 2;
  const y = rect.top - containerRect.top + rect.height / 2;

  const body = Bodies.rectangle(x, y, rect.width, rect.height, {
    restitution: 0.8,
    frictionAir: 0.01,
    friction: 0.2,
    render: { fillStyle: backgroundColor },
  });

  Matter.Body.setVelocity(body, { x: (Math.random() - 0.5) * 5, y: 0 });
  Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);

  return { elem, body };
});`,
    },
    {
      type: ContentType.Paragraph,
      content:
        'Для взаимодействия с пользователем добавлен MouseConstraint, который позволяет «хватать» и «бросать» слова пальцем или мышью:',
    },
    {
      type: ContentType.Code,
      content: `const mouse = Mouse.create(containerRef.current);

const mouseConstraint = MouseConstraint.create(engine, {
  mouse,
  constraint: {
    stiffness: mouseConstraintStiffness,
    render: { visible: false },
  },
});

World.add(engine.world, [floor, leftWall, rightWall, ceiling, mouseConstraint, ...wordBodies.map(wb => wb.body)]);`,
    },
    {
      type: ContentType.Heading,
      content: 'Обновление позиций и анимация',
    },
    {
      type: ContentType.Paragraph,
      content:
        'В цикле обновления (requestAnimationFrame) позиция и угол каждого слова обновляются, чтобы DOM-элементы соответствовали физическим телам. Это ключ к плавной и реалистичной анимации:',
    },
    {
      type: ContentType.Code,
      content: `const updateLoop = () => {
  wordBodies.forEach(({ body, elem }) => {
    const { x, y } = body.position;
    elem.style.left = \`\${x}px\`;
    elem.style.top = \`\${y}px\`;
    elem.style.transform = \`translate(-50%, -50%) rotate(\${body.angle}rad)\`;
  });

  Matter.Engine.update(engine);
  requestAnimationFrame(updateLoop);
};

updateLoop();`,
    },
    {
      type: ContentType.Heading,
      content: 'Очистка ресурсов',
    },
    {
      type: ContentType.Paragraph,
      content:
        'При размонтировании компонента важно корректно остановить рендер и движок, а также очистить мир Matter.js, чтобы избежать утечек памяти:',
    },
    {
      type: ContentType.Code,
      content: `return () => {
  Render.stop(render);
  Runner.stop(runner);

  if (render.canvas && canvasContainerRef.current) {
    canvasContainerRef.current.removeChild(render.canvas);
  }

  World.clear(engine.world, false);
  Engine.clear(engine);
};`,
    },
    {
      type: ContentType.Heading,
      content: 'Обработка пользовательских триггеров',
    },
    {
      type: ContentType.Paragraph,
      content:
        'Для триггеров click и hover добавлены обработчики, которые запускают эффект при взаимодействии пользователя:',
    },
    {
      type: ContentType.Code,
      content: `const handleTrigger = () => {
  if (!effectStarted && (trigger === 'click' || trigger === 'hover')) {
    setEffectStarted(true);
  }
};

<div
  onClick={trigger === 'click' ? handleTrigger : undefined}
  onMouseEnter={trigger === 'hover' ? handleTrigger : undefined}
  ref={containerRef}
  className="falling-text-container"
>
  {/* ... */}
</div>`,
    },
    {
      type: ContentType.Heading,
      content: 'Заключение',
    },
    {
      type: ContentType.Paragraph,
      content:
        'Разработанный компонент MatterBoxV2 — отличный пример того, как можно сочетать React и физические движки для создания живых, интерактивных UI-компонентов. Несмотря на сложности с синхронизацией DOM и физики, оптимизацией и адаптацией под мобильные устройства, результат получился увлекательным и полезным',
    },
  ],
  externalLinks: [
    {
      label: 'Документация Matter.js',
      url: 'https://brm.io/matter-js/',
    },
    {
      label: 'React Hooks',
      url: 'https://react.dev/reference/react/hooks',
    },
    {
      label: 'Intersection Observer API',
      url: 'https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API',
    },
  ],
};
