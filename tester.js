var languages = ['Ruby', 'HTML', 'Ruby', 'Ruby', 'Javascript', 'Python', 'Javascript', 'Javascript', 'Javascript', 'Ruby', 'Ruby', 'Ruby', 'Ruby', 'Ruby', 'Ruby', 'Ruby', 'HTML']

languages.sort();

console.log(languages)

var arr_of_langs = [];



for (let i = 0; i < languages.length; i++) { 
    
    var occurences = languages.filter(word => word === languages[i]) // => [ 'HTML', 'HTML' ]

    arr_of_langs.push(occurences);
    

}

console.log(arr_of_langs)

function removeDuplicates(arr) {
    arr.reduce((preVal, curVal) =>  {
        return preVal.includes(curVal) ? preVal : [... preVal, curVal], []
    })
}
console.log(removeDuplicates(languages))
    
    
    
    












