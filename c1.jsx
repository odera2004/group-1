var React = require("react");  

// Create the createElement function  
function createElement(content, tag = 'div', props = {}) {  
  // Return the React element using createElement, with defaults handled  
  return React.createElement(tag, props, content);  
}  

// Create the createUnorderedList function  
function createUnorderedList(list) {   
  // Map through list and create li elements  
  const children = list.map((item, index) =>   
    React.createElement('li', { key: index }, item)  
  );  

  // Return the ul element containing the li children  
  return React.createElement('ul', null, children);  
}  

// Example usage:  
const element1 = createElement('Hello World'); // <div>Hello World</div>  
const element2 = createUnorderedList(['apples', 'oranges', 'bananas']);  
// <ul>  
//   <li key="0">apples</li>  
//   <li key="1">oranges</li>  
//   <li key="2">bananas</li>  
// </ul>