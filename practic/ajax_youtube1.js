// AJAX - учимся посылать GET, POST запросы
// https://www.youtube.com/watch?v=ZgH68Wg8M68

// GET Request
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this.responseText)
    }
}

xhttp.open('GET', 'http://getpost.itgid.info/index2.php', true);
xhttp.send();

function myFunction(data) {
    console.log(data);
}

console.log(xhttp)


// POST Request
let xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myFunction2(this.responseText)
    }
}

xhttp2.open('POST', 'http://getpost.itgid.info/index2.php', true);

xhttp2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
xhttp2.send()

function myFunction2(data) {
    console.log(data);
}