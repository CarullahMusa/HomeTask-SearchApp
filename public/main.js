const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const form = document.querySelector("#form");
const informationWrapper = document.querySelector(".information-wrapper");

const getInformation = new getApi();

runEventListener();

function runEventListener() {
    searchBtn.addEventListener("click", searchDogs);
    deleteBtn.addEventListener("click", deleteDogs);
}

function deleteDogs() {
    searchInput.value = "";
    informationWrapper.innerHTML = "";

}

function searchDogs() {
    const searchValue = searchInput.value.toLowerCase()

    if (searchValue == "") {
        alert("Please enter a dog name");
        return;
    }
    else {
        informationWrapper.innerHTML = "";
        getInformation.getDogsInformation(searchValue);
    }
}

function addToHtml(info) {
    // Create a div element to hold the dog's information.

    const div = document.createElement("div");
    div.className = "dog-card";
    div.innerHTML = ` <h1 class="font-bold text-2xl">${info.name}</h1>
        <img class="rounded-lg w-52 h-44" src="${info.image_link}" alt="${info.name}">
        <div class="flex flex-wrap justify-center mt-10 gap-2">
        <p class=" font-medium text-lg">barking:${info.barking}</p>
        <p class=" font-medium text-lg">coat_length:${info.coat_length}</p>
        <p class=" font-medium text-lg">drooling:${info.drooling}</p>
        <p class=" font-medium text-lg">energy:${info.energy}</p>
        <p class=" font-medium text-lg">good_with_children:${info.good_with_children}</p>
        <p class=" font-medium text-lg">good_with_other_dogs:${info.good_with_other_dogs}</p>
        <p class=" font-medium text-lg">shedding:${info.shedding}</p>
        <p class=" font-medium text-lg">grooming:${info.grooming}</p>
        <p class=" font-medium text-lg">good_with_strangers:${info.good_with_strangers}</p>
        <p class=" font-medium text-lg">playfulness:${info.playfulness}</p>
        <p class=" font-medium text-lg">protectiveness:${info.protectiveness}</p>
        <p class=" font-medium text-lg">trainability:${info.trainability}</p>
        <p class=" font-medium text-lg">min_life_expectancy:${info.min_life_expectancy}</p>
        <p class=" font-medium text-lg">max_life_expectancy:${info.max_life_expectancy}</p>
        <p class=" font-medium text-lg">max_height_male:${info.max_height_male}</p>
        <p class=" font-medium text-lg">max_height_female:${info.max_height_female}</p>
        <p class=" font-medium text-lg">max_weight_male:${info.max_weight_male}</p>
        <p class=" font-medium text-lg">max_weight_female:${info.max_weight_female}</p>
        <p class=" font-medium text-lg">min_height_male:${info.min_height_male}</p>
        <p class=" font-medium text-lg">min_height_female:${info.min_height_female}</p>
        <p class=" font-medium text-lg">min_weight_male:${info.min_weight_male}</p>
        <p class=" font-medium text-lg">min_weight_female:${info.min_weight_female}</p>
        </div>`;

    informationWrapper.appendChild(div);
}