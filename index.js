import confFactory from "./js/confFactory";
import planetFactory from "./js/planetFactory";

(() => {
  console.log("start");
  const solar = document.querySelector(".sol");
  const config = confFactory(Math.random() * (2 - 6) + 2);
  const {
    system: { htmlElem, interval },
    err,
  } = planetFactory(solar, config);
  if (err) {
    console.error(err);
  }
})();
