const areas = [
  "Rosebank", "Randburg", "Sandton", "Pretoria",
];

const provinces = [
  "Gauteng", "KwaZulu-Natal", "Free State", "Western Cape"
];


const areaSelect = document.getElementById("area");
const provinceSelect = document.getElementById("province");

areas.forEach(area => {
  const option = document.createElement("option");
  option.value = area;
  option.textContent = area;
  areaSelect.appendChild(option);
});

provinces.forEach(province => {
  const option = document.createElement("option");
  option.value = province;
  option.textContent = province;
  provinceSelect.appendChild(option);
});

//Validation
const form = document.getElementById("myForm");

const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
}

const handleFormData = (e) => {
    e.preventDefault();

    const areaDropdown = document.getElementById("area");
    const provinceDropdown = document.getElementById("province");
    const crimeInput = document.getElementById("crime-type");
    const descriptionInput = document.getElementById("description");

    const crime = crimeInput.value.trim();
    const description = descriptionInput.value.trim();
    const areaTest = areaDropdown.value;
    const provTest = provinceDropdown.value;
    console.log(provTest)


    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    if (crime === "") {
        showError(crimeInput, "Enter your type of crime");
    }
    if (description === "") {
        showError(descriptionInput, "Enter a description");
    }
    if (areaTest === "") {
        showError(areaDropdown, "Select a area");
    }
    if (provTest === "") {
        showError(provinceDropdown, "Select a province");
    }

    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;

    form.submit();
}

form.addEventListener("submit", handleFormData);
