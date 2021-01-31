import confFactory from "./js/confFactory";
import planetFactory from "./js/planetFactory";

(() => {
  console.info("Usless radio solar system, v.0.1");

  const solar = document.querySelector(".sol");
  const config = confFactory(5);
  document.addEventListener("scroll", (e) => {
    const elem = e.target;
    if (
      elem.documentElement.scrollHeight - elem.documentElement.scrollTop <=
      elem.documentElement.clientHeight
    ) {
      solar.classList.add("sol-scrolled");
    } else {
      solar.classList.remove("sol-scrolled");
    }
  });
  const {
    system: { htmlElem, interval },
    err,
  } = planetFactory(solar, config);
  if (err) {
    console.error(err);
  }
})();
