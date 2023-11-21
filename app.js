// Link da API do Git https://api.github.com/users/a

// let user = 
// const getProfile = () => {
    const profile = fetch("https://api.github.com/users/joseolinda")
    console.log(1);
    const ul = document.createElement('ul')
    
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

            const li = document.createElement('li')
            const avatar = document.createElement('img')
            avatar.scr =  avatar_urlGit
            

            li.appendChild(avatar)
            ul.appendChild(li)

            document.querySelector('.avatar').appendChild(ul)
        })
    
   let x = document.querySelector('.avatar').appendChild(li)
   x = `<a class="avatar" target="_top"><img src="${avatar_urlGit}" alt=""></a>`
// }

// const btnBuscar = document.querySelector('#buscar-github')
// btnBuscar.addEventListener('click', getProfile)