import confFactory from "./js/confFactory";
import planetFactory from "./js/planetFactory";

(() => {
  const solar = document.querySelector(".sol");
  const config = confFactory(Math.random() * (2 - 4) + 2);
  const {
    system: { htmlElem, interval },
    err,
  } = planetFactory(solar, config);
  if (err) {
    console.error(err);
  }
})();
