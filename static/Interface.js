const button = document.querySelector('button');
const body = document.body;


button.addEventListener('click', () => {
    const username = document.getElementById('username').value
    displayFavLanguages(username);
});


async function displayFavLanguages(username) {
    
    const data = await getUserRepos(username)
    .then( (repos) => {
        displayLanguages(repos);
    })
}


function displayLanguages(repos) {
    
    //isolate languages into its own array
    var languages = isolateLanguages(repos);

    // counting the languages
    var languagesCount = countLanguages(languages);

    // send to document
    sendLanguagesToDocument(languagesCount);
}

function isolateLanguages(repos) {
    var languages = []
    for (let i = 0; i < repos.length; i++) { languages.push(repos[i].language) } 
    languages = languages.filter(word => word != null) // filters out null values 
    return languages
}


function countLanguages(languages) {  
    var counter = []

    // retrieve the language types
    const uniqueSet = new Set(languages);
    const uniqLanguages = [...uniqueSet] // => [ HTML, JavaScript, Ruby ]

    for (let i = 0; i < uniqLanguages.length; i++) { 
        let occurences = languages.filter((language) => {return language === uniqLanguages[i]}).length 
        counter.push({ language: uniqLanguages[i], occurences: occurences })
    }
    return counter
}   


function sendLanguagesToDocument(languagesCount) {
    const languageDiv = document.getElementById("languages")
    const display = []

    languagesCount.forEach(object => {
        display.push('<p>')
        display.push(
            `${object.language} - ${object.occurences} repositories`
        )
        display.push('</p>')
    });

    languageDiv.innerHTML = display.join('');
}