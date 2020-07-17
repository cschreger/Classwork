const DomNodeCollection = require("./dom_node_collection.js")

window.$l = function (el) {
    if(el instanceof HTMLElement){
        const node = new DomNodeCollection([el]);
        return node;
    }else if(typeof el === 'string'){
        let nodeList = document.querySelectorAll(el);
        let nodeListArray = Array.from(nodeList);
        const domNode = new DomNodeCollection(nodeListArray);
        return domNode;
    }
}
