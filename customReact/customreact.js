function CustomRender(reactElement,container){
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.childern;
    domElement.setAttribute('href',reactElement.props.href);
    domElement.setAttribute('target',reactElement.props.target);

    container.appendChild(domElement);
    */

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.childern;
    for (const prop in reactElement.props){
        if(prop === "childern")continue;
        else{
            domElement.setAttribute(prop,reactElement.props[prop]);
        }
    }
    
    container.appendChild(domElement);

}


const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    childern: 'Click me to visit again'
}


const mainContainer = document.querySelector('#root');


CustomRender(reactElement,mainContainer);

