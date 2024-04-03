<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'SubscribeSection',
  mounted() {
    const laptopScreen = window.matchMedia('(min-width: 992px)')
    if (laptopScreen.matches) {
      const tlSub = gsap.timeline()
      tlSub
      .from('.subscribe__image', {
        scrollTrigger: {
          trigger: '.section__subscribe',
          start: 'top bottom',
          scrub: 1
        },
        x: 120,
        y: -30
      })
      .from('.subscribe__svg', {
        scrollTrigger: {
          trigger: '.section__subscribe',
          start: 'top bottom',
          scrub: 1,
          end: '+=100'
        },
        scale: 0
      })
       .from('.subscribe__span', {
        scrollTrigger: {
          trigger: '.section__subscribe',
          start: 'top bottom',
          scrub: 1,
          end: '+=140'
        },
        y: 20,
        autoAlpha: 0
      })
      .from('.form__item', {
        scrollTrigger: {
          trigger: '.section__subscribe',
          start: '50% bottom',
          scrub: 1,
          end: '+=100'
        },
        y: 120,
        stagger: 0.3
      })
    }
  }
}
</script>

<template>
  <section class="section__subscribe">
    <div class="container">
      <div class="subscribe">
        <img class="subscribe__image" src="../assets/img/subscribe__image.png" alt="img" />
        <div class="subscribe__title">
          <svg
            class="subscribe__svg"
            width="22"
            height="27"
            viewBox="0 0 22 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="22" height="25.7575" transform="translate(0 0.444092)" fill="white" />
            <path
              d="M0 6.8835C0 5.10513 1.23105 3.66382 2.75 3.66382H19.25C20.7668 3.66382 22 5.10513 22 6.8835V19.7622C22 21.5381 20.7668 22.9819 19.25 22.9819H2.75C1.23105 22.9819 0 21.5381 0 19.7622V6.8835ZM2.0625 6.8835V7.9953L9.47461 15.1188C10.3598 15.9741 11.6402 15.9741 12.5254 15.1188L19.9375 7.9953V6.83822C19.9375 6.44079 19.6281 6.0333 19.25 6.0333H2.75C2.37016 6.0333 2.0625 6.44079 2.0625 6.83822V6.8835ZM2.0625 11.1194V19.7622C2.0625 20.2049 2.37016 20.5672 2.75 20.5672H19.25C19.6281 20.5672 19.9375 20.2049 19.9375 19.7622V11.1194L13.8359 16.9853C12.1859 18.5699 9.81406 18.5699 8.12539 16.9853L2.0625 11.1194Z"
              fill="#CFCFCF"
            />
          </svg>
          <span class="subscribe__span">Subscribe to Newsletter</span>
        </div>

        <div class="form">
          <input type="text" class="form__input form__item" placeholder="Enter your name" />
          <input type="email" class="form__input form__item" placeholder="Enter your e-mail" />
          <button type="submit" class="form__btn form__item">
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_471)">
                <path
                  d="M28.213 0.985414C28.7851 1.36365 29.0853 2.01746 28.9777 2.67128L25.3527 25.1494C25.2677 25.6736 24.9335 26.1328 24.4464 26.3922C23.9593 26.6516 23.3759 26.684 22.8605 26.4787L15.7068 23.6419L13.4355 27.6674C13.141 28.1915 12.5123 28.4563 11.9062 28.3104C11.3002 28.1645 10.8753 27.6458 10.8753 27.0514V21.8642C10.8753 21.5778 10.9773 21.2968 11.1642 21.0699L20.5269 9.58223C20.6685 9.19859 20.1587 8.80954 19.7906 9.12834L9.65191 17.8765L7.83941 19.438C7.31832 19.8865 6.57632 20.0108 5.92496 19.7514L1.1105 17.8386C0.476128 17.5847 0.0456594 17.0119 0.00601093 16.3527C-0.0336375 15.6935 0.317534 15.0721 0.917925 14.7425L26.2929 0.909767C26.899 0.580159 27.6466 0.61258 28.2187 0.985414H28.213Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_471">
                  <rect
                    width="29"
                    height="27.6654"
                    fill="white"
                    transform="translate(0 0.682861)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span>Submit</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
