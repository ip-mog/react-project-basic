import _ from "lodash";
import "./style.css";
import Icon from "./icon.png";

function component() {
  var element = document.createElement("div");

  // lodash from npm
  element.innerHTML = _.join(["Hello", "Dima Mogilevi lalallalalala"], " ");
  element.classList.add("hello");
  const obj = { lera: "lala", lera1: "bee" };
  console.log("some", { ...obj });
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
