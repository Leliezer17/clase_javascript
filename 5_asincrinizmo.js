const Mipromesa = new Promise((resolve, reject) => {
setTimeout (()=> {
    resolve ({id:1, name: 'luis'})
}, 6000)
}) 

const mostrardatos = async () => {
    const response = await Mipromesa.then(res => res)
    console.log(response)
}
mostrardatos()