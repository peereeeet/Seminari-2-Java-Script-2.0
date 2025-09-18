// ------------------------------
// Exercici: Filtrar estudiants de "Web Development"
// ------------------------------

// 1. Definim l'array d'estudiants
const students = [
  { name: "Pere", lastname: "Garces", age: 24, course: "Marketing" },
  { name: "Andrea", lastname: "Zapata", age: 22, course: "Web Development" },
  { name: "Pedro", lastname: "Rodriguez", age: 20, course: "Accounting" },
  { name: "Junjie", lastname: "Wang", age: 23, course: "Web Development" },
  { name: "Roc", lastname: "Meseguer", age: 20, course: "Financial Management" },
];

// 2. Funció funcional amb filter()
function getWebDevStudents(students) {
  return students.filter(student => student.course === "Web Development");
}

// 3. Obtenim els estudiants filtrats
const webDevStudents = getWebDevStudents(students);

// 4. Mostrem per consola
console.log("Estudiants de Web Development:");
console.log(webDevStudents);

// 5. També mostrem a la pàgina HTML
const listElement = document.getElementById("student-list");

webDevStudents.forEach(student => {
  const li = document.createElement("li");
  li.textContent = `${student.name} ${student.lastname} (${student.age} anys)`;
  listElement.appendChild(li);
});
