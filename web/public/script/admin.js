function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    const welcomeMessage = document.getElementById('welcomeMessage');

    sections.forEach(section => {
        section.style.display = 'none';
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'flex';
        welcomeMessage.style.display = 'none';
    }
}

    const areaForm = document.getElementById("areaForm");
    const crimeForm = document.getElementById("crimeForm");
    const userTypeForm = document.getElementById("userTypeForm")

    const provinces = ["Gauteng", "KwaZulu-Natal", "Free State", "Western Cape"];
    const userNames = ["Bob", "Felicia",];
    const userTypes = ["admin", "user"]

    const provinceSelect = document.getElementById("province");
    const userNameSelect = document.getElementById("user-name")
    const userTypeSelect = document.getElementById("user-type")

    let formDataArray = [];
    let userTypeArray = [];

    provinces.map(province => {
        const option = document.createElement("option");
        option.value = province;
        option.textContent = province;
        provinceSelect.appendChild(option);
    });

    userNames.map(userName => {
        const option = document.createElement("option");
        option.value = userName;
        option.textContent = userName;
        userNameSelect.appendChild(option);
    });

    userTypes.map(userType => {
        const option = document.createElement("option");
        option.value = userType;
        option.textContent = userType;
        userTypeSelect.appendChild(option);
    });

    areaForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const areaInput = document.getElementById("area");
        const provinceDropdown = document.getElementById("province");
        const area = areaInput.value.trim();
        const province = provinceDropdown.value;

        clearErrors();

        if (area === "") showError(areaInput, "Add an area");
        if (province === "") showError(provinceDropdown, "Select a province");

        if (document.querySelectorAll(".error").length > 0) return;

        const formData = { area, province };
        formDataArray.push(formData);

        areaForm.reset();
    });

    crimeForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const crimeInput = document.getElementById("crime-type");
        const crime = crimeInput.value.trim();

        clearErrors();

        if (crime === "") showError(crimeInput, "Enter your type of crime");

        if (document.querySelectorAll(".error").length > 0) return;

        crimeForm.reset();
    });

    userTypeForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const userNameDropdown = document.getElementById("user-name");
        const userTypeDropdown = document.getElementById("user-type");
        const userName = userNameDropdown.value;
        const userType = userTypeDropdown.value;

        clearErrors();

        if (userName === "") showError(userNameDropdown, "Select a user");
        if (userType === "") showError(userTypeDropdown, "Select a role");

        if (document.querySelectorAll(".error").length > 0) return;

        const userFormData = { userName, userType };
        userTypeArray.push(userFormData);

        userTypeForm.reset();
    });

    function clearErrors() {
        document.querySelectorAll(".form-group .error").forEach(el => el.classList.remove("error"));
        document.querySelectorAll(".error-text").forEach(el => el.remove());
    }

    function showError(element, message) {
        element.classList.add("error");
        const errorText = document.createElement("small");
        errorText.className = "error-text";
        errorText.textContent = message;
        element.closest(".form-group").appendChild(errorText);
    }
