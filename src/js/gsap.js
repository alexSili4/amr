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
    end: 'bottom+=1300',
    pin: true,
    toggleActions: 'play none none reverse',
  });

  ScrollTrigger.create({
    animation: modernMethodsTl,
    trigger: '.js-advantages-img-wrap.modern-methods',
    start: 'center+=300',
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

mm.add('(max-width: 1179px)', () => {
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
    start: 'center',
    end: 'bottom',
    toggleActions: 'play none none reverse',
  });

  ScrollTrigger.create({
    animation: individualApproachTl,
    trigger: '.js-advantages-img-wrap.individual-approach',
    start: 'center',
    end: 'bottom',
    toggleActions: 'play none none reverse',
  });

  ScrollTrigger.create({
    animation: learningInSkillfulGroupsTl,
    trigger: '.js-advantages-img-wrap.learning-in-skillful-groups',
    start: 'center',
    end: 'bottom',
    toggleActions: 'play none none reverse',
  });

  ScrollTrigger.create({
    animation: flexibleScheduleTl,
    trigger: '.js-advantages-img-wrap.flexible-schedule',
    start: 'bottom',
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
});
