async function getUserRepos(username) {
    try {
        const repos = await fetch(`https://api.github.com/users/${username}/repos?per_page=999`);
        const data = await repos.json()
        return data
    } catch (error) {
        console.log('there has been an error')
        console.log(error)
    }
}