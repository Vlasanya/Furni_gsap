<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SvgHeroSection from './SvgHeroSection.vue'
gsap.registerPlugin(ScrollTrigger)
export default {
  name: 'HeroSection',
  components: {
    SvgHeroSection
  },
  mounted() {
    const laptopScreen = window.matchMedia('(min-width: 992px)')
    if (laptopScreen.matches) {
      gsap.to('.section__hero', {
        scrollTrigger: {
          trigger: '.section__hero',
          start: 'top top',
          scrub: true
        },
        css: {
          backgroundColor: '#10895a'
        }
      })
      gsap.to('.title__row-1', {
        scrollTrigger: {
          trigger: '.section__hero',
          start: '-100 0',
          scrub: true
        },
        yPercent: -100
      })
      gsap.to('.title__row-2', {
        scrollTrigger: {
          trigger: '.section__hero',
          start: '-100 0',
          scrub: true
        },
        yPercent: -170
      })
      gsap.to('.hero__svg', {
        scrollTrigger: {
          trigger: '.section__hero',
          start: '-100 0',
          scrub: true
        },
        scale: 0.5,
        y: 50
      })
      gsap.to('.hero__image', {
        scrollTrigger: {
          trigger: '.section__hero',
          start: '-100 0',
          scrub: true
        },
        scale: 1.2,
        y: -50
      })
      gsap.to('.hero__buttons', {
        scrollTrigger: {
          trigger: '.section__hero',
          start: '-100 0',
          scrub: true
        },
        xPercent: 50,
        scale:1.2,
        y: 150
      })
    }
  }
}
</script>

<template>
  <section class="section__hero">
    <div class="container">
      <div class="hero">
        <div class="hero__item left__item">
          <h1 class="hero__title">
            <span class="title__row title__row-1">Modern Interior</span>
            <span class="title__row title__row-2">Design Studio</span>
          </h1>
          <div class="hero__buttons">
            <a href="#" class="btn btn__hero hero__btn">Shop Now</a>
            <a href="#" class="btn btn__outline hero__btn">Explore</a>
          </div>
        </div>
        <div class="hero__item right__item">
          <img class="hero__image" src="../assets/img/hero__image.png" alt="img" />
           <SvgHeroSection />
        </div>
      </div>
    </div>
  </section>
</template>
