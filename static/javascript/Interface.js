const button = document.querySelector('button');

button.addEventListener('click', () => {
    const username = document.getElementById('username').value
    displayFavLanguages(username);
});

async function displayFavLanguages(username) {
    const data = await getUserRepos(username)
    .then( (repos) => {

        //isolate languages into its own array
        var languages = isolateLanguages(repos);

        // counting the occrences & percentages of the languages
        var languagesObject = countLanguages(languages);

        // sort object by occurences
        languagesObject = sortByFavourite(languagesObject)

        // send to document
        sendLanguagesToDocument(languagesObject);
        
    })
}


function sendLanguagesToDocument(languagesObject) {
    var languageDiv = document.getElementById("languages")
    var display = []

    display.push(
        `${languagesObject[0].language} is ${username.value}'s favourite language!`
    )

  

    languagesObject.forEach(object => {
        display.push('<p>')
        display.push(
            `${object.language} - ${object.occurences} repositories (${object.percentage}%)`
        )
        display.push('</p>')
    });



    languageDiv.innerHTML = display.join('');
}