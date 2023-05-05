const arreglo = [
3,
1,
2,
4,

'luis',
'instituto alfa carabobo',
true,
false,
true,
['carabobo', 'delta amacuro', 'caracas', 'bolivar']
[ 'Venezuela', 'Colombia', 'Brasil', 'Paraguay', 'Chile']
{nombre: 'luis', edad: 4},
]

const retorno = arreglo.map(callback)

function callback (contador) {
console.log(contador)
}

console.log(retorno)
