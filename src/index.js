import App from "./App.js";
import Footer from "./components/Footer.js";
import Nav from "./components/Nav.js";

new Nav({ $target: document.getElementById("Nav") });
new App({ $target: document.getElementById("App") });
new Footer({ $target: document.getElementById("Footer") });
