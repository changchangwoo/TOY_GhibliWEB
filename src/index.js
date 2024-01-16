import App from "./App.js";
import Footer from "./components/Footer.js";
import Nav from "./components/Nav.js";

new App({ $target: document.getElementById("App") });
new Nav({ $target: document.getElementById("Nav") });
new Footer({ $target: document.getElementById("Footer") });
