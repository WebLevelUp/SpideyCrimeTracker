const areas = [
  "Rosebank", "Randburg", "Sandton", "Pretoria",
];

const provinces = [
  "Gauteng", "KwaZulu-Natal", "Free State", "Western Cape"
];

let formDataArray = [];

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

const dateInput = document.getElementById('date');
const today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('max', today);

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
    const dateInput = document.getElementById("date");
    const crimeInput = document.getElementById("crime-type");
    const descriptionInput = document.getElementById("description");

    const crime = crimeInput.value.trim();
    const description = descriptionInput.value.trim();
    const date = dateInput.value;
    const area = areaDropdown.value;
    const province = provinceDropdown.value;


    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    if (crime === "") {
        showError(crimeInput, "Enter your type of crime");
    }
    if (description === "") {
        showError(descriptionInput, "Enter a description");
    }
    if (date === "") {
      showError(dateInput, "Select a date");
  }
    if (area === "") {
        showError(areaDropdown, "Select a area");
    }
    if (province === "") {
        showError(provinceDropdown, "Select a province");
    }

    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;

    const formData = {
      crime: crime,
      description: description,
      area: area,
      province: province
  };

  formDataArray.push(formData);
  form.reset();
  }
  
  form.addEventListener("submit", handleFormData);


// async function loadSidebar() {
//   const response = await fetch('./html/recent.html');
//   const text = await response.text();
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(text, 'text/html');

//   // Assuming the sidebar HTML is directly under <body>
//   const sidebarElement = doc.body.firstChild;

//   const sidebarContainer = document.getElementById('sidebar-container');
//   sidebarContainer.appendChild(sidebarElement);
// }

// loadSidebar()