// валидация формы на непустое значение отключением кнопки "Сохранить"
const validForm = () => {
  const dataForm = document.forms['data-form'];
  const submitBtn = dataForm[dataForm.length - 1];
  const formLabel = document.querySelector('.data-form__label');

  const validNotEmptyForm = form => [...form].slice(0, form.length - 1)
    .every(item => item.value.trim() !== '');

  const validation = () => {
    if (validNotEmptyForm(dataForm)) {
      submitBtn.removeAttribute('disabled');
      formLabel.classList.add('hidden');
    } else {
      submitBtn.setAttribute('disabled', 'true');
      formLabel.classList.remove('hidden');
    }
  };
  validation();

  dataForm.addEventListener('change', validation);
  dataForm.addEventListener('input', validation);
  dataForm.addEventListener('paste', validation);
  dataForm.addEventListener('blur', validation);
}
export default validForm;