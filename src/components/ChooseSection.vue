<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'ChooseSection',
  mounted() {
    const laptopScreen = window.matchMedia('(min-width: 992px)')
    if (laptopScreen.matches) {
      const tlChoose = gsap.timeline()
      tlChoose
        .from('.section__choose', {
          scrollTrigger: {
            trigger: '.section__choose',
            start: '0 0',
            scrub: 1,
            pin: true
          }
        })
        .from('.choose__title', {
          scrollTrigger: {
            trigger: '.section__choose',
            start: '-150 0',
            scrub: 1
          },
          y: 30
        })
        .from('.choose__text', {
          scrollTrigger: {
            trigger: '.section__choose',
            start: '-120 0',
            scrub: 1
          },
          y: 60
        })
        .from('.why__svg', {
          scrollTrigger: {
            trigger: '.section__choose',
            start: '0 0',
            scrub: true
          },
          scale: 0
        })
      .from('.why__image', {
        scrollTrigger: {
          trigger: '.section__choose',
          start: 'top bottom',
          scrub: true,
        },
        x: '100%',
        ease: "none",
        opacity: 0
      })
       .from('.why__item', {
          scrollTrigger: {
            trigger: '.section__choose',
            start: '-200 0',
            scrub: true
          },
          stagger: 0.25,
          y: 50,
          autoAlpha: 0
        })
        .from('.why__icon circle', {
          scrollTrigger: {
            trigger: '.section__choose',
            start: '-200 0',
            scrub: true
          },
          stagger: 0.25,
          css: {
            fill: '#f9bf29',
            fillOpacity: 1
          }
        })
        .from('.why__icon svg', {
          scrollTrigger: {
            trigger: '.section__choose',
            start: '-200 0',
            scrub: true
          },
          scale: 2
        })
    }
  }
}
</script>
<template>
  <section class="section__choose">
    <div class="container">
      <div class="choose">
        <div class="choose__item left__item">
          <h2 class="section__title choose__title">Why Choose Us</h2>
          <p class="section__text choose__text">
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for
            us to know what was to be done. the
          </p>

          <div class="why">
            <div class="why__item">
              <div class="why__icon">
                <svg
                  width="46"
                  height="36"
                  viewBox="0 0 46 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="29.5" cy="19.5" r="16.5" fill="#35736E" fill-opacity="0.2" />
                  <path
                    d="M26.6591 27C28.6046 27 30.1818 25.4228 30.1818 23.4773C30.1818 21.5317 28.6046 19.9545 26.6591 19.9545C24.7135 19.9545 23.1364 21.5317 23.1364 23.4773C23.1364 25.4228 24.7135 27 26.6591 27Z"
                    stroke="black"
                    stroke-width="2.81818"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.3409 27C10.2865 27 11.8636 25.4228 11.8636 23.4773C11.8636 21.5317 10.2865 19.9545 8.3409 19.9545C6.39535 19.9545 4.81818 21.5317 4.81818 23.4773C4.81818 25.4228 6.39535 27 8.3409 27Z"
                    stroke="black"
                    stroke-width="2.81818"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.1364 8.68182H28.7727L33 12.9091V19.9546H23.1364V8.68182Z"
                    stroke="black"
                    stroke-width="2.81818"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M23.1364 1.63635H2V19.9545H23.1364V1.63635Z"
                    stroke="black"
                    stroke-width="2.81818"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="why__title">Fast & Free Shipping</div>
              <div class="why__text">
                Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was
              </div>
            </div>

            <div class="why__item">
              <div class="why__icon">
                <svg
                  width="45"
                  height="38"
                  viewBox="0 0 45 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="28.5" cy="21.5" r="16.5" fill="#35736E" fill-opacity="0.2" />
                  <path
                    d="M6 2L2 7.33333V26C2 26.7072 2.28095 27.3855 2.78105 27.8856C3.28115 28.3857 3.95942 28.6667 4.66667 28.6667H23.3333C24.0406 28.6667 24.7189 28.3857 25.219 27.8856C25.719 27.3855 26 26.7072 26 26V7.33333L22 2H6Z"
                    stroke="black"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.3333 12.6666C19.3333 14.0811 18.7714 15.4376 17.7712 16.4378C16.771 17.438 15.4145 17.9999 14 17.9999C12.5855 17.9999 11.2289 17.438 10.2288 16.4378C9.22856 15.4376 8.66666 14.0811 8.66666 12.6666"
                    stroke="black"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 7.33325H26"
                    stroke="black"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="why__title">Easy to Shop</div>
              <div class="why__text">
                Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was
              </div>
            </div>

            <div class="why__item">
              <div class="why__icon">
                <svg
                  width="45"
                  height="33"
                  viewBox="0 0 45 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="28.5" cy="16.5" r="16.5" fill="#35736E" fill-opacity="0.2" />
                  <path
                    d="M14.5 29C21.9558 29 28 22.9558 28 15.5C28 8.04416 21.9558 2 14.5 2C7.04416 2 1 8.04416 1 15.5C1 22.9558 7.04416 29 14.5 29Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.5 20.9C17.4823 20.9 19.9 18.4823 19.9 15.5C19.9 12.5176 17.4823 10.1 14.5 10.1C11.5176 10.1 9.09998 12.5176 9.09998 15.5C9.09998 18.4823 11.5176 20.9 14.5 20.9Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.3204 19.3204L24.0444 25.0444"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.95557 25.0444L10.6796 19.3204"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.3204 11.6796L24.0444 5.95557"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.3204 11.6795L23.0859 6.914"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4.95557 5.95557L10.6796 11.6796"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="why__title">24/7 Support</div>
              <div class="why__text">
                Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was
              </div>
            </div>

            <div class="why__item">
              <div class="why__icon">
                <svg
                  width="43"
                  height="34"
                  viewBox="0 0 43 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="26.5" cy="17.5" r="16.5" fill="#35736E" fill-opacity="0.2" />
                  <path
                    d="M6.11111 30.0001L1 24.8889L6.11111 19.7778"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M24 17.2222V19.7778C24 21.1333 23.4615 22.4334 22.503 23.3919C21.5445 24.3504 20.2444 24.8889 18.8889 24.8889H1"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M18.8889 1.88892L24 7.00003L18.8889 12.1111"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 14.6667V12.1111C1 10.7556 1.53849 9.45553 2.49701 8.49701C3.45553 7.53849 4.75556 7 6.11111 7H24"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="why__title">Hassle Free Returns</div>
              <div class="why__text">
                Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was
              </div>
            </div>
          </div>
        </div>
        <div class="choose__item right__item">
          <img class="why__image" src="../assets/img/why__image.png" alt="why" />

          <svg
            class="why__svg"
            width="262"
            height="176"
            viewBox="0 0 262 176"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse opacity="0.3" cx="4.5" cy="4" rx="4.5" ry="4" fill="#F9BF29" />
            <ellipse opacity="0.3" cx="40.5" cy="4" rx="4.5" ry="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="76" cy="4" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="112" cy="4" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="148" cy="4" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="184" cy="4" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="220" cy="4" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="256" cy="4" r="4" fill="#F9BF29" />
            <ellipse opacity="0.3" cx="4.5" cy="28" rx="4.5" ry="4" fill="#F9BF29" />
            <ellipse opacity="0.3" cx="40.5" cy="28" rx="4.5" ry="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="76" cy="28" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="112" cy="28" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="148" cy="28" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="184" cy="28" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="220" cy="28" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="256" cy="28" r="4" fill="#F9BF29" />
            <ellipse opacity="0.3" cx="4.5" cy="52" rx="4.5" ry="4" fill="#F9BF29" />
            <ellipse opacity="0.3" cx="40.5" cy="52" rx="4.5" ry="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="76" cy="52" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="112" cy="52" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="148" cy="52" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="184" cy="52" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="220" cy="52" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="256" cy="52" r="4" fill="#F9BF29" />
            <ellipse opacity="0.3" cx="4.5" cy="76" rx="4.5" ry="4" fill="#F9BF29" />
            <ellipse opacity="0.3" cx="40.5" cy="76" rx="4.5" ry="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="76" cy="76" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="112" cy="76" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="148" cy="76" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="184" cy="76" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="220" cy="76" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="256" cy="76" r="4" fill="#F9BF29" />
            <ellipse opacity="0.3" cx="4.5" cy="100" rx="4.5" ry="4" fill="#F9BF29" />
            <ellipse opacity="0.3" cx="40.5" cy="100" rx="4.5" ry="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="76" cy="100" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="112" cy="100" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="148" cy="100" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="184" cy="100" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="220" cy="100" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="256" cy="100" r="4" fill="#F9BF29" />
            <ellipse opacity="0.3" cx="4.5" cy="124" rx="4.5" ry="4" fill="#F9BF29" />
            <ellipse opacity="0.3" cx="40.5" cy="124" rx="4.5" ry="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="76" cy="124" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="112" cy="124" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="148" cy="124" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="184" cy="124" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="220" cy="124" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="256" cy="124" r="4" fill="#F9BF29" />
            <ellipse opacity="0.3" cx="4.5" cy="148" rx="4.5" ry="4" fill="#F9BF29" />
            <ellipse opacity="0.3" cx="41.5" cy="148" rx="4.5" ry="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="78" cy="148" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="114" cy="148" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="150" cy="148" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="186" cy="148" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="222" cy="148" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="258" cy="148" r="4" fill="#F9BF29" />
            <ellipse opacity="0.3" cx="4.5" cy="172" rx="4.5" ry="4" fill="#F9BF29" />
            <ellipse opacity="0.3" cx="41.5" cy="172" rx="4.5" ry="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="78" cy="172" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="114" cy="172" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="150" cy="172" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="186" cy="172" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="222" cy="172" r="4" fill="#F9BF29" />
            <circle opacity="0.3" cx="258" cy="172" r="4" fill="#F9BF29" />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>
