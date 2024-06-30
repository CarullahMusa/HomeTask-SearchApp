const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const form = document.querySelector("#form");
const informationWrapper = document.querySelector(".information-wrapper");
const dogCard = document.querySelector(".dog-card");
const dogInfo = document.querySelector(".dog-info");
const selectElement = document.getElementById('selectOptions');
// Div to display info
const infoDisplay = document.getElementById('infoDisplay');

const Key1 = ['good_with_children', 'good_with_other_dogs', 'good_with_strangers'];
const Key2 = ['shedding', 'grooming', 'drooling', 'coat_length', 'playfulness', 'protectiveness', 'trainability', 'energy', 'barking'];
const Key3 = ['min_life_expectancy', 'max_life_expectancy', 'max_height_male', 'max_height_female', 'max_weight_male', 'max_weight_female', 'min_height_male', 'min_height_female', 'min_weight_male', 'min_weight_female'];

const getInformation = new getApi();

runEventListener();

function runEventListener() {
    searchBtn.addEventListener("click", searchDogs);
    deleteBtn.addEventListener("click", deleteDogs);
    selectElement.addEventListener("change", handleSelectChange);
}

function deleteDogs() {
    searchInput.value = "";
    dogCard.innerHTML = "";

}

function searchDogs() {

    const searchValue = searchInput.value.toLowerCase()

    if (searchValue === "") {
        alert("Please enter a dog name");
    }
    else {
        if (dogInfo.classList.contains("hidden")) {
            dogInfo.classList.toggle("hidden")
        }
        dogCard.innerHTML = "";
        getInformation.getDogsInformation(searchValue);
    }
}

function handleSelectChange(key) {
    const selectedOption = selectElement.value;

    if (selectedOption === "good-with") {
        key.f
    }
    // console.log(selectedOption)
}

function addToHtml(info) {
    // Create a div element to hold the dog's information.
    const div = document.createElement('div');
    div.className = 'dog-info';
    dogCard.appendChild(div);


    const img = document.createElement('img');
    img.src = info.image_link;
    img.alt = info.name;
    div.appendChild(img);

    const heading = document.createElement('h2');
    heading.textContent = info.name;
    div.appendChild(heading);

    // selectedValue();

    // Creating ul element to list properties
    // const selectOptions = document.createElement('select');
    // selectOptions.setAttribute('id', 'selectOptions1');
    // select.textContent = "Select one for information";
    for (const key in info) {
        if (key !== 'image_link' && key !== 'name') {
            if (key == "good_with_children" && key == "good_with_other_dogs" && key == "good_with_strangers") {
                const p = document.createElement('p');
                p.textContent = `${key.replace(/_/g, ' ')}: ${info[key]}`;
                infoDisplay.appendChild(p);
            }
            handleSelectChange(key);
            // const options = document.createElement('option');
            // options.textContent = `${key.replace(/_/g, ' ')}: ${info[key]}`;
            //         //         select.appendChild(options);
            //         //         // if (key == Key1) {
            //         //         //     const p = document.createElement('option');
            //         //         //     p.textContent = `${key.replace(/_/g, ' ')}: ${info[key]}`;
            //         //         //     div.appendChild(options);
            //         //         // }


            //         //         // if (selected == key) {
            //         //         //     const number = document.createElement('strong');
            //         //         //     number.textContent = `: ${info[selected]}`;
            //         //         //     div.appendChild(number);
            //         //         // }
            //         const text = document.createElement('p');
            //         text.textContent = `${key.replace(/_/g, ' ')}: ${info[key]}`;
            //         selectDiv.appendChild(text);
        }
    }

    // div.appendChild(select);
    informationWrapper.appendChild(dogCard);

}


// function selectedValue() {

//     const selectOptions = document.createElement('select');
//     selectOptions.setAttribute('id', 'selectOptions');

//     selectOptions.addEventListener('change', function () {
//         const selectedOption = this.value;

//         infoDisplay.innerHTML = '';

//         // Check selected option using if statements
//         if (selectedOption === 'good_with') {
//             const infoData = ['good_with_children', 'good_with_other_dogs', 'good_with_strangers'];
//             appendInfoToDisplay(infoData);
//         } else if (selectedOption === 'behaviour') {
//             const infoData = ['shedding', 'grooming', 'drooling', 'coat_length', 'playfulness', 'protectiveness', 'trainability', 'energy', 'barking'];
//             appendInfoToDisplay(infoData);
//         } else if (selectedOption === 'size_and_life_expectancy') {
//             const infoData = ['min_life_expectancy', 'max_life_expectancy', 'max_height_male', 'max_height_female', 'max_weight_male', 'max_weight_female', 'min_height_male', 'min_height_female', 'min_weight_male', 'min_weight_female'];
//             appendInfoToDisplay(infoData);
//         } else {
//             // If "Select value..." is selected or an invalid option
//             return;
//         }
//     });
//     const options = [
//         { text: 'Select value...', value: 'default' },
//         { text: 'Good with:', value: 'good_with' },
//         { text: 'Behaviour:', value: 'behaviour' },
//         { text: 'Size and Life Expectancy:', value: 'size_and_life_expectancy' }
//     ];
//     options.forEach(option => {
//         const optionElement = document.createElement('option');
//         optionElement.textContent = option.text;
//         optionElement.value = option.value;
//         selectOptions.appendChild(optionElement);
//     });
//     selectDiv.appendChild(selectOptions);
//     dogCard.appendChild(selectDiv);
// };



// function appendInfoToDisplay(infoData) {
//     const infoDisplay = document.createElement('div');
//     infoDisplay.setAttribute('id', 'infoDisplay');

//     // Append select element and info display div to parent container
//     dogCard.appendChild(infoDisplay);
//     infoData.forEach(item => {
//         const pElement = document.createElement('p');
//         pElement.textContent = item;
//         infoDisplay.appendChild(pElement);
//     });
// }



// Event listener for select change
// selectElement.addEventListener('change', change);
// function change(key) {
//     const selectedOption = this.value;

//     // Clear previous info
//     infoDisplay.innerHTML = '';

//     // Check selected option using if statements
//     if (selectedOption === 'good-with') {
//         if (key === 'good_with_children' && key === 'good_with_other_dogs' && key === 'good_with_strangers') {
//             appendInfoToDisplay(key);
//         }
//     } else if (selectedOption === 'behaviour') {
//         const infoData = ['shedding', 'grooming', 'drooling', 'coat_length', 'playfulness', 'protectiveness', 'trainability', 'energy', 'barking'];
//         appendInfoToDisplay(infoData);
//     } else if (selectedOption === 'size-life-expectancy') {
//         const infoData = ['min_life_expectancy', 'max_life_expectancy', 'max_height_male', 'max_height_female', 'max_weight_male', 'max_weight_female', 'min_height_male', 'min_height_female', 'min_weight_male', 'min_weight_female'];
//         appendInfoToDisplay(infoData);
//     } else {
//         // If "Select value..." is selected or an invalid option
//         return;
//     }
// }
// // Function to append info data to display
// function appendInfoToDisplay(infoData) {
//     infoData.forEach(item => {
//         const pElement = document.createElement('p');
//         pElement.textContent = item;
//         infoDisplay.appendChild(pElement);
//     });
// }



/// textarea gibi bişey ve artık yeter text area içinde scroll var çok yer kaplamasın diye