const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const informationWrapper = document.querySelector(".information-wrapper");
const dogCard = document.querySelector(".dog-card");

const getInformation = new getApi();

runEventListener();

function runEventListener() {
    searchBtn.addEventListener("click", searchDogs);
    deleteBtn.addEventListener("click", deleteDogs);
}

function deleteDogs() {
    if (!dogCard.classList.contains("hidden")) {
        dogCard.classList.add("hidden");
    }
    searchInput.value = "";
    dogCard.innerHTML = "";

}

function searchDogs() {

    const searchValue = searchInput.value.toLowerCase()

    if (searchValue === "") {
        alert("Please enter a dog name");
    }
    else {
        if (dogCard.classList.contains("hidden")) {
            dogCard.classList.remove("hidden");
        }
        dogCard.innerHTML = "";
        getInformation.getDogsInformation(searchValue);
    }
}

function addToHtml(info) {

    const parent = document.createElement('div');
    parent.className = 'parent-card';
    dogCard.appendChild(parent);

    const div = document.createElement('div');
    div.className = 'dog-info';
    parent.appendChild(div);


    const img = document.createElement('img');
    img.src = info.image_link;
    img.alt = info.name;
    div.appendChild(img);

    const heading = document.createElement('h2');
    heading.textContent = info.name;
    div.appendChild(heading);

    const detailsWrapper = document.createElement('div');
    detailsWrapper.className = 'details-wrapper';
    parent.appendChild(detailsWrapper);

    addDetails(info, detailsWrapper)
}

function addDetails(info, dWrapper) {

    let firstDetails = document.createElement('details');
    firstDetails.id = "firestDetails";

    let secondDetails = document.createElement('details');
    secondDetails.id = "secondDetails";

    let thirdDetails = document.createElement('details');
    thirdDetails.id = "therdDetails";

    dWrapper.appendChild(firstDetails);
    dWrapper.appendChild(secondDetails);
    dWrapper.appendChild(thirdDetails);

    for (const key in info) {
        if (key !== 'image_link' && key !== 'name') {
            const endValue = key.replace(/_/g, ' ');  // _ karakterlerini boşlukla değiştir
            const p = document.createElement('p');
            p.textContent = `${endValue}: ${info[key]}`;

            if (endValue.split(' ')[0] === "good") {
                if (!firstDetails.querySelector('summary')) {
                    const summary = document.createElement('summary');
                    summary.textContent = "Good with: ";
                    firstDetails.appendChild(summary);
                }
                firstDetails.appendChild(p);

            } else if (endValue.split(' ')[0] === "min" || endValue.split(' ')[0] === "max") {
                if (!secondDetails.querySelector('summary')) {
                    const summary = document.createElement('summary');
                    summary.textContent = "life and siz (min,max) : ";
                    secondDetails.appendChild(summary);
                }
                secondDetails.appendChild(p);

            } else {
                if (!thirdDetails.querySelector('summary')) {
                    const summary = document.createElement('summary');
                    summary.textContent = "behaviours : ";
                    thirdDetails.appendChild(summary);
                }
                thirdDetails.appendChild(p);
            }
        }
    }
}
