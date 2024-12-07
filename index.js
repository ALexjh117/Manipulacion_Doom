document.addEventListener('DOMContentLoaded', function () {
    // Crear el encabezado
    const header = document.createElement('header');
    const ul = document.createElement('ul');
    ul.classList.add('estilosha');
    
    
    const imgPerfil = document.createElement('img');
    imgPerfil.src = 'img/perfil.jpg';
    imgPerfil.alt = '';
    imgPerfil.classList.add('img');
    
    const h1 = document.createElement('h1');
    h1.classList.add('pt');
    h1.textContent = 'Alex Jhoan Chaguendo';
    
    const liInicio = document.createElement('li');
    liInicio.textContent = 'Inicio';
    
    const liProyecto = document.createElement('li');
    const aProyecto = document.createElement('a');
    aProyecto.href = 'juegos.html';
    aProyecto.textContent = 'Mi Proyecto';
    liProyecto.appendChild(aProyecto);
    
    const liSobreMi = document.createElement('li');
    const aSobreMi = document.createElement('a');
    aSobreMi.href = 'sobremi.html';
    aSobreMi.textContent = 'Sobre mí';
    liSobreMi.appendChild(aSobreMi);
    
    const liPlaylist = document.createElement('li');
    const aPlaylist = document.createElement('a');
    aPlaylist.href = 'playlist.html';
    aPlaylist.textContent = 'Mi playlist';
    liPlaylist.appendChild(aPlaylist);
    
    const liJhoanAG = document.createElement('li');
    const aJhoanAG = document.createElement('a');
    aJhoanAG.href = 'juegos.html';
    aJhoanAG.textContent = 'Jhoan-AG';
    liJhoanAG.appendChild(aJhoanAG);
    
    ul.appendChild(imgPerfil);
    ul.appendChild(h1);
    ul.appendChild(liInicio);
    ul.appendChild(liProyecto);
    ul.appendChild(liSobreMi);
    ul.appendChild(liPlaylist);
    ul.appendChild(liJhoanAG);
    header.appendChild(ul);

    // Crear el main
    const main = document.createElement('main');
    
    const imgMain = document.createElement('img');
    imgMain.src = 'img/image.png';
    imgMain.alt = '';
    imgMain.classList.add('img', 'ajustar', 'img2');
    imgMain.height = '300';
    imgMain.width = '400';
    
    const section = document.createElement('section');
    section.classList.add('presentacion');
    
    const h2 = document.createElement('h2');
    h2.classList.add('letras');
    h2.textContent = 'Desarrollador Web y Diseñador Gráfico';
    
    const p = document.createElement('p');
    p.classList.add('letras');
    p.textContent = 'Desarrollador Frontend y Backend con experiencia en crear aplicaciones web dinámicas y escalables.';
    
    const buttonExplorar = document.createElement('a');
    buttonExplorar.href = 'juegos.html';
    buttonExplorar.classList.add('button');
    buttonExplorar.textContent = 'Explorar';
    
    const buttonSobreMi = document.createElement('a');
    buttonSobreMi.href = 'sobremi.html';
    buttonSobreMi.classList.add('button');
    buttonSobreMi.textContent = 'Sobre mí';
    
    section.appendChild(h2);
    section.appendChild(p);
    main.appendChild(imgMain);
    main.appendChild(section);
    main.appendChild(buttonExplorar);
    main.appendChild(buttonSobreMi);
    
    // Crear el footer
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    
    const socialIcons = document.createElement('div');
    socialIcons.classList.add('social-icons');
    
    const h4 = document.createElement('h4');
    h4.textContent = 'Contáctame aquí';
    
    const aGitHub = document.createElement('a');
    aGitHub.href = 'https://github.com/tuusuario';
    aGitHub.target = '_blank';
    aGitHub.classList.add('social-icon');
    const imgGitHub = document.createElement('img');
    imgGitHub.src = 'img/git.jpg';
    imgGitHub.alt = 'GitHub';
    imgGitHub.classList.add('social-icon-img');
    aGitHub.appendChild(imgGitHub);
    
    const aFacebook = document.createElement('a');
    aFacebook.href = 'https://www.facebook.com/tuusuario';
    aFacebook.target = '_blank';
    aFacebook.classList.add('social-icon');
    const imgFacebook = document.createElement('img');
    imgFacebook.src = 'img/f.webp';
    imgFacebook.alt = 'Facebook';
    imgFacebook.classList.add('social-icon-img');
    aFacebook.appendChild(imgFacebook);
    
    const aInstagram = document.createElement('a');
    aInstagram.href = 'https://www.instagram.com/tuusuario';
    aInstagram.target = '_blank';
    aInstagram.classList.add('social-icon');
    const imgInstagram = document.createElement('img');
    imgInstagram.src = 'img/instagram.webp';
    imgInstagram.alt = 'Instagram';
    imgInstagram.classList.add('social-icon-img');
    aInstagram.appendChild(imgInstagram);
    
    socialIcons.appendChild(h4);
    socialIcons.appendChild(aGitHub);
    socialIcons.appendChild(aFacebook);
    socialIcons.appendChild(aInstagram);
    
    footer.appendChild(socialIcons);
    footer.innerHTML += `2024 correo electronico Alexchaguendo01@gmail.com.</p>`;
    
    // Agregar todos los elementos al DOM
    document.body.appendChild(header);
    document.body.appendChild(main);
    document.body.appendChild(footer);
    
    // Cambiar el título de la página
    document.title = "Document";
    
    // Estilos para el contenedor principal
let estilosha = document.querySelector('.estilosha');
estilosha.style.display = 'flex';
estilosha.style.border = 'solid 4px black';
estilosha.style.justifyContent = 'space-between';
estilosha.style.height = '100px';
estilosha.style.background = 'linear-gradient(45deg, #111, #333)';
estilosha.style.color = 'white';
estilosha.style.padding = '10px';
estilosha.style.listStyleType = 'none';
estilosha.style.margin = '0';
estilosha.style.alignItems = 'center';

// Estilo para las imágenes dentro de .estilosha
let img = document.querySelectorAll('.estilosha img');
img.forEach(i => { //funcion oara recorrer cada elemento del arreglo , represnetamo por i cada una de las imagenes
    i.style.width = '50px';
    i.style.height = '50px';
    i.style.borderRadius = '50%';
});

// Estilo para los elementos .pt
let pt = document.querySelectorAll('.pt');
pt.forEach(p => {
    p.style.margin = '0';
    p.style.padding = '0';
    p.style.fontSize = '1.5em';
});

// Estilo para las listas dentro de .estilosha
let liItems = document.querySelectorAll('.estilosha li');
liItems.forEach(item => {
    item.style.margin = '0 10px';
    item.style.padding = '12px 30px';
    item.style.background = 'linear-gradient(45deg, #222, #555)';
    item.style.border = '2px solid #444';
    item.style.borderRadius = '30px';
    item.style.fontSize = '1.2em';
    item.style.fontWeight = '600';
    item.style.textTransform = 'uppercase';
    item.style.color = 'white';
    item.style.cursor = 'pointer';
    item.style.transition = 'all 0.3s ease';
});

// Estilo de hover para los li
liItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.background = 'linear-gradient(45deg, #333, #666)';
        item.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
        item.style.transform = 'scale(1.1)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.background = 'linear-gradient(45deg, #222, #555)';
        item.style.boxShadow = 'none';
        item.style.transform = 'scale(1)';
    });
    item.addEventListener('mousedown', () => {
        item.style.background = 'linear-gradient(45deg, #444, #777)';
    });
    item.addEventListener('mouseup', () => {
        item.style.background = 'linear-gradient(45deg, #333, #666)';
    });
});

