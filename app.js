// Link da API do Git https://api.github.com/users/a

// let user = 
// const getProfile = () => {
    const profile = fetch("https://api.github.com/users/Vinicius-Ferreira-Bezerra")
    console.log(1);
    const login = document.createElement('user')
    const repos = document.createElement('repos')
    const followers = document.createElement('followers')
    const gists = document.createElement('gists')
    
    profile
        .then(resposta => resposta.json())
        .then(userGit => {
            console.log(userGit);
            console.log(2);
            
        })
// }

// const btnBuscar = document.querySelector('#buscar-github')
// btnBuscar.addEventListener('click', getProfile)