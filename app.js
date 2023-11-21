// Link da API do Git https://api.github.com/users/a

// let user = 
// const getProfile = () => {
const profile = fetch("https://api.github.com/users/Vinicius-Ferreira-Bezerra")
console.log(1);

profile
    .then(resposta => resposta.json())
    .then(userGit => {
        console.log(userGit);
        console.log(2);
        const { avatar_url, login, followers_url, gists_url, url } = userGit

        console.log(avatar_url);
        console.log(login);
        console.log(followers_url);
        console.log(gists_url);
        console.log(url);

        const imgAvatar = document.createElement('img')

        imgAvatar.src = avatar_url
        imgAvatar.target = "_top"
        console.log(imgAvatar);
        document.querySelector('.github-card user-card').appendChild(imgAvatar)
    })

// }

// const btnBuscar = document.querySelector('#buscar-github')
// btnBuscar.addEventListener('click', getProfile)