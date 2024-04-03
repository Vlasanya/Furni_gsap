<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'MaterialsSection',
  mounted() {
    const laptopScreen = window.matchMedia('(min-width: 992px)')
    if (laptopScreen.matches) {
      gsap.from('.materials__title', {
        scrollTrigger: {
          trigger: '.section__materials',
          start: '-300 0'
        },
        y: 100,
        opacity: 0,
        duration: 1
      })
      gsap.from('.materials__text', {
        scrollTrigger: {
          trigger: '.section__materials',
          start: '-300 0'
        },
        y: 150,
        autoAlpha: 0,
        duration: 1
      })
      gsap.from('.materials__btn', {
        scrollTrigger: {
          trigger: '.section__materials',
          start: '-200 0'
        },
        y: 50,
        autoAlpha: 0,
        duration: 1
      })
      gsap.from('.products__img', {
        scrollTrigger: {
          trigger: '.section__materials',
          start: '-200 0'
        },
        x: -100,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.2
      })
      gsap.from('.products__info', {
        scrollTrigger: {
          trigger: '.section__materials',
          start: '-200 0'
        },
        y: -50,
        autoAlpha: 0,
        duration: 1,
        stagger: 0.2
      })
    }
  }
}
</script>

<template>
  <section class="section__materials">
    <div class="container">
      <div class="materials">
        <div class="materials__item left__item">
          <h2 class="section__title materials__title">Crafted with excellent material.</h2>
          <p class="section__text materials__text">
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for
            us to know what was to be done.
          </p>
          <a href="#" class="btn btn__section materials__btn">Explore</a>
        </div>
        <div class="materials__item right__item">
          <ul class="products">
            <li class="products__item">
              <div class="products__img"><img src="../assets/img/product-1.png" alt="img" /></div>
              <div class="products__info">
                <div class="products__name">Nordic CHAIR</div>
                <div class="products__price">$50.00</div>
              </div>
            </li>

            <li class="products__item">
              <div class="products__img"><img src="../assets/img/product-2.png" alt="img" /></div>
              <div class="products__info">
                <div class="products__name">Kruzo Aero Chair</div>
                <div class="products__price">$78.00</div>
              </div>
            </li>

            <li class="products__item">
              <div class="products__img"><img src="../assets/img/product-3.png" alt="img" /></div>
              <div class="products__info">
                <div class="products__name">Ergonomic Chair</div>
                <div class="products__price">$43.00</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
