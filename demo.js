// Obtener un usuario por su ID
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(res => res.json())
  .then(user => {
    console.log("Usuario seleccionado:");
    console.log({
      id: user.id,
      nombre: user.name,
      usuario: user.username,
      ciudad: user.address.city
    });

    // Ahora pedimos los posts de ese usuario
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
  })
  .then(res => res.json())
  .then(posts => {
    console.log(`\nPosts del usuario (${posts.length} en total):`);
    console.table(posts.slice(0, 3)); // mostramos solo 3 en tabla

    // 1) map → obtener los títulos
    const titulos = posts.map(p => p.title);

    // 2) filter → quedarnos con los títulos que tengan más de 4 palabras
    const titulosLargos = titulos.filter(t => t.split(" ").length > 4);

    // 3) reduce → contar cuántas palabras en total hay en TODOS los títulos
    const totalPalabras = titulos.reduce((acum, t) => acum + t.split(" ").length, 0);

    // Resultados
    console.log("\n--- Resultados ---");
    console.log("Títulos:", titulos);
    console.log("Títulos largos:", titulosLargos);
    console.log("Total de palabras en títulos:", totalPalabras);
  })
  .catch(err => console.error("Error en la petición:", err));