// Estilo para el main
main.style.backgroundImage = 'url("img/gho.webp")';
main.style.backgroundRepeat = 'no-repeat';
main.style.backgroundSize = 'cover';
main.style.height = '100vh';

// Estilos para los botones
let button = document.querySelectorAll('.button');
button.forEach(b => { // el foreach , es un metodo para recorrer una lista de bottones, el b represenata cada uno de los bottones
    b.style.backgroundColor = 'white';
    b.style.color = '#333';
    b.style.padding = '12px 30px';
    b.style.border = '2px solid #fff';
    b.style.borderRadius = '50px';
    b.style.fontSize = '1.2em';
    b.style.fontWeight = 'bold';
    b.style.textTransform = 'uppercase';
    b.style.textDecoration = 'none';
    b.style.display = 'inline-block';
    b.style.cursor = 'pointer';
    b.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    b.style.transition = 'all 0.3s ease';
});

//estilo de  los botones
button.forEach(b => {
    b.addEventListener('mouseenter', () => {
        b.style.backgroundColor = '#333';
        b.style.color = 'white';
        b.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
        b.style.transform = 'translateY(-5px)';
    });
    b.addEventListener('mouseleave', () => {
        b.style.backgroundColor = 'white';
        b.style.color = '#333';
        b.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        b.style.transform = 'translateY(0)';
    });
    b.addEventListener('mousedown', () => {
        b.style.backgroundColor = '#555';
        b.style.transform = 'translateY(0)';
        b.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    });
    b.addEventListener('mouseup', () => {
        b.style.backgroundColor = '#333';
    });
});

