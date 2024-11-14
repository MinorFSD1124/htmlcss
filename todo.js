// Tipo de datos

const nombre = "Jordi";
var likes = 0;
const isAdmin = true;

var ages = [16, 24, 22, 15, 17, 19, 18];
var macedonia = [16, "Jordi", true, [45, 54]];

person1 = {
  name: "Jordi",
  likes: 0,
  isVIP: false,
  birthyear: 2004,
};

person2 = {
  name: "Marta",
  likes: 0,
  isVIP: true,
  birthyear: 2008,
};

person3 = {
  name: "Victor",
  likes: 0,
  isVIP: true,
  birthyear: 2004,
};

people = [person1, person2, person3];

const car1 = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
  year: 1969,
  detail: {
    motor: "V8",
    fuel: "Gasolina",
  },
};

const car2 = {
  brand: "Honda",
  model: "Civic",
  color: "blue",
  year: 2021,
  detail: {
    motor: "V6",
    fuel: "Diesel",
  },
};

cars = [car1, car2];

//Comparadores

// 5 > 3; //true
// 5 >= 3; //true
// 5 < 3; //false
// 5 <= 3; //false
// 5 == 3; //false
// 5 === 3; //false
// 5 != 3; //true
// 5 !== 3; //true

//Operadores

// 5 + 3; //8
// 5 - 3; //2
// 5 * 3; //15
// 5 / 3; //1.6666666666666667
// 5 % 3; //2

//Condicionales

if (person1.birthyear < person2.birthyear) {
  console.log("Si, es mayor");
} else {
  console.log("No, no es mayor");
}

//Bucles

for (car of cars) {
  console.log(
    "Vendo " +
      car.brand +
      " " +
      car.model +
      " de color " +
      car.color +
      " del año " +
      car.year +
      " con motor " +
      car.detail.motor +
      " " +
      car.detail.fuel
  );
}

// Aplicación en listado de tareas

const tasks = [
  {
    description: "Preparar la clase de Nuclio Full Stack Developer",
    deadline: "25JUN",
    status: "IN PROGRESS",
  },
  {
    description:
      "Devolver libros a la biblioteca y recoger nuevos libros sobre ciencia ficción",
    deadline: "25JUN",
    status: "TO DO",
  },
  {
    description:
      "Preparar las maletas y contratar el seguro para el viaje a Marte",
    deadline: "25JUN",
    status: "DONE",
  },
  {
    description: "Preparar la clase de Nuclio Full Stack Developer",
    deadline: "25JUN",
    status: "IN PROGRESS",
  },
];

for (task of tasks) {
  console.log(
    "<p>" +
      task.description +
      "</p>" +
      "<p><span class=''>" +
      task.status +
      "</span> Fecha límite. " +
      task.deadline +
      "</p>" +
      '<p><a href="">EDITAR</a><a href="">MARCAR COMO FINALIZADA</a><a href="" class="delete">ELIMINAR</a></p>'
  );
}

//Mostrar en consola

console.log(nombre, likes, isAdmin, ages);
