// ===============
// YIKES!!!!!!!!!!!
// ===============
// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)
// setTimeout(() => {
//     document.body.style.background = 'red';
//     setTimeout(() => {
//         document.body.style.background = 'orange';
//         setTimeout(() => {
//             document.body.style.background = 'yellow';
//             setTimeout(() => {
//                 document.body.style.background = 'blue';
//                 setTimeout(() => {
//                     document.body.style.background = 'purple';
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);

const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}

delayedColorChange('olive', 3000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('blue', 1000, () => {
                delayedColorChange('red', 1000, () => {
                })
            })
        })
    })
});

// pseudo-code:

searchMoviesAPI('amadeus', () => {
    saveToMyDB(movies, () => {
        // if it works, run this:
    }, () => {
        // if it doesn't work run this
    })
}, () => {
    // if API is down, or request failed
})

// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }

// // STILL A LOT OF NESTING!!!
// delayedColorChange('red', 1000, () => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('blue', 1000, () => {

//                 })
//             })
//         })
//     })
// });


// searchMoviesAPI('amadeus', () => {
//     saveToMyDB(movies, () => {
//         //if it works, run this:
//     }, () => {
//         //if it doesn't work, run this:
//     })
// }, () => {
//     //if API is down, or request failed
// })




