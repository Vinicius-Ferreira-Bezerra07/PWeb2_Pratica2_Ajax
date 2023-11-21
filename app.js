// Link da API do Git https://api.github.com/users/a

// let user = 
// const getProfile = () => {
    const profile = fetch("https://api.github.com/users/joseolinda")
    console.log(1);
    const li = document.createElement('li')
    
    profile
        .then(resposta => resposta.json())
        .then(userGit => {
            console.log(userGit);
            console.log(2);
            const { avatar_url:avatar_urlGit, login:loginGit, followers_url:followers_urlGit, gists_url:gists_urlGit} = userGit
            
            console.log(avatar_urlGit);
            console.log(loginGit);
            console.log(followers_urlGit);
            console.log(gists_urlGit);

            const avatar = document.createElement('img')
            avatar.scr = avatar_urlGit
            li.appendChild(avatar)
        })
    
    document.querySelector('#avatar').appendChild(li)
// }

// const btnBuscar = document.querySelector('#buscar-github')
// btnBuscar.addEventListener('click', getProfile)