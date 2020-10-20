import { createElement } from "../ui-framework";

export default function Navigation() {
  const navigation = createElement("nav", "", document.body);
  const navigationList = createElement("ul", "", navigation);
  const home = createElement("li", "", navigationList);
  createLink("Home", home);
  const bookmarks = createElement("li", "", navigationList);
  createLink("Bookmarks", bookmarks);
  const create = createElement("li", "", navigationList);
  createLink("Create", create);
  const profile = createElement("li", "", navigationList);
  createLink("Profile", profile);
}

function createLink(text, linkElement) {
  const navigationLink = document.createElement("a");
  const linkText = document.createTextNode(text);
  navigationLink.appendChild(linkText);
  navigationLink.href = "localhost:1234";
  linkElement.appendChild(navigationLink);
}
