let ele=document.getElementById('heading').parentNode
        let node =document.getElementById('heading').childNodes[0]
        let node1 =document.getElementById('body').childNodes[0]
        let node2 =document.getElementById('heading').lastChild
        let node3 =document.getElementById('para').nextSibling
        console.log(node3)
        let newNode = document.createElement('div');
        document.body.appendChild(newNode);
        let textNode = document.createTextNode('Completed.......!!!!');
        newNode.appendChild(textNode);
        console.log(newNode)