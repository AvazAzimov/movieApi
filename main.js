const elForm = document.querySelector(".js-form");
const elSearchInput = document.querySelector(".js-input");
const elList = document.querySelector(".js-list");
const elTemplate = document.querySelector(".js-template").content;
const elSearchList = document.querySelector(".search__list");
const elSelect = document.querySelector(".select-js");


const templateFr = new DocumentFragment();
function rendorFilms(arr,node) {
    node.innerHTML = ""
    arr.forEach(item => {
        let fragmentTep =  elTemplate.cloneNode(true);
        fragmentTep.querySelector(".item-img").src = item.Poster;
        fragmentTep.querySelector(".item-title").textContent = item.Title;
        fragmentTep.querySelector(".item-year").textContent = item.Year;
        fragmentTep.querySelector(".item-type").textContent = item.Type;
        // fragmentTep.querySelector(".item-link").href = item.Poster;
        templateFr.append(fragmentTep)
    });
    node.appendChild(templateFr)
}

async function getMovis(url){
    try{
        const response = await fetch(url)
        const data = await response.json();
        console.log(data.Search);
        rendorFilms(data.Search,elList);
    }catch {
        // console.log(error);
    }
    
}

elForm.addEventListener("submit",evt => {
    evt.preventDefault()
    elList.innerHTML = ""
    const searchInputVal = elSearchInput.value;
    const searchSelect = elSelect.value;
    const API_KEY = "e9053da4"
    const apUrl = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchInputVal}&Type=${searchSelect}`
    getMovis(apUrl);
});
