
const getUser = async (username) => {
    const resRepos = await fetch(`https://api.github.com/users/${username}/repos?sort=update`)
    const repositories = await resRepos.json()
    
    const myInfosGit = await fetch(`https://api.github.com/users/${username}`)
    const me = await myInfosGit.json()

    let reposFiltered = repositories.filter(rep => rep.full_name.indexOf('EduCintraBR/eduardocintra.dev') === -1)
    reposFiltered = reposFiltered.filter(rep => rep.full_name.indexOf('EduCintraBR/EduCintraBR') === -1)
    reposFiltered = reposFiltered.filter(rep => rep.fork !== true)

    const extractData = repo => ({
        id: repo.id,
        full_name: repo.full_name,
        language: repo.language,
        stars: repo.stargazers_count,
        url_repo: repo.html_url
    })

    const repo = reposFiltered.map(extractData)

    return { repo, me }
}

export default getUser
