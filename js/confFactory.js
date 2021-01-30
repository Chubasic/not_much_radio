/**
 *
 *
 * @export
 * @param {number} iterations
 * @param {[{accum: [], prevRadius: number}]} args
 * @return {{id: string, radius: number, speed: number, rgbaMain: string, rgbaSec: string}}
 */
export default function confFactory(iterations, ...args) {
  const [accum = [], prevRadius = 0] = args;
  const randChanel = () => Math.floor(Math.random() * 255);
  const randRGB = () => `${randChanel()},${randChanel()},${randChanel()}`;
  const radius = Math.floor(Math.random() * (300 - 100) + 100);
  if (iterations) {
    if (radius === prevRadius) {
      return confFactory(iterations, accum, radius);
    }
    accum.push({
      radius,
      id: Math.random().toString(36).substring(7),
      speed: Math.floor(Math.random() * (10 - 2) + 2),
      rgbaMain: randRGB(),
      rgbaSec: randRGB(),
    });
    return confFactory(iterations - 1, accum, radius);
  }
  return accum;
}
