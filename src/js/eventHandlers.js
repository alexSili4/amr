import refs from './refs';

const isHiddenClassName = 'is-hidden';

refs.questionsList.addEventListener('click', toggleShowAnswer);
refs.trialLessonBtns.forEach((btn) => {
  btn.addEventListener('click', onTrialLessonBtnClick);
});
refs.trialLessonModalWinCloseBtn.addEventListener('click', onTrialLessonModalWinCloseBtnClick);
refs.showTrialLessonsListToggleBtn.addEventListener('click', onShowTrialLessonsListToggleBtnClick);
refs.regOnCourseBtns.forEach((btn) => {
  btn.addEventListener('click', onRegOnCourseBtnClick);
});
refs.regOnCourseModalWinCloseBtn.addEventListener('click', onRegOnCourseModalWinCloseBtnClick);
refs.showRegOnCourseListToggleBtn.addEventListener('click', onShowRegOnCourseListToggleBtnClick);
refs.landingModalWinBackdrop.forEach((backdrop) => {
  backdrop.addEventListener('click', onBackdropClick);
});
refs.successMsgCloseBtn.addEventListener('click', onSuccessMsgCloseBtnClick);
refs.trialLessonsList.addEventListener('input', onTrialLessonsListInput);
refs.regOnCourseList.addEventListener('input', onRegOnCourseListInput);
refs.coursesList.addEventListener('click', onCoursesListClick);
refs.aboutLessonCloseBtn.addEventListener('click', onAboutLessonCloseBtnClick);
refs.aboutLessonRegBtn.addEventListener('click', onAboutLessonCloseBtnClick);

function onAboutLessonCloseBtnClick(e) {
  e.currentTarget.blur();

  refs.aboutLessonModalWin.classList.add(isHiddenClassName);
}

function onCoursesListClick(e) {
  const targetBtn = e.target.closest('.js-landing-courses-about-btn');

  if (!targetBtn) {
    return;
  }

  targetBtn.blur();
  const targetCourseContainer = e.target.closest('.js-landing-courses-course-wrap');
  const targetCourseName = targetCourseContainer.querySelector('.js-landing-courses-course-text').textContent;
  refs.aboutLessonModalWinTitle.textContent = targetCourseName;
  refs.aboutLessonModalWin.classList.remove(isHiddenClassName);
  window.addEventListener('keydown', hideModalWin);
}

function onRegOnCourseListInput(e) {
  const activeBtnClassName = 'active';
  const activeCourses = refs.regOnCourseList.querySelectorAll('label:has(input[type="checkbox"]:checked)');
  const btnTitle = [...activeCourses].map((item) => item.lastElementChild.textContent).join(', ');

  if (btnTitle) {
    refs.showRegOnCourseListToggleBtnTitle.textContent = btnTitle;
    refs.showRegOnCourseListToggleBtnTitle.classList.add(activeBtnClassName);
  } else {
    refs.showRegOnCourseListToggleBtnTitle.textContent = 'Обрати предмет';
    refs.showRegOnCourseListToggleBtnTitle.classList.remove(activeBtnClassName);
  }
}

function onTrialLessonsListInput(e) {
  const activeBtnClassName = 'active';
  const activeCourses = refs.trialLessonsList.querySelectorAll('label:has(input[type="checkbox"]:checked)');
  const btnTitle = [...activeCourses].map((item) => item.lastElementChild.textContent).join(', ');

  if (btnTitle) {
    refs.showTrialLessonsListToggleBtnTitle.textContent = btnTitle;
    refs.showTrialLessonsListToggleBtnTitle.classList.add(activeBtnClassName);
  } else {
    refs.showTrialLessonsListToggleBtnTitle.textContent = 'Обрати предмет';
    refs.showTrialLessonsListToggleBtnTitle.classList.remove(activeBtnClassName);
  }
}

function onSuccessMsgCloseBtnClick(e) {
  e.currentTarget.blur();

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

function toggleShowAnswer(e) {
  const targetClassName = 'hidden-desc';
  const isTargetQuestionBtn = e.target.closest('.js-landing-questions-list-question-btn');

  if (!isTargetQuestionBtn) {
    return;
  }

  const questionContainer = e.target.closest('.js-landing-questions-list-question-wrap');
  questionContainer.classList.toggle(targetClassName);
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
