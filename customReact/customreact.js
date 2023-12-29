function customRender(reactElement,container){
/*    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children// react
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)*/

     const domElement = document.createElement(reactElement.type) //this is a better approach then the upper one
     domElement.innerHTML = reactElement.children
     for (const prop in reactElement.props) {
        if (prop === 'children') continue;//it was used to be done in older days
         {
            domElement.setAttribute(prop,reactElement.props[prop])
            

        }
        container.appendChild(domElement)
     }

}



const reactElement = {  //this is how react takes html code after compilation 
    type: 'a',  //this shows what type of element it is
    props: { //it shows what type of properties it has
        href: 'https://google.com',
        target: '_blank'
    },
    children : 'Click me to visit google'
}//we will get every element like this which is written in html in react js 


const mainContainer = document.getElementById('root') //selected the id root from the index.html file so that we can make changes in the file through js
 
customRender(reactElement, mainContainer)//this method renders the object of the html code