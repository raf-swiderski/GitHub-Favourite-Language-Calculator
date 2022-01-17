const username = "raf-swiderski"

const button = document.querySelector('button');


const body = document.body;


async function displayFavLanguages() {
    
    const data = await getUserRepos(username)
    .then( (data) => {
        showData(data);
    })
}

button.addEventListener('click', () => {
    displayFavLanguages();
});


function showData(repos) {

    //isolate languages into its own array
    var languages = []
    var counter = []

    for (let i = 0; i < repos.length; i++) { languages.push(repos[i].language) } 
    languages = languages.filter(word => word != null) //filters out values === null 
    
    // retrieve the individual languages 
    const uniqueSet = new Set(languages);
    const uniqLanguages = [...uniqueSet] // => [ HTML, JavaScript, Ruby ]
    
    // counting the languages
    
    for (let i = 0; i < uniqLanguages.length; i++) { 

        let occurences = languages.filter((language) => {return language === uniqLanguages[i]}).length 

        counter.push({ language: uniqLanguages[i], occurences: occurences })

    }

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
