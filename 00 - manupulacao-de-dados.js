const URL = 'https://jsonplaceholder.typicode.com/users'
	
async function manipulacao () {
	const resposta = await fetch(URL)
  const dados = await resposta.json()
  const resp = dados.map ((obj) => {
  	return {suite: obj.address.suite}
  })
  const unico = dados.splice(6,1)
  console.log(unico)
  const filtro = unico.map ((obj) => {
		return {lat: obj.address.geo.lat}
	})
  console.log(filtro)
}

manipulacao()