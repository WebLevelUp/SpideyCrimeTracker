function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}

window.onload = () => {
    showSection('add');
};

const provinces = [
    "Gauteng", "KwaZulu-Natal", "Free State", "Western Cape"
  ];

  let formDataArray = [];
  
  const provinceSelect = document.getElementById("province");

  provinces.map(province => {
    const option = document.createElement("option");
    option.value = province;
    option.textContent = province;
    provinceSelect.appendChild(option);
  });

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

    const areaInput = document.getElementById("area");
    const provinceDropdown = document.getElementById("province");

    const area = areaInput.value.trim();
    const province = provinceDropdown.value;


    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());


    if (area === "") {
        showError(areaInput, "Select a area");
    }
    if (province === "") {
        showError(provinceDropdown, "Select a province");
    }

    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;

    const formData = {
      area: area,
      province: province
  };

  formDataArray.push(formData);
  console.log(formDataArray)
  form.reset();
  }
  
  form.addEventListener("submit", handleFormData);