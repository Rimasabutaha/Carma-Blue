const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const salary = document.getElementById('salary');
const obligation = document.getElementById('obligation');
const rent = document.getElementById('rent');
const date = document.getElementById('date');

form.addEventListener('submit', function (e) {
    e.preventDefault();
  
    validateInputs();
  
    if (isFormValid()) {
      submitForm();
    }
  });
  
  function isFormValid() {
    const inputContainers = form.querySelectorAll('.input-control');
    let result = true;
    inputContainers.forEach((container) => {
      if (container.classList.contains('error')) {
        result = false;
      }
    });
    return result;
  }
  
  function submitForm() {
    const formData = new FormData(form);
  
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = "./page4.html";
        } else {
          console.error("Form submission failed");
        }
      })
      .catch((error) => {
        console.error("Error: " + error);
      });
  }


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidfullname = fullname => {
  const full = /^[a-zA-Z]+ [a-zA-Z]+$/;
  return full.test(fullname);
}

const isValidsalary = salary => {
  const money =/^(\w{3}\s?)?(\$|€|£|¥)?\s?(\d+(?:,\d{3})*(?:\.\d{1,2})?)$/;
  return money.test(salary);
}

const isValidobligation = obligation => {
  const money =/^(\w{3}\s?)?(\$|€|£|¥)?\s?(\d+(?:,\d{3})*(?:\.\d{1,2})?)$/;
  return money.test(obligation);
}

const isValidrent = rent => {
  const money =/^(\w{3}\s?)?(\$|€|£|¥)?\s?(\d+(?:,\d{3})*(?:\.\d{1,2})?)$/;
  return money.test(rent);
}

const validateInputs = () => {
    const fullnamevalue = fullname.value.trim();
    const salaryValue = salary.value.trim();
    const obligationValue = obligation.value.trim();
    const rentValue = rent.value.trim();
    const dateValue = date.value.trim();

    if(fullnamevalue === '') {
        setError(fullname, 'Full Name is required');
    }else if (!isValidfullname(fullnamevalue)) {
        setError(fullname, 'Provide a valid Full Name (without space)');
    } else {
        setSuccess(fullname);
    }

    if(salaryValue === '') {
        setError(salary, 'Salary is required');
    }else if (!isValidsalary(salaryValue)) {
        setError(salary, 'Provide a valid amount of salary');
    } else {
        setSuccess(salary);
    }

    if(obligationValue === '') {
        setError(obligation, 'Monthly Obligation is required');
    }else if (!isValidobligation(obligationValue)) {
        setError(obligation, 'Provide a valid Monthly Obligation');
    }else {
        setSuccess(obligation);
    }

    if(rentValue === '') {
        setError(rent, 'Expected Yearly Rent Amount is required');
    }else if (!isValidrent(rentValue)) {
        setError(rent, 'Provide a valid amount of rent');
    }else {
        setSuccess(rent);
    }

    if(dateValue === '') {
        setError(date, 'Expected Rent Start Date is required');
    }else {
        setSuccess(date);
    }

};





