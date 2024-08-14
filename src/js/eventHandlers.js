import refs from './refs';
import regExp from './regExp';
import validateValue from './validateValue';

const isHiddenClassName = 'is-hidden';

refs.questionsList.addEventListener('click', toggleShowAnswer);
refs.consultationForm.addEventListener('input', onConsultationFormInput);
refs.footerForm.addEventListener('input', onFooterFormInput);
refs.trialLessonBtns.forEach((btn) => {
  btn.addEventListener('click', onTrialLessonBtnClick);
});
refs.trialLessonModalWinCloseBtn.addEventListener('click', onTrialLessonModalWinCloseBtnClick);
refs.showTrialLessonsListToggleBtn.addEventListener('click', onShowTrialLessonsListToggleBtnClick);
refs.trialLessonForm.addEventListener('input', onTrialLessonFormInput);
refs.regOnCourseBtns.forEach((btn) => {
  btn.addEventListener('click', onRegOnCourseBtnClick);
});
refs.regOnCourseModalWinCloseBtn.addEventListener('click', onRegOnCourseModalWinCloseBtnClick);
refs.showRegOnCourseListToggleBtn.addEventListener('click', onShowRegOnCourseListToggleBtnClick);
refs.regOnCourseForm.addEventListener('input', onRegOnCourseFormInput);
refs.landingModalWinBackdrop.forEach((backdrop) => {
  backdrop.addEventListener('click', onBackdropClick);
});
refs.successMsgCloseBtn.addEventListener('click', onSuccessMsgCloseBtnClick);

function onSuccessMsgCloseBtnClick(e) {
  e.currentTarget.blur(isHiddenClassName);

  refs.successMsg.classList.add(isHiddenClassName);
}

function onBackdropClick(e) {
  if (e.currentTarget !== e.target) {
    return;
  }

  e.currentTarget.parentNode.classList.add(isHiddenClassName);
  window.removeEventListener('keydown', hideModalWin);
}

function hideModalWin(e) {
  if (e.code === 'Escape') {
    const targetModalWin = document.querySelector(`.js-modal-win:not(.${isHiddenClassName})`);

    targetModalWin.classList.add(isHiddenClassName);
    window.removeEventListener('keydown', hideModalWin);
  }
}

function onCloseBtnClick(e) {
  const targetModalWin = e.target.closest('.js-project-modal-win');
  targetModalWin.classList.add(isHiddenClassName);
}

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

  refs.trialLessonsList.classList.toggle(isHiddenClassName);
}

function onTrialLessonModalWinCloseBtnClick(e) {
  e.currentTarget.blur();

  refs.trialLessonModalWin.classList.add(isHiddenClassName);
}

function onTrialLessonBtnClick(e) {
  e.currentTarget.blur();

  refs.trialLessonModalWin.classList.remove(isHiddenClassName);

  window.addEventListener('keydown', hideModalWin);
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

function onRegOnCourseBtnClick(e) {
  e.currentTarget.blur();

  refs.regOnCourseModalWin.classList.remove(isHiddenClassName);

  window.addEventListener('keydown', hideModalWin);
}

function onRegOnCourseModalWinCloseBtnClick(e) {
  e.currentTarget.blur();

  refs.regOnCourseModalWin.classList.add(isHiddenClassName);
}

function onShowRegOnCourseListToggleBtnClick(e) {
  e.currentTarget.blur();

  refs.regOnCourseList.classList.toggle(isHiddenClassName);
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

  if (isActiveSubmitBtn) {
    refs.regOnCourseFormSubmitBtn.removeAttribute('disabled');
  } else {
    refs.regOnCourseFormSubmitBtn.setAttribute('disabled', '');
  }
}
