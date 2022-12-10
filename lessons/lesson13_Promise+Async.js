const nameArr = ['Lena', 'Dima', 'Roma'];
const task = async() => {
    for (const item of nameArr) {
        const okay = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Ok');
            }, 5000)
        })

        console.log(okay, item);
    }
    console.log(nameArr)
}

task();
console.log(nameArr)
