import refs from './refs';
import regExp from './regExp';
import validateValue from './validateValue';

refs.questionsList.addEventListener('click', toggleShowAnswer);
refs.consultationForm.addEventListener('input', onConsultationFormInput);
refs.consultationSuccessMsgCloseBtn.addEventListener('click', onConsultationSuccessMsgCloseBtnClick);
refs.footerForm.addEventListener('input', onFooterFormInput);
refs.trialLessonBtns.forEach((btn) => {
  btn.addEventListener('click', onTrialLessonBtnClick);
});
refs.trialLessonModalWinCloseBtn.addEventListener('click', onTrialLessonModalWinCloseBtnClick);
refs.showTrialLessonsListToggleBtn.addEventListener('click', onShowTrialLessonsListToggleBtnClick);
refs.trialLessonForm.addEventListener('input', onTrialLessonFormInput);
refs.trialLessonSuccessMsgCloseBtn.addEventListener('click', onTrialLessonSuccessMsgCloseBtnClick);
refs.regOnCourseBtns.forEach((btn) => {
  btn.addEventListener('click', onRegOnCourseBtnClick);
});
refs.regOnCourseModalWinCloseBtn.addEventListener('click', onRegOnCourseModalWinCloseBtnClick);
refs.showRegOnCourseListToggleBtn.addEventListener('click', onShowRegOnCourseListToggleBtnClick);
refs.regOnCourseForm.addEventListener('input', onRegOnCourseFormInput);
refs.regOnCourseSuccessMsgCloseBtn.addEventListener('click', onRegOnCourseSuccessMsgCloseBtnClick);

function onTrialLessonFormInput(e) {
  const data = {};

  const formData = new FormData(e.currentTarget);

  formData.forEach((value, key) => {
    data[key] = value;
  });

  const keys = Object.keys(data);
  const isValidLength = keys.length === 5;
  const isCompletedForm = keys.every((key) => data[key]);

  const isActiveSubmitBtn = isValidLength && isCompletedForm;

  if (isActiveSubmitBtn) {
    refs.trialLessonFormSubmitBtn.removeAttribute('disabled');
  } else {
    refs.trialLessonFormSubmitBtn.setAttribute('disabled', '');
  }
}

function onShowTrialLessonsListToggleBtnClick(e) {
  e.currentTarget.blur();

  refs.trialLessonsList.classList.toggle('is-hidden');
}

function onTrialLessonModalWinCloseBtnClick(e) {
  e.currentTarget.blur();

  refs.trialLessonModalWin.classList.add('is-hidden');
}

function onTrialLessonBtnClick(e) {
  e.currentTarget.blur();

  refs.trialLessonModalWin.classList.remove('is-hidden');
}

function onFooterFormInput(e) {
  const data = {};

  const formData = new FormData(e.currentTarget);

  formData.forEach((value, key) => {
    data[key] = value;
  });

  const dataKeys = Object.keys(data);
  const isValidEmail = validateValue({ regExp: regExp.email, value: data[dataKeys[0]] });
  const isCompletedForm = dataKeys.every((key) => data[key]);
  const isActiveSubmitBtn = isCompletedForm && isValidEmail;

  if (isActiveSubmitBtn) {
    refs.footerFormSubmitBtn.removeAttribute('disabled');
  } else {
    refs.footerFormSubmitBtn.setAttribute('disabled', '');
  }
}

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

function onConsultationSuccessMsgCloseBtnClick(e) {
  e.currentTarget.blur();

  refs.consultationSuccessMsg.classList.add('hidden');
}

function onTrialLessonSuccessMsgCloseBtnClick(e) {
  e.currentTarget.blur();

  refs.trialLessonSuccessMsg.classList.add('hidden');
}

function onRegOnCourseBtnClick(e) {
  e.currentTarget.blur();

  refs.regOnCourseModalWin.classList.remove('is-hidden');
}

function onRegOnCourseModalWinCloseBtnClick(e) {
  e.currentTarget.blur();

  refs.regOnCourseModalWin.classList.add('is-hidden');
}

function onShowRegOnCourseListToggleBtnClick(e) {
  e.currentTarget.blur();

  refs.regOnCourseList.classList.toggle('is-hidden');
}

function onRegOnCourseFormInput(e) {
  const data = {};

  const formData = new FormData(e.currentTarget);

  formData.forEach((value, key) => {
    data[key] = value;
  });

  const keys = Object.keys(data);
  const isValidLength = keys.length === 5;
  const isCompletedForm = keys.every((key) => data[key]);

  const isActiveSubmitBtn = isValidLength && isCompletedForm;
  console.log(data);
  if (isActiveSubmitBtn) {
    refs.regOnCourseFormSubmitBtn.removeAttribute('disabled');
  } else {
    refs.regOnCourseFormSubmitBtn.setAttribute('disabled', '');
  }
}

function onRegOnCourseSuccessMsgCloseBtnClick(e) {
  e.currentTarget.blur();

  refs.regOnCourseSuccessMsg.classList.add('hidden');
}
