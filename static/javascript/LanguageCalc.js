
function isolateLanguages(repos) {
    var languages = []
    for (let i = 0; i < repos.length; i++) { languages.push(repos[i].language) } 
    languages = languages.filter(word => word != null) // filters out null values 
    return languages
}


function countLanguages(languages) {  
    var languagesObject = []

    // retrieve the different language types
    const uniqueSet = new Set(languages);
    const uniqLanguages = [...uniqueSet] // => [ HTML, JavaScript, Ruby ]
    
    for (let i = 0; i < uniqLanguages.length; i++) { 
        let occurences = languages.filter((language) => {return language === uniqLanguages[i]}).length 
        let percentage = occurences * 100 / languages.length
        percentage = Math.round(percentage * 10) / 10
        
        languagesObject.push({ language: uniqLanguages[i], occurences: occurences, percentage: percentage })
    }

    return languagesObject
}   

function sortByFavourite(languages) {
    return languages.sort((a, b) => (a.occurences < b.occurences) ? 1 : -1)
}