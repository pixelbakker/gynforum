import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'


async function loadPartial(id, url) {
  const response = await fetch(url);
  const text = await response.text();
  document.getElementById(id).innerHTML = text;
}

loadPartial("header", "/gynforum/partials/header.html");
loadPartial("footer", "/gynforum/partials/footer.html");
