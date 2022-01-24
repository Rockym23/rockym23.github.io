var language = 'es';

var biography = `Mi nombre es Rodrigo Martínez Heredia soy Ingeniero en Sistemas Computacionales, actualmente trabajo en Dell Technologies como programador en el área de cyberseguridad. Soy de México, Acutalmente vivo en Guadalajara, pero debido a la pandemia estoy pasando tiempo en la Ciudad de México donde mi familia reside aqui. 
Uno de mis pasatiempos favoritos son los videojuegos, donde últimamente me querido involucrar en el lado del desarrollo, puedes ver en mi página de Google sites algunos proyectos que he estado haciendo, el link se encuentra arriba.
Complementando mi pasatiempo estoy en proceso de creación de Pixel Art, puedes checar mis primeras imágenes en la liga de twitter que se encuentra arriba.
Otros de mis pasatiempos son la natación, y el fútbol americano.
`;

var bodyIdArr = ['main__body_light' , 'main__body_dark' ];

window.onload = function(){

    var bio = document.getElementById('bio');
    bio.innerText = biography;

    var bodyId = document.getElementById('bodyId');
    var num = Math.floor(Math.random() * 10);
    console.log("Numero random " + num);
    bodyId.className = bodyIdArr[num%2];

    console.log(bodyId.className);

}



