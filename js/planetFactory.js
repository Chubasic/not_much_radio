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
  elem.style.backgroundImage = `linear-gradient(to top right, rgba(${gradient.rgbaMain}), rgba(${gradient.rgbaSec}))`;
  return elem;
}
/**
 * Not a clear function
 *
 * @param {HTMLDivElement} sol
 * @param {HTMLDivElement} elem
 */
function appendToSol(sol, elem) {
  sol.appendChild(elem);
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
  const appendToSystem = appendToSol.bind(this, sol);
  const system =
    Array.isArray(conf) && sol
      ? {
          system: conf.reduce(
            (acc, { rgbaMain, rgbaSec, radius, speed, id, startPosition }) => {
              let element = createHTMlElement(id);
              element = setPlanetColor(element, { rgbaMain, rgbaSec });
              const interval = trajectory({
                radius,
                speed,
                planet: element,
                startPosition,
              });
              appendToSystem(element);
              acc.push({ htmlElem: element, interval });
              return acc;
            },
            []
          ),
          err: null,
        }
      : { system: [], err: new Error("Invalid config param") };

  return system;
}
