import refs from './refs';

refs.questionsList.addEventListener('click', toggleShowAnswer);
refs.consultationForm.addEventListener('input', onConsultationFormInput);

function toggleShowAnswer(e) {
  const targetClassName = 'hidden-desc';
  const isTargetQuestionBtn = e.target.closest('.js-landing-questions-list-question-btn');

  if (!isTargetQuestionBtn) {
    return;
  }

  const questionContainer = e.target.closest('.js-landing-questions-list-question-wrap');
  questionContainer.classList.toggle(targetClassName);
}

function onConsultationFormInput(e) {
  const data = {};

  const formData = new FormData(e.currentTarget);

  formData.forEach((value, key) => {
    data[key] = value;
  });

  const dataKeys = Object.keys(data);
  const isValidDataLength = dataKeys.length === 4;
  const isNotEmptyForm = dataKeys.every((key) => data[key]);

  const isDisabled = !isValidDataLength || !isNotEmptyForm;

  if (isDisabled) {
    refs.consultationFormSubmitBtn.setAttribute('disabled', '');
  } else {
    refs.consultationFormSubmitBtn.removeAttribute('disabled');
  }
}
