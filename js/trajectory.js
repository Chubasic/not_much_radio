const m = Math;
const p = m.PI;
const maxDegrees = 360;
/**
 *
 *
 * @param {number} degrees
 * @return {number}
 */
function getRadian(degrees) {
  return (degrees * p) / 180;
}
/**
 *
 *
 * @export
 * @param {{ radius: number, speed: number, planet: HTMLDivElement, startPosition: number }} { radius, speed, planet, startPosition }
 * @return {{interval: NodeJS.Timeout}}
 */
export default function ({ radius, speed, planet, startPosition = 0 }) {
  let deg = startPosition;
  function rotate() {
    ++deg;
    if (deg === maxDegrees) {
      deg = 0;
    }
    planet.style.left = `${m.sin(getRadian(deg)) * radius}px`;
    planet.style.top = `${m.cos(getRadian(deg)) * radius}px`;
  }
  const rotation = setInterval(rotate, speed);
  return { ineterval: rotation };
}
