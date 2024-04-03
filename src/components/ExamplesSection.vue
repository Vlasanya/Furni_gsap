<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'ExamplesSection',
  mounted() {
    const laptopScreen = window.matchMedia('(min-width: 992px)')
    if (laptopScreen.matches) {
      const tlExamples = gsap.timeline()
      tlExamples.from('.examples__item', {
        scrollTrigger: {
          trigger: '.section__examples',
          start: '0 center',
          scrub: true,
          end: '+=250'
        },
        x: -100,
        autoAlpha: 0,
        stagger: 0.25
      })
    }
  }
}
</script>
<template>
  <section class="section__examples">
    <div class="container">
      <div class="examples">
        <div class="examples__item">
          <div class="examples__img"><img src="../assets/img/example-1.png" alt="img" /></div>
          <div class="examples__info">
            <div class="examples__name">Nordic Chair</div>
            <div class="examples__text">
              Donec mattis porta eros, aliquet finibus risus in. Donecd
            </div>
            <a href="#" class="examples__link">Read more</a>
          </div>
        </div>

        <div class="examples__item">
          <div class="examples__img"><img src="../assets/img/example-2.png" alt="img" /></div>
          <div class="examples__info">
            <div class="examples__name">Kruzi Aero</div>
            <div class="examples__text">
              Donec mattis porta eros, aliquet finibus risus in. Donecd
            </div>
            <a href="#" class="examples__link">Read more</a>
          </div>
        </div>

        <div class="examples__item">
          <div class="examples__img"><img src="../assets/img/example-3.png" alt="img" /></div>
          <div class="examples__info">
            <div class="examples__name">Ergonomic Chair</div>
            <div class="examples__text">
              Donec mattis porta eros, aliquet finibus risus in. Donecd
            </div>
            <a href="#" class="examples__link">Read more</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
