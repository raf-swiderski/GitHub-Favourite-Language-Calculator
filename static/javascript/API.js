async function getUserRepos(username) {
    try {
        const repos = await fetch(`https://api.github.com/users/${username}/repos?per_page=999`);
        const data = repos.json();
        return data
    } catch (error) {
        console.log(error)
        return error
    }
}