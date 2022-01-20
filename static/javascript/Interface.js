const button = document.querySelector('button');

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