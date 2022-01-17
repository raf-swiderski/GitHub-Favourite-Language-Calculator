const username = "raf-swiderski"

async function getUserRepos(username) {
    try {
        const repos = await fetch(`https://api.github.com/users/${username}/repos`);
        const data = await repos.json()
        return data
    } catch (error) {
        console.log('there has been an error')
        console.log(error)
    }
}

const button = document.querySelector('button');


const body = document.body;
body.append('/')

async function displayFavLanguage() {
    
    const data = await getUserRepos(username)
    .then( (data) => {
        
        // body.append(data[i].language)

        showAsPercentage(data);
    })
}

button.addEventListener('click', () => {
    displayFavLanguage();
});


function showAsPercentage(repos) {

    //isolate languages into its own array
    var languages = [];
    for (let i = 0; i < repos.length; i++) { languages.push(repos[i].language) }
    languages = languages.filter(word => word != null) //filters out values === null 
    
    
    // trying to count each of the languages. 
    
    // then convert to percentages
    
    // display them. 
    
    var counter = {}
    
    languages.sort();
    console.log(languages)


    // const test = languages.match(/Ruby/gi);

    // console.log(test)


    


}
