const formRef = document.querySelector('.login-form')


formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(ev) {
    ev.preventDefault();
    
  const formElements = ev.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;
    const formData = { email, password };
    
  if (email && password) {
    console.log(formData)
      } else {
      alert('Пожалуйста, заполните все поля')
      
    }
    ev.currentTarget.reset();
  }

