import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const tlContainer = gsap.timeline();
const modernMethodsTl = gsap.timeline();
const individualApproachTl = gsap.timeline();
const learningInSkillfulGroupsTl = gsap.timeline();
const flexibleScheduleTl = gsap.timeline();
const knowledgeMonitoringTl = gsap.timeline();
const convenientPaymentSystemTl = gsap.timeline();

modernMethodsTl.fromTo('.js-advantages-img-wrap.modern-methods', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);
individualApproachTl.fromTo('.js-advantages-img-wrap.individual-approach', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);
learningInSkillfulGroupsTl.fromTo('.js-advantages-img-wrap.learning-in-skillful-groups', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);
flexibleScheduleTl.fromTo('.js-advantages-img-wrap.flexible-schedule', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);
knowledgeMonitoringTl.fromTo('.js-advantages-img-wrap.knowledge-monitoring', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);
convenientPaymentSystemTl.fromTo('.js-advantages-img-wrap.convenient-payment-system', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);

ScrollTrigger.create({
  animation: tlContainer,
  trigger: '.js-advantages-section',
  start: 'center center',
  end: 'bottom',
  pin: true,
  toggleActions: 'play none none reverse',
});

ScrollTrigger.create({
  animation: modernMethodsTl,
  trigger: '.js-advantages-img-wrap.modern-methods',
  start: 'top',
  end: 'bottom',
  toggleActions: 'play none none reverse',
});

ScrollTrigger.create({
  animation: individualApproachTl,
  trigger: '.js-advantages-img-wrap.individual-approach',
  start: 'top',
  end: 'bottom',
  toggleActions: 'play none none reverse',
});

ScrollTrigger.create({
  animation: learningInSkillfulGroupsTl,
  trigger: '.js-advantages-img-wrap.learning-in-skillful-groups',
  start: 'top',
  end: 'bottom',
  toggleActions: 'play none none reverse',
});

ScrollTrigger.create({
  animation: flexibleScheduleTl,
  trigger: '.js-advantages-img-wrap.flexible-schedule',
  start: 'top',
  end: 'bottom',
  toggleActions: 'play none none reverse',
});

ScrollTrigger.create({
  animation: knowledgeMonitoringTl,
  trigger: '.js-advantages-img-wrap.knowledge-monitoring',
  start: 'top',
  end: 'bottom',
  toggleActions: 'play none none reverse',
});

ScrollTrigger.create({
  animation: convenientPaymentSystemTl,
  trigger: '.js-advantages-img-wrap.convenient-payment-system',
  start: 'top',
  end: 'bottom',
  toggleActions: 'play none none reverse',
});