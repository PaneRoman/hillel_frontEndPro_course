const data = {
    fish: {
        fish1: {
            
        },
        fish2: {

        }
    },
    
    tree: {
        bigTree: {
            dyb: {

            },
            secuoua: {

            }
        },
        middleTree: {

        },
        smallTree: {
            mySmallTree: {

            }
        }
    },

    drink: {
        cola: {

        },
        sprite: {
            big: {

            },
            small: {
                
            }
        }
    }
}

// console.log(data)

// function recursionRenderTree(tree) {
//     for (const key in tree) {
//         if (Object.keys(tree[key]).length == 0) {
//            console.log(key) 
//         } else {
//             recursionRenderTree(tree[key]);
//             console.log(key)
//         }
//         // console.log(Object.keys(tree[key]));
//     }
// }
//fish1, fish2, fish, dyb, secuoua, bigTree, middleTree, mySmallTree, smallTree, tree



function recursionRenderTree(tree, resRef) {
    const objectKeys = Object.keys(tree);

    for (let i = 0; i <= objectKeys.length; i++) {
        if (tree[objectKeys[i]]) {
            const liRef = document.createElement('li');
            liRef.innerText = objectKeys[i]; 
            resRef.appendChild(liRef);  
            
            
            if (Object.keys(tree[objectKeys[i]]).length) {
                const ulRef = document.createElement('ul');
                liRef.appendChild(ulRef);

                console.log(objectKeys[i], tree[objectKeys[i]]);
                recursionRenderTree(tree[objectKeys[i]], ulRef);
            }
            
        }
        
    }
    
}
// //fish, fish1, fish2, tree, bigTree, dyb, secuoua, middleTree, smallTree, mySmallTree

const ulRef = document.createElement('ul');
document.body.appendChild(ulRef);

recursionRenderTree(data, ulRef);


// Validation

const inputTest = document.createElement('input');
inputTest.addEventListener('input', validHandler);
// inputTest.addEventListener('keydown', validHandler);

document.body.appendChild(inputTest);


// //'input' Listner
function validHandler(event) {
    console.log(event);
    if (isNaN(+event.data)) {
        console.log('true', event.data);
    } else {
       event.preventDefault();
       console.log('false', event.data);
    }
} // preventDefault() ne uspevaet otrabativat` tak kak nugno. V input 
//// yspevaet zapisat`sa zna4enie


// //'keydown' Listner
// function validHandler(event) {
//     console.log(event);
//     if (isNaN(+event.key)) {
//         console.log('true', event.key);
//     } else {
//        event.preventDefault();
//        console.log('false', event.key);
//     }
// } // preventDefault() uspevaet otrabativat` i otmenit` povedenie, i
// // popadanie zha4enija v input


