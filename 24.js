// El abuelo 👴 dice que ve todos los árboles de navidad iguales... La abuela 👵, en cambio, piensa que no. Que todos los árboles de navidad son distintos...

// Vamos a hacer una función que nos diga si dos árboles de navidad son iguales. Para ello, vamos a comparar los árboles que ya creamos en el reto 22.

// Tenemos que ver si ambos árboles tienen la misma estructura y los mismos valores en todas las ramas. Aquí tienes unos ejemplos:

// const tree = {
//   value: 1,
//   left: { value: 2, left: null, right: null },
//   right: { value: 3, left: null, right: null }
// }

// checkIsSameTree(tree, tree) // true

// const tree2 = {
//   value: 1,
//   left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
//   right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
// }

// checkIsSameTree(tree, tree2) // false
// checkIsSameTree(tree2, tree2) // true

// El cuñado 🦹‍♂️, que se las sabe todas, me ha dicho que tenga cuidado porque el truco del JSON.stringify puede no funcionar... ya que los árboles pueden ser el mismo pero el orden de representación de las ramas izquierda y derecha puede ser inversa... 


export default function checkIsSameTree(treeA, treeB) {
  const compare = (treeA, treeB) => {
    const valueA = treeA?.value ?? 0;
    const leftA = treeA?.left;
    const rightA = treeA?.right;
    const valueB = treeB?.value ?? 0;
    const leftB = treeB?.left;
    const rightB = treeB?.right;
    if (valueA !== valueB) {
      return false;
    }
    if(leftA && leftB && !compare(leftA, leftB)) {
      return false;
    }
    if(rightA && rightB && !compare(rightA, rightB)) {
      return false;
    }
    return true;
  };

  return compare(treeA, treeB);
}