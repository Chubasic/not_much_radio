import trajectory from "./trajectory";

/**
 *
 *
 * @param {string} id
 * @return {HTMLDivElement}
 */
function createHTMlElement(id) {
  const elem = document.createElement("div");
  elem.setAttribute("class", "planet");
  elem.setAttribute("id", id);
  return elem;
}

/**
 *
 *
 * @param {HTMLDivElement} elem
 * @param {{rgbaMain: string, rgbaSec: string}} gradient
 * @return {HTMLDivElement}
 */
function setPlanetColor(elem, gradient) {
  elem.style.backgroundImage = `linear-gradient(to top right, ${gradient.rgbaMain}, ${gradient.rgbaSec})`;
  return elem;
}
/**
 *
 *
 * @export
 * @param {HTMLElement} sol
 * @param {[{rgbaMain: string, rgbaSec: string, radius: number, speed: number}]} conf
 * @return {any[]}
 */
export default function (sol, conf) {
  const system =
    conf.isArray() && sol
      ? {
          system: conf.map(({ rgbaMain, rgbaSec, radius, speed }) => {
            const id = Math.random().toString(36).substring(7);
            let element = createHTMlElement(id);
            element = setPlanetColor(element, { rgbaMain, rgbaSec });
            trajectory({ radius, speed, planet: element });
            return element;
          }),
          err: null,
        }
      : { system: [], err: new Error("Invalid config param") };

  return system;
}
