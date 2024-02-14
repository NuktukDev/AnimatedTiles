// @ts-expect-error: animejs has no type
import anime from 'animejs';
import { useEffect, useContext } from 'react';
import './Tile.scss';
import { ParentContext } from 'src/components/Tiles.tsx';

function Tile({
  x = '',
  x0 = '',
  y = '',
  y0 = '',
  src,
  color,
  bgColor,
}: {
  x?: string;
  x0?: string;
  y?: string;
  y0?: string;
  src: string;
  color: string;
  bgColor: string;
}) {
  const parentId = useContext(ParentContext);

  useEffect(() => {
    anime({
      targets: `#${parentId} .tile`,
      translateY: {
        value: -40,
      },
      opacity: {
        value: 1,
      },
      delay: anime.stagger(200, { start: 200 }),
      duration: 200,
    });
  }, []);
  return (
    <div
      className="tile"
      style={{
        left: x,
        right: x0,
        top: y,
        bottom: y0,
        ...(bgColor ? { '--tileBgColor': bgColor } : {}),
        ...(color ? { '--tileColor': color } : {}),
        ...(src ? { '--maskIcon': `url(${src})` } : {}),
      }}
    ></div>
  );
}

export { Tile };
