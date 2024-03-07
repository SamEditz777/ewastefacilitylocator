document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnpopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');

    registerLink.addEventListener('click', () => {
        wrapper.classList.add('active');
    });

    loginLink.addEventListener('click', () => {
        wrapper.classList.remove('active');
    });

    btnpopup.addEventListener('click', () => {
        wrapper.classList.add('active-popup');
    });

    iconClose.addEventListener('click', () => {
        wrapper.classList.remove('active-popup');
    });

    const accountTypeSelect = document.querySelector("#accounttype");

    accountTypeSelect.addEventListener("change", function() {
        if (accountTypeSelect.value === "business") {
            console.log("Business account type selected");
        } else if (accountTypeSelect.value === "individual") {
            console.log("Individual account type selected");

        }
    });
});
window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("container").style.display = "block";
      document.querySelector('.hero').style.display = 'none';
    } else {
      document.getElementById("container").style.display = "none";
      document.querySelector('.hero').style.display = 'flex';
    }
  }

  function showContainer() {
    document.getElementById("container").style.display = "block";
    document.querySelector('.hero').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  window.addEventListener('scroll', function() {
    var container = document.getElementById('main-container');
    var footer = document.querySelector('.footer');
  
    // Get the distance from the top of the container to the bottom
    var containerBottom = container.offsetTop + container.offsetHeight;
  
    // Get the distance from the top of the window to the bottom of the container
    var containerBottomRelativeToWindow = containerBottom - window.pageYOffset;
  
    // Check if the bottom of the container is above the bottom of the window
    if (containerBottomRelativeToWindow > window.innerHeight) {
      footer.style.display = 'none';
    } else {
      footer.style.display = 'block';
    }
  });

  document.getElementById('getStartedBtn').addEventListener('click', function() {
    // Scroll down to the start of the deviceEstimateForm section
    const deviceEstimateForm = document.getElementById('deviceEstimateForm');

    if (deviceEstimateForm) {
        window.scrollTo({
            top: deviceEstimateForm.offsetTop - document.querySelector('header').offsetHeight, // Consider header height
            behavior: 'smooth'
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
  // Get elements
  const toggleSidebarBtn = document.getElementById("toggleSidebarBtn");
  const navigation = document.querySelector(".navigation");
  const sidebar = document.querySelector(".sidebar");

  // Add click event listener to toggle button
  toggleSidebarBtn.addEventListener("click", function () {
    navigation.classList.toggle("show");
    sidebar.classList.toggle("show");
  });
});


function populateCompanies() {
  var category = document.getElementById("category").value;
  var companyDropdown = document.getElementById("company");
  // Clear previous options
  companyDropdown.innerHTML = "<option value=''>Select Company</option>";

  if (category === "mobile") {
      // Populate mobile companies
      var mobileCompanies = ["Samsung", "Apple", "Google"];
      mobileCompanies.forEach(function (company) {
          var option = document.createElement("option");
          option.value = company.toLowerCase();
          option.text = company;
          companyDropdown.add(option);
      });
  } else if (category === "laptop") {
      // Populate laptop companies
      var laptopCompanies = ["Dell", "HP", "Lenovo"];
      laptopCompanies.forEach(function (company) {
          var option = document.createElement("option");
          option.value = company.toLowerCase();
          option.text = company;
          companyDropdown.add(option);
      });
  } else if (category === "tv") {
      // Populate TV companies
      var tvCompanies = ["Sony", "Samsung", "LG"];
      tvCompanies.forEach(function (company) {
          var option = document.createElement("option");
          option.value = company.toLowerCase();
          option.text = company;
          companyDropdown.add(option);
      });
  }
  
}

function populateModels() {
  var company = document.getElementById("company").value;
  var modelDropdown = document.getElementById("model");
  // Clear previous options
  modelDropdown.innerHTML = "<option value=''>Select Model</option>";

  // Add logic to dynamically fetch models based on the selected company
  // For demonstration purposes, a sample list is hardcoded here
  if (company === "samsung") {
      var samsungModels = ["Galaxy S21", "Galaxy Note 20", "Galaxy A32"];
      samsungModels.forEach(function (model) {
          var option = document.createElement("option");
          option.value = model.toLowerCase();
          option.text = model;
          modelDropdown.add(option);
      });
  } else if (company === "apple") {
      var appleModels = ["iPhone 12", "iPhone SE", "iPad Pro"];
      appleModels.forEach(function (model) {
          var option = document.createElement("option");
          option.value = model.toLowerCase();
          option.text = model;
          modelDropdown.add(option);
      });
  }
  else if (company === "google") {
    var googleModels = ["Pixel 6", "Pixel 6 Pro", "Pixel 5a"];
    googleModels.forEach(function (model) {
        var option = document.createElement("option");
        option.value = model.toLowerCase();
        option.text = model;
        modelDropdown.add(option);
    });
}
else if (company === "dell") {
  var dellModels = ["XPS 13", "Inspiron 15", "Latitude 14"];
  dellModels.forEach(function (model) {
      var option = document.createElement("option");
      option.value = model.toLowerCase();
      option.text = model;
      modelDropdown.add(option);
  });
} else if (company === "hp") {
  var hpModels = ["HP Spectre x360", "HP Envy", "HP Pavilion"];
  hpModels.forEach(function (model) {
      var option = document.createElement("option");
      option.value = model.toLowerCase();
      option.text = model;
      modelDropdown.add(option);
  });
}
else if (company === "lenovo") {
  var lenovoModels = ["ThinkPad X1 Carbon", "IdeaPad 5", "Legion Y540"];
  lenovoModels.forEach(function (model) {
      var option = document.createElement("option");
      option.value = model.toLowerCase();
      option.text = model;
      modelDropdown.add(option);
  });
} 
else if (company === "sony") {
    var sonyTVModels = ["Bravia X900H", "Bravia A8H", "Bravia X950H"];
    sonyTVModels.forEach(function (model) {
        var option = document.createElement("option");
        option.value = model.toLowerCase();
        option.text = model;
        modelDropdown.add(option);
    });
} else if (company === "samsung") {
    var samsungTVModels = ["Q80T", "QLED Q90T", "Crystal UHD TU8000"];
    samsungTVModels.forEach(function (model) {
        var option = document.createElement("option");
        option.value = model.toLowerCase();
        option.text = model;
        modelDropdown.add(option);
    });
} else if (company === "lg") {
    var lgTVModels = ["OLED C1", "NanoCell NANO90", "UHD 70UN7370PUC"];
    lgTVModels.forEach(function (model) {
        var option = document.createElement("option");
        option.value = model.toLowerCase();
        option.text = model;
        modelDropdown.add(option);
    });
}
}

function getEstimate() {
  // Fetch selected values
  var category = document.getElementById("category").value;
  var company = document.getElementById("company").value;
  var model = document.getElementById("model").value;
  var age = document.getElementById("age").value;
  var condition = document.getElementById("condition").value;

  // For demonstration, a simple calculation is used. You can adjust this as needed.
  var estimate = calculateEstimate(category, age, condition);

  // Display the estimate result
  var resultDiv = document.getElementById("estimateResult");
  resultDiv.innerHTML = "<p>Estimated Cost for " + company + " " + model + " in " + condition + " condition, aged " + age + ": $" + estimate + "</p>";
}

function calculateEstimate(category, age, condition) {
  // Add your own logic here to calculate the estimate based on the selected options
  // For demonstration, a simple calculation is used. You can adjust this as needed.
  var baseCost = 450; // Change this value based on your estimation logic
  var ageMultiplier;
  var conditionMultiplier;

  switch (age) {
      case "1":
          ageMultiplier = 0.9; // 140% of the base value for age 1
          break;
      case "2":
          ageMultiplier = 0.6; // 130% of the base value for age 2
          break;
      case "3":
          ageMultiplier = 0.3; // 120% of the base value for age 3
          break;
      default:
          ageMultiplier = 1; // No adjustment for unknown age
  }

  switch (condition) {
      case "excellent":
          conditionMultiplier = 1.5; // 150% of the base value for Excellent condition
          break;
      case "good":
          conditionMultiplier = 0.8; // 80% of the base value for Good condition
          break;
      case "fair":
          conditionMultiplier = 0.6; // 60% of the base value for Fair condition
          break;
      default:
          conditionMultiplier = 1; // No adjustment for unknown condition
  }

  var estimate = baseCost * ageMultiplier * conditionMultiplier;

  // Ensure the estimate does not exceed the base price
  estimate = Math.min(estimate, baseCost);

  return estimate.toFixed(2); // Format the result to two decimal places
}


document.getElementById('estimateBtn').addEventListener('click', function() {
  // Fetch selected values and calculate estimate
  getEstimate();

  // Display the overlay
  document.getElementById('overlay').style.display = 'flex';
});

function closeOverlay() {
  // Hide the overlay
  document.getElementById('overlay').style.display = 'none';
}




