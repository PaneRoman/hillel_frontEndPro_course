const tree = {
    name: 'html',
    child: [{
        name: 'head',
        child: [{
            name: 'meta',
            // child: []
        }, {
            name: 'meta2',
            // child: []
        }, {
            name: 'meta3',
            // child: []
        }]
    }, {
        name: 'body',
        child: [{
            name: 'div',
            child: [{
               name: 'p',
            //    child: [], 
            }]
        }, {
            name: 'div',
            child: [{
               name: 'p',
            //    child: [],
            }, {
                name: 'p',
                // child: [],
            }] 
        }]
    }]
}

function recurs(node) {
    if (node.child) {  // if(node.child.length) >>> child:[]
        for (let item of node.child) {
           recurs(item); 
        }
    }
    console.log(node.name);
}

recurs(tree);



//Fibanachi Numbers
//1 1 2 3 5 8 13....

function fib(numb) {
     
}

fib(13)
