// @ts-nocheck
import { FC, useEffect, useRef } from 'react';
import Two from 'two.js';
import { Bodies, Body, Engine, Mouse, MouseConstraint, World } from 'matter-js';

import { Skill } from '@services/Api';
import { config } from '@components/modules';

import classes from './MatterBox.module.scss';

interface Props {
  skills: Skill[];
}

interface Bounds {
  length: number;
  thickness: number;
  properties: {
    isStatic: boolean;
  };
  left?: { entity: Body; rectangle: typeof Two.Rectangle };
  right?: { entity: Body; rectangle: typeof Two.Rectangle };
  bottom?: { entity: Body; rectangle: typeof Two.Rectangle };
}

export const MatterBox: FC<Props> = ({ skills }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const vector = new Two.Vector(0, 0);
    const entities: Body[] = [];

    const two = new Two({
      type: Two.Types.canvas,
      fullscreen: false,
      autostart: true,
      width: containerRef.current.clientWidth,
      height: containerRef.current.clientHeight,
    }).appendTo(containerRef.current);

    const solver = Engine.create();
    solver.world.gravity.y = config.gravity;

    const bounds: Bounds = {
      length: containerRef.current.clientWidth,
      thickness: config.thickness,
      properties: {
        isStatic: true,
      },
    };

    bounds.left = createBoundary(bounds.thickness, bounds.length);
    bounds.right = createBoundary(bounds.thickness, bounds.length);
    bounds.bottom = createBoundary(bounds.length, bounds.thickness);

    if (bounds.left && bounds.right && bounds.bottom) {
      World.add(solver.world, [
        bounds.left.entity,
        bounds.right.entity,
        bounds.bottom.entity,
      ]);
    }

    const defaultStyles = {
      size: two.width * config.defaultFontSizeRatio,
      weight: config.fontWeight,
      fill: 'white',
      leading: two.width * config.defaultFontSizeRatio * config.leadingRatio,
      family: config.fontFamily,
      alignment: 'center' as const,
      baseline: 'baseline' as const,
      margin: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
    };

    addSlogan();

    resize();

    addMouseInteraction();

    two.bind('resize', resize).bind('update', update);

    function addMouseInteraction() {
      const mouse = Mouse.create(containerRef.current!);

      const mouseConstraint = MouseConstraint.create(solver, {
        mouse: mouse,
        constraint: {
          stiffness: config.mouseStiffness,
        },
      });

      World.add(solver.world, mouseConstraint);

      return mouseConstraint;
    }

    function resize() {
      const thickness = bounds.thickness;

      vector.x = (-thickness + 200) / 2;
      vector.y = two.height / 2;
      Body.setPosition(bounds.left!!.entity, vector);

      vector.x = two.width + thickness / 2;
      vector.y = two.height / 2;
      Body.setPosition(bounds.right!!.entity, vector);

      vector.x = two.width / 2;
      vector.y = two.height + thickness / 2;
      Body.setPosition(bounds.bottom!!.entity, vector);

      const size =
        two.width < 480
          ? two.width * config.largeFontSizeRatio
          : two.width * config.smallFontSizeRatio;
      const leading = size * config.leadingRatio;

      two.scene.children.forEach((child) => {
        if (child.isWord && child.text) {
          const text = child.text;
          text.size = size;
          text.leading = leading;

          const rect = text.getBoundingClientRect(true);
          const rectangle = child.rectangle;
          const entity = child.entity;

          if (rectangle && entity) {
            rectangle.width = rect.width / 2;
            rectangle.height = rect.height;

            Body.scale(entity, 1 / entity.scale.x, 1 / entity.scale.y);
            Body.scale(entity, rect.width / 2, rect.height);
            entity.scale.set(rect.width / 2, rect.height);

            text.size = size / 3;

            Body.set(entity, {
              width: rect.width / 2,
              height: rect.height,
            });
          }
        }
      });
    }

    function addSlogan() {
      let x = defaultStyles.margin.left;
      let y = -two.height;

      skills.forEach(({ name, color, backgroundColor }) => {
        const group = new Two.Group() as Text;
        const text = new Two.Text(name, 0, 0, {
          ...defaultStyles,
          fill: color,
        });

        group.isWord = true;

        const rect = text.getBoundingClientRect();

        if (x + rect.width >= two.width) {
          x = defaultStyles.margin.left;
          y += defaultStyles.leading;
        }

        const ox = x + rect.width / 2;
        const oy = y + rect.height / 2;

        group.translation.set(ox, oy);

        text.translation.y = config.textTranslationY;

        const rectangle = new Two.RoundedRectangle(
          0,
          0,
          rect.width,
          rect.height,
          config.rectangleCornerRadius,
        );

        rectangle.fill = backgroundColor;
        rectangle.noStroke();

        const entity: Text = Bodies.rectangle(ox, oy, 1, 1);

        Body.scale(entity, rect.width, rect.height);
        entity.scale = new Two.Vector(rect.width, rect.height);
        entity.object = group;

        const randomAngle = (Math.random() * 30 - 15) * (Math.PI / 180);
        Body.setAngle(entity, randomAngle);

        entities.push(entity);
        x += rect.width;

        group.add(rectangle, text);
        two.add(group);

        group.text = text;
        group.rectangle = rectangle;
        group.entity = entity;
      });

      World.add(solver.world, entities);
    }

    function update() {
      Engine.update(solver);

      entities.forEach((entity: Text) => {
        if (entity.object) {
          entity.object.position.copy(entity.position);
          entity.object.rotation = entity.angle;
        }
      });
    }

    function createBoundary(width: number, height: number) {
      const rectangle = two.makeRectangle(0, 0, width, height);

      rectangle.visible = false;

      const entity = Bodies.rectangle(0, 0, width, height, bounds.properties);

      return { rectangle, entity };
    }

    return () => {
      two.clear();
      World.clear(solver.world, true);
      Engine.clear(solver);
    };
  }, [skills]);

  return <div ref={containerRef} className={classes.matter_box} />;
};
