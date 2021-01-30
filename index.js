import confFactory from "./js/confFactory";
import planetFactory from "./js/planetFactory";

(() => {
  console.info("Usless radio solar system, v.0.1");
  const solar = document.querySelector(".sol");
  const config = confFactory(5);
  const {
    system: { htmlElem, interval },
    err,
  } = planetFactory(solar, config);
  if (err) {
    console.error(err);
  }
})();
