class DOMNodeCollection{
    constructor(htmlElements){
        this.htmlElements = htmlElements;
    }
    
    html(){
        if(arguments.length === 1){
            this.htmlElements.forEach(el => {
                el.innerHTML = arguments;
            })
        }else{
            return this.htmlElements[0].innerHTML;
        }
    };
    
    empty(){
        this.html('');
    };

    append(args){
        //args = $l(args);

        //args.htmlElements.forEach(el => {
            //debugger
            //let outerHTML = el.outerHTML;
            for (let i = 0; i < this.htmlElements.length; i++) {
                //debugger
                let currentElement = this.htmlElements[i];
                currentElement.append(args.cloneNode(true));
                //currentElement.innerHTML += outerHTML;
            }

        //});
    }

    attr() {
        const attributeName = arguments[0];
        const attributeValue = arguments[1];

        if(attributeName && attributeValue){
            this.htmlElements.forEach(el=>{
                el.setAttribute(attributeName, attributeValue);
            })
        }else if(attributeName && !attributeValue){
            return this.htmlElements[0].getAttribute(attributeName);
        }    
    }

    addClass(classList){
        classList = classList.split(' ');
        this.htmlElements.forEach(el => {
            el.classList.add(...classList);
        });
    }

    removeClass(classList){
        classList = classList.split(' ');
        this.htmlElements.forEach(el => {
            el.classList.remove(...classList);
        });
    }
    
    children() {
        let childrenArray = [];

        this.htmlElements.forEach(el => {
            let childrenEl = el.children;
            for (let i = 0; i < childrenEl.length; i++){
                childrenArray.push(el.children[i])
            }
        });
        return new DOMNodeCollection(childrenArray);
    }

    parent(){
        let parentArray =  [];
        this.htmlElements.forEach(el => {
            let elParent = el.parentElement;
            parentArray.push(elParent);
        })
        return new DOMNodeCollection(parentArray);
    }

    find(target){
        let result = [];
        this.htmlElements.forEach(node => {
            let foundNodes = node.querySelectorAll(target);
            result.push(foundNodes);
        })
        return new DOMNodeCollection(result);
    }

    remove(){
        let htmlTag = document.getElementsByTagName("html");
        htmlTag[0].remove();
    }
    
    //we want to append the <div>'s HTML elements to the section element
    //iterate through the div's HTML elements & 
    // var d = document.getElementById("d");
    // console.log(d.outerHTML);
    
    // The string '<div id="d"><p>Content</p><p>Further Elaborated</p></div>'
    // is written to the console window
}

//     <div>
//         <ul>
//             <li>

//             </li>
//         </ul>
//     </div>

// <section>

// </section>
    


module.exports = DOMNodeCollection;