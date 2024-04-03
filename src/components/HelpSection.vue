<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import SvgHelpSection from './SvgHelpSection.vue'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'ChooseSection',
  components: {
    SvgHelpSection
  },
  mounted() {
    const laptopScreen = window.matchMedia('(min-width: 992px)')
    if (laptopScreen.matches) {
      const tlHelp = gsap.timeline()
      tlHelp
        .from('.help__img-1', {
          scrollTrigger: {
            trigger: '.section__help',
            start: '0 center',
            scrub: 1,
            end: '+=300'
          },
          xPercent: 30,
        })
        .from('.help__img-2', {
          scrollTrigger: {
            trigger: '.section__help',
            start: '0 center',
            scrub: 1,
            end: '+=300'
          },
          scale: 0.5,
          yPercent: -80,
          xPercent: -100
        })
        .from('.help__img-3', {
          scrollTrigger: {
            trigger: '.section__help',
            start: '0 center',
            scrub: 1,
            end: '+=400'
          },
          xPercent: -130,
          scale: 0.8
        })
        .from('.help__svg', {
          scrollTrigger: {
            trigger: '.section__help',
            start: '0 center',
            scrub: 1,
            end: '+=200'
          },
          transformOrigin: '50% 50%',
          scale: 0
        })
        .from('.help__title', {
          scrollTrigger: {
            trigger: '.section__help',
            start: '50 center',
            scrub: 1,
            end: '+=150'
          },
          y: 50,
          opacity: 0
        })
        .from('.help__text', {
          scrollTrigger: {
            trigger: '.section__help',
            start: '50 center',
            scrub: 1,
            end: '+=150'
          },
          y: 80,
          opacity: 0
        })
        .from('.help__list li', {
          scrollTrigger: {
            trigger: '.section__help',
            start: '50 center',
            scrub: 1,
            end: '+=200'
          },
          stagger: 0.1,
          y: 80,
          opacity: 0,
          x: 80
        })
        .from('.help__btn', {
          scrollTrigger: {
            trigger: '.section__help',
            start: '100 center',
            scrub: 1,
            end: '+=150'
          },
          y: 80,
          opacity: 0
        })
    }
  }
}
</script>

<template>
    <section class="section__help">
        <div class="container">
          <div class="help">
            <SvgHelpSection />
            <div class="help__item left__item">
              <img class="help__img help__img-1" src="../assets/img/help-1.png" alt="img" />
              <img class="help__img help__img-2" src="../assets/img/help-2.png" alt="img" />
              <img class="help__img help__img-3" src="../assets/img/help-3.png" alt="img" />
            </div>
            <div class="help__item right__item">
              <h2 class="section__title help__title">We help you make Modern Interior Design</h2>
              <p class="section__text help__text">
                Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was
                for us to know what was to be done. the this is a long post for the text.`This small
                text has to be place here, since this is a place holder. You can also chane it.
              </p>

              <ul class="help__list">
                <li>Donec mattis porta eros,let aliquet finibus ri</li>
                <li>Donec mattis porta eros,let aliquet finibus ri</li>
                <li>Donec mattis porta eros,let aliquet finibus ri</li>
                <li>Donec mattis porta eros,let aliquet finibus ri</li>
              </ul>

              <a href="#" class="btn btn__section help__btn">Explore</a>
            </div>
          </div>
        </div>
      </section>
</template>