import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const mm = gsap.matchMedia();

mm.add('(min-width: 1180px)', () => {
  const tlContainer = gsap.timeline();
  const modernMethodsTl = gsap.timeline();
  const individualApproachTl = gsap.timeline();
  const learningInSkillfulGroupsTl = gsap.timeline();
  const flexibleScheduleTl = gsap.timeline();
  const knowledgeMonitoringTl = gsap.timeline();
  const convenientPaymentSystemTl = gsap.timeline();
  const sloganDecorativeLine = gsap.timeline();
  const ourNewProductDecorativeLine = gsap.timeline();
  const trialLessonBtn = gsap.timeline({ delay: 3.5 });

  modernMethodsTl.fromTo('.js-advantages-img-wrap.modern-methods', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);
  individualApproachTl.fromTo('.js-advantages-img-wrap.individual-approach', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);
  learningInSkillfulGroupsTl.fromTo('.js-advantages-img-wrap.learning-in-skillful-groups', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);
  flexibleScheduleTl.fromTo('.js-advantages-img-wrap.flexible-schedule', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);
  knowledgeMonitoringTl.fromTo('.js-advantages-img-wrap.knowledge-monitoring', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);
  convenientPaymentSystemTl.fromTo('.js-advantages-img-wrap.convenient-payment-system', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);
  sloganDecorativeLine.fromTo('.js-landing-slogan-text-wrap-icon path', { strokeDashoffset: 1500 }, { strokeDashoffset: 0, duration: 1 }, 0);
  ourNewProductDecorativeLine.fromTo('.js-landing-our-new-product-text-wrap-icon path', { strokeDashoffset: 1500 }, { strokeDashoffset: 0, duration: 1 }, 0);

  trialLessonBtn.fromTo('.js-hero-trial-lesson-btn', { opacity: 0 }, { opacity: 1, duration: 3 });

  ScrollTrigger.create({
    animation: ourNewProductDecorativeLine,
    trigger: '.js-landing-our-new-product-wrap',
    start: 'center+=1600',
    end: 'bottom',
  });

  ScrollTrigger.create({
    animation: sloganDecorativeLine,
    trigger: '.js-landing-slogan-section',
    start: 'center center',
    end: 'bottom',
  });

  ScrollTrigger.create({
    animation: tlContainer,
    trigger: '.js-advantages-section',
    start: 'center center',
    end: 'bottom+=1200',
    pin: true,
    toggleActions: 'play none none reverse',
  });

  ScrollTrigger.create({
    animation: modernMethodsTl,
    trigger: '.js-advantages-img-wrap.modern-methods',
    start: 'center+=200',
    end: 'bottom',
    toggleActions: 'play none none reverse',
  });

  ScrollTrigger.create({
    animation: individualApproachTl,
    trigger: '.js-advantages-img-wrap.individual-approach',
    start: 'center+=500',
    end: 'bottom',
    toggleActions: 'play none none reverse',
  });

  ScrollTrigger.create({
    animation: learningInSkillfulGroupsTl,
    trigger: '.js-advantages-img-wrap.learning-in-skillful-groups',
    start: 'center+=500',
    end: 'bottom',
    toggleActions: 'play none none reverse',
  });

  ScrollTrigger.create({
    animation: flexibleScheduleTl,
    trigger: '.js-advantages-img-wrap.flexible-schedule',
    start: 'bottom+=800',
    end: 'bottom',
    toggleActions: 'play none none reverse',
  });

  ScrollTrigger.create({
    animation: knowledgeMonitoringTl,
    trigger: '.js-advantages-img-wrap.knowledge-monitoring',
    start: 'top+=1000',
    end: 'bottom',
    toggleActions: 'play none none reverse',
  });

  ScrollTrigger.create({
    animation: convenientPaymentSystemTl,
    trigger: '.js-advantages-img-wrap.convenient-payment-system',
    start: 'top+=1200',
    end: 'bottom',
    toggleActions: 'play none none reverse',
  });
});

