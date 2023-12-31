import Matter from 'matter-js';

import BIRD from "../../assets/images/bird.png";

import { styles } from './styles'

const Floor = (props) => {
  const widhtBody = props.body.bounds.max.x - props.body.bounds.min.x
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y

  const xBody = props.body.position.x - widhtBody / 2
  const yBody = props.body.position.y - heightBody / 2

  const color = props.color

  return (
    <Image
      source={BIRD}
      style={styles({
        widthBody,
        heightBody,
        xBody,
        yBody,
        color,
      }).floor
    }
    />
  )
}

export default (world, color, pos, size) => {
  const initialFloor = Matter.Bodies.retangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label: 'Floor', isStatic: true }
  );

  Matter.World.add(world, [initialFloor]);

  return{
    body: initialFloor,
    color,
    pos,
    renderer: <Floor />
  }
}