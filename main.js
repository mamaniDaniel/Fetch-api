document.getElementById('txtBtn').addEventListener('click', cargarTxt);
document.getElementById('jsonBtn').addEventListener('click', cargarJson);
document.getElementById('apiBtn').addEventListener('click', cargarApi);


function cargarTxt() {

    fetch('datos.txt')
        .then(function(res) {
            return res.text();
        })
        .then(function(data) {
            document.getElementById('resultado').innerHTML = data;
        })
        .catch(function(e) {
            console.log(e);
        });
}

function cargarJson() {
    fetch('empleados.json')
        .then(function(res) {
            return res.json();
        })
        .then(function(empleados) {
            let personas = "";
            empleados.forEach(element => {
                personas += `<li> nombre: ${element.nombre}, puesto: ${element.puesto} </li>`;
            });
            document.getElementById('resultado').innerHTML = personas;
        })
        .catch(function(e) {
            console.log(e);
        });
}

function cargarApi() {
    fetch('https://picsum.photos/v2/list')
        .then(function(res) {
            return res.json();
        })
        .then(function(imagenes) {
            let html = "";
            for (let i = 0; i < 20; i++) {
                html += `<li> Url: <a href="${imagenes[i].url}" target="_blank">link foto</a>,  Autor: ${imagenes[i].author}</li>`;
            }
            document.getElementById('resultado').innerHTML = html;
        });
}