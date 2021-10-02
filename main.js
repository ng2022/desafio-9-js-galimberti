let fichaLibro = document.createElement('div');


class libro {
    constructor(titulo, autor, isbn, paginas, sinopsis, numeroProducto) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.paginas = paginas;
        this.sinopsis = sinopsis;
        this.numeroProducto = numeroProducto;
        this.resumen = function() {
            fichaLibro.innerHTML = `<h1>${this.titulo}</h1>
                                    <h2>${this.autor}</h2>
                                    <h3>${this.paginas} páginas</h3>
                                    <p>${this.sinopsis}</p>`;
            document.body.appendChild(fichaLibro);
            }
    }
}

const libro1 = new libro('Alicia en el pais de las maravillas', 'Lewis Carrol', 'ISBN-139788489163430', 122, 'Alicia está aburrida, mientras su hermana lee un libro sin ilustraciones. ¿Cómo alguien puede leer algo tan poco entretenido? De repente, un conejo blanco, vestido con pantalón y saco, que mira desesperado su reloj, anuncia preocupado que llegará tarde a alguna parte. Alicia no se puede resistir y sigue al conejo hasta su madriguera, una especie de túnel que conduce a la niña a un universo asombroso, lleno de juegos lógicos y graciosos enredos del lenguaje. En ese mundo, Alicia vivirá experiencias increíbles con otros personajes tan divertidos como el conejo: la Liebre de Marzo, el Sombrerero, el Lirón...', 1);
const libro2 = new libro('Esto es agua', 'David Foster Wallace', 'ISBN-102953982716235', 144, 'Había una vez dos peces jóvenes que iban nadando y se encontraron por casualidad con un pez mayor que nadaba en dirección contraria; el pez mayor les saludó con la cabeza y les dijo: "Buenos días, chicos. ¿Cómo está el agua?"', 2);
const libro3 = new libro('El Príncipe', 'Niccolò Machiavelli', 'ISBN-10395678289439', 203, '"El príncipe" (en el original en italiano, "Il principe") es un tratado de teoría política escrito por Nicolás Maquiavelo en 1513, mientras este se encontraba encarcelado en San Casciano por la acusación de haber conspirado en contra de los Médici. El libro fue publicado en 1531 y dedicado a Lorenzo II de Médici, duque de Urbino, en respuesta a dicha acusación, a modo de regalo. Tiene ciertas inspiraciones en César Borgia. Se trata de la obra de mayor renombre de este autor, aquella por la cual se acuñaron el sustantivo "maquiavelismo" y el adjetivo "maquiavélico".', 3);

// listaLibros();

// Botones
let botonUno = document.getElementById('btnUno');
botonUno.onclick = () => {
    libro1.resumen();
    console.log('Consultado Alicia en el pais de las Maravillas');
}

let botonDos = document.getElementById('btnDos');
botonDos.onclick = () => {
    libro2.resumen();
    console.log('Consultado Esto es Agua');
}

let botonTres = document.getElementById('btnTres');
botonTres.onclick = () => {
    libro3.resumen();
    console.log('Consultado El Príncipe');
}










// Disponibilidad de los libros
const libreria = [
    {libro1, disponibilidad:'Disponible'},
    {libro2, disponibilidad:'Vendido'},
    {libro3, disponibilidad:'Disponible'}];
const librosDisponibles = libreria.filter((l) => l.disponibilidad==='Disponible');


console.log(librosDisponibles);

