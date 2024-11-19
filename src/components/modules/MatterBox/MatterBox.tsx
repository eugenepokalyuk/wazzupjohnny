// @ts-nocheck
import { FC, useEffect, useRef } from 'react';
import Two, { Rectangle } from 'two.js';
import { Bodies, Body, Engine, Mouse, MouseConstraint, World } from 'matter-js';

import { Skill } from '@services/Api';
import { config } from '@components/modules';

import classes from './MatterBox.module.scss';

interface Props {
  skills: Skill[];
}

interface TwoText extends Text {
  isWord?: boolean;
  rectangle?: typeof Rectangle;
  entity?: Body;
}

interface Bounds {
  length: number;
  thickness: number;
  properties: {
    isStatic: boolean;
  };
  left?: { entity: Body };
  right?: { entity: Body };
  bottom?: { entity: Body };
}

export const MatterBox: FC<Props> = ({ skills }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const vector = new Two.Vector();
    const entities: Body[] = [];
    let mouse: MouseConstraint | undefined;

    const two = new Two({
      type: Two.Types.canvas,
      fullscreen: false,
      autostart: true,
      width: containerRef.current.clientWidth,
      height: containerRef.current.clientHeight,
    }).appendTo(containerRef.current);

    const solver = Engine.create();
    solver.world.gravity.y = 1;

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

    World.add(solver.world, [
      bounds.left.entity,
      bounds.right.entity,
      bounds.bottom.entity,
    ]);

    const defaultStyles = {
      size: two.width * config.defaultFontSizeRatio,
      weight: config.fontWeight,
      fill: 'white',
      leading: two.width * config.defaultFontSizeRatio * config.leadingRatio,
      family: 'Angus, Arial, sans-serif',
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

    mouse = addMouseInteraction();

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

      vector.x = -thickness / 2;
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
        if ((child as TwoText).isWord && child.text) {
          const text = (child as TwoText).text;
          text.size = size;
          text.leading = leading;

          const rect = text.getBoundingClientRect(true);
          const rectangle = (child as TwoText).rectangle;
          const entity = (child as TwoText).entity;

          if (rectangle && entity) {
            rectangle.width = rect.width;
            rectangle.height = rect.height;

            Body.scale(entity, 1 / entity.scale.x, 1 / entity.scale.y);
            Body.scale(entity, rect.width, rect.height);
            entity.scale.set(rect.width, rect.height);

            text.size = size / 3;
          }
        }
      });
    }

    function addSlogan() {
      let x = defaultStyles.margin.left;
      let y = -two.height;

      skills.forEach(({ name, color, backgroundColor }) => {
        const group = new Two.Group() as TwoText;
        const text = new Two.Text(name, 0, 0, {
          ...defaultStyles,
          fill: color,
        });

        group.isWord = true;

        const rect = text.getBoundingClientRect();
        const ox = x + rect.width / 2;
        const oy = y + rect.height / 2;

        if (x + rect.width >= two.width) {
          x = defaultStyles.margin.left;
          y += defaultStyles.leading;
        }

        group.translation.set(ox, oy);
        text.translation.y = 6;

        const rectangle = new Two.RoundedRectangle(
          0,
          0,
          rect.width,
          rect.height,
          20,
        );

        rectangle.fill = backgroundColor;
        rectangle.noStroke();

        const entity = Bodies.rectangle(ox, oy, 1, 1);
        // const entity = Bodies.rectangle(ox, oy, rect.width, rect.height);

        Body.scale(entity, rect.width, rect.height);
        entity.scale = new Two.Vector(rect.width, rect.height);
        entity.object = group;

        const randomAngle = (Math.random() * 30 - 15) * (Math.PI / 180); // В радианах
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

      entities.forEach((entity) => {
        if (entity.object) {
          entity.object.position.copy(entity.position);
          entity.object.rotation = entity.angle;
        }
      });
    }

    function createBoundary(width: number, height: number) {
      const rectangle = two.makeRectangle(0, 0, width, height);

      rectangle.visible = false;

      rectangle.entity = Bodies.rectangle(
        0,
        0,
        width,
        height,
        bounds.properties,
      );

      rectangle.entity.position = rectangle.position;

      return rectangle;
    }

    return () => {
      two.clear();
      World.clear(solver.world, true);
      Engine.clear(solver);
    };
  }, [skills]);

  return <div ref={containerRef} className={classes.matter_box} />;
};
