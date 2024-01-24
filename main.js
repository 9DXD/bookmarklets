javascript:(() => {
  /* This is an auto-updating script for menu.js */
  const url = "https://raw.githubusercontent.com/9DXD/bookmarklets/main/menu.js";
  fetch(url)
    .then(response => response.text())
    .then(text => eval(text))
    /* .catch(error => console.error(error)); */
})();