// Estilo para el footer

footer.style.background = 'linear-gradient(45deg, #111, #333)';
footer.style.color = 'white';
footer.style.padding = '20px 0';
footer.style.textAlign = 'center';
footer.style.boxShadow = '0 -4px 10px rgba(0, 0, 0, 0.3)';

// Estilos para los iconos sociales

socialIcons.style.display = 'flex';
socialIcons.style.justifyContent = 'center';
socialIcons.style.alignItems = 'center';
socialIcons.style.gap = '20px';

// Estilos para los iconos de las redes sociales
let socialIconImages = document.querySelectorAll('.social-icon-img');
socialIconImages.forEach(icon => {
    icon.style.width = '50px';
    icon.style.height = '50px';
    icon.style.borderRadius = '50%';
    icon.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
});

// Efecto hover en los iconos, cambios visuales cuando el cursor se mueve sobre un elemento
socialIconImages.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.2)';
        icon.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.5)';
    });
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
        icon.style.boxShadow = 'none';
    });
});

// Estilo para el texto del footer
let footerText = footer.querySelector('p');
footerText.style.fontSize = '1em';
footerText.style.marginTop = '10px';
footerText.style.color = '#bbb';

// Estilo para el main
main.style.backgroundImage = 'url("img/gho.webp")';
main.style.backgroundRepeat = 'no-repeat';
main.style.backgroundSize = 'cover';
main.style.height = '100vh';
main.style.color = 'white';  
main.style.display = 'flex';  
main.style.flexDirection = 'column';
main.style.alignItems = 'center'; 
main.style.justifyContent = 'center'; 
//  se aplica  estilos por cascada
main.style.backgroundImage = 'url("img/gho.webp")';
main.style.backgroundRepeat = 'no-repeat';
main.style.backgroundSize = 'cover';
main.style.height = '100vh';
main.style.color = 'white';  
main.style.display = 'flex';  
main.style.flexDirection = 'column';
main.style.alignItems = 'center'; 
main.style.justifyContent = 'center'; 


let buttonContainer = document.createElement('div');  
buttonContainer.style.display = 'flex';  
buttonContainer.style.justifyContent = 'space-between';  
buttonContainer.style.gap = '20px';  
buttonExplorar.href = 'juegos.html';
buttonExplorar.classList.add('button');
buttonExplorar.textContent = 'Explorar'
buttonSobreMi.href = 'sobremi.html'
buttonSobreMi.classList.add('button')
buttonSobreMi.textContent = 'Sobre mí'
buttonContainer.appendChild(buttonExplorar)
buttonContainer.appendChild(buttonSobreMi)
main.appendChild(buttonContainer);
footer.style.height ='autovh'
  
});
