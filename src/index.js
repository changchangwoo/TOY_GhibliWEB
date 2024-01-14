import App from "./App.js";
import Footer from "./Components/Footer.js";
import Nav from "./Components/Nav.js";

new App({ $target: document.getElementById("App") });
new Nav({ $target: document.getElementById("Nav") });
new Footer({ $target: document.getElementById("Footer") });
