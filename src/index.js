import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import * as css from './style.scss';

const reducer = (state={}, action) => {
  switch (action.type) {
    case 'add':
      return {
        ...state,
        text: action.text,
      };
    default:
      return state;
  }
}; 

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<button className={css.hello} onClick={() => store.dispatch({type: 'add', text: '123'})}>hello everyone</button>, document.getElementById('root'));

// import _ from "lodash";
// 
// import Icon from "./icon.png";

// function component() {
//   var element = document.createElement("div");

//   // lodash from npm
//   element.innerHTML = _.join(["Hello", "Dima Mogilevi lalallalalala"], " ");
//   element.classList.add("hello");
//   const obj = { lera: "lala", lera1: "bee" };
//   console.log("some", { ...obj });
//   var myIcon = new Image();
//   myIcon.src = Icon;
//   element.appendChild(myIcon);

//   return element;
// }

// document.body.appendChild(component());
