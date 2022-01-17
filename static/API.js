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
    // => [ HTML, HTML, Javascript, Javascript, Javascript ]
    
    // retrieve the individual languages 
    const uniqueSet = new Set(languages);
    const uniqLanguages = [...uniqueSet] 
    // => [ HTML, JavaScript, Ruby ]
    

    // counting the languages
    var counter = []
    for (let i = 0; i < uniqLanguages.length; i++) { 

        let occurences = languages.filter((language) => {return language === uniqLanguages[i]}).length 

        counter.push({ language: uniqLanguages[i], occurences: occurences })

    }

    // body.append(counter)
    console.log(counter)

    const languageDiv = document.getElementById("languages")


    const display = []

    counter.forEach(object => {
        display.push('<p>')
        display.push(
            `${object.language} occurs ${object.occurences} times`
        )
        display.push('</p>')
    });

    languageDiv.innerHTML = display.join('');
    


}