mm.add('(max-width: 1179px)', () => {
  const tlContainer = gsap.timeline();
  const modernMethodsTl = gsap.timeline();
  const individualApproachTl = gsap.timeline();
  const learningInSkillfulGroupsTl = gsap.timeline();
  const flexibleScheduleTl = gsap.timeline();
  const knowledgeMonitoringTl = gsap.timeline();
  const convenientPaymentSystemTl = gsap.timeline();
  const sloganDecorativeLine = gsap.timeline();
  const ourNewProductDecorativeLine = gsap.timeline();
  const trialLessonBtn = gsap.timeline({ delay: 3.5 });

  modernMethodsTl.fromTo('.js-advantages-img-wrap.modern-methods', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);
  individualApproachTl.fromTo('.js-advantages-img-wrap.individual-approach', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);
  learningInSkillfulGroupsTl.fromTo('.js-advantages-img-wrap.learning-in-skillful-groups', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);
  flexibleScheduleTl.fromTo('.js-advantages-img-wrap.flexible-schedule', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);
  knowledgeMonitoringTl.fromTo('.js-advantages-img-wrap.knowledge-monitoring', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);
  convenientPaymentSystemTl.fromTo('.js-advantages-img-wrap.convenient-payment-system', { opacity: 0 }, { opacity: 1, duration: 1 }, 0);
  sloganDecorativeLine.fromTo('.js-landing-slogan-text-wrap-icon path', { strokeDashoffset: 1500 }, { strokeDashoffset: 0, duration: 1 }, 0);
  ourNewProductDecorativeLine.fromTo('.js-landing-our-new-product-text-wrap-icon path', { strokeDashoffset: 1500 }, { strokeDashoffset: 0, duration: 1 }, 0);

  trialLessonBtn.fromTo('.js-hero-trial-lesson-btn', { opacity: 0 }, { opacity: 1, duration: 3 });

  ScrollTrigger.create({
    animation: ourNewProductDecorativeLine,
    trigger: '.js-landing-our-new-product-wrap',
    start: 'center+=1500',
    end: 'bottom',
  });

  ScrollTrigger.create({
    animation: sloganDecorativeLine,
    trigger: '.js-landing-slogan-section',
    start: 'top',
    end: 'bottom',
  });

  ScrollTrigger.create({
    animation: tlContainer,
    trigger: '.js-advantages-section',
    start: 'center center',
    end: 'bottom+=1400',
    pin: true,
    toggleActions: 'play none none reverse',
  });

  ScrollTrigger.create({
    animation: modernMethodsTl,
    trigger: '.js-advantages-img-wrap.modern-methods',
    start: 'center+=200',
    end: 'bottom',
    toggleActions: 'play none none reverse',
  });

  ScrollTrigger.create({
    animation: individualApproachTl,
    trigger: '.js-advantages-img-wrap.individual-approach',
    start: 'center+=400',
    end: 'bottom',
    toggleActions: 'play none none reverse',
  });

  ScrollTrigger.create({
    animation: learningInSkillfulGroupsTl,
    trigger: '.js-advantages-img-wrap.learning-in-skillful-groups',
    start: 'center+=600',
    end: 'bottom',
    toggleActions: 'play none none reverse',
  });

  ScrollTrigger.create({
    animation: flexibleScheduleTl,
    trigger: '.js-advantages-img-wrap.flexible-schedule',
    start: 'bottom+=800',
    end: 'bottom',
    toggleActions: 'play none none reverse',
  });

  ScrollTrigger.create({
    animation: knowledgeMonitoringTl,
    trigger: '.js-advantages-img-wrap.knowledge-monitoring',
    start: 'top+=1000',
    end: 'bottom',
    toggleActions: 'play none none reverse',
  });

  ScrollTrigger.create({
    animation: convenientPaymentSystemTl,
    trigger: '.js-advantages-img-wrap.convenient-payment-system',
    start: 'top+=1200',
    end: 'bottom',
    toggleActions: 'play none none reverse',
  });
});
