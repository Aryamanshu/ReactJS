function customRender(reactElement, container)
{
   /* const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute("href", reactElement.props.href)
    domElement.setAttribute("target", reactElement.props.target)
    container.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
        
    }
    container.appendChild(domElement)
}




// THIS IS HOW REACT EVALUATES WHEN WE GIVE AN ELEMENT TO IT.
const reactElement = {
    type: 'a',                      // koi bhi tags
    props: {                       //props means prperties and this is an object
        href: 'https://www.google.com',
        target: "_blank"
    },
    children: 'click me to visit Google'  // ye sb terminologies koi rocket cheez ni h ghabrana mt
}


const mainContainer = document.querySelector('#root')

// now we have too render (or add elements to the div)

customRender(reactElement, mainContainer)