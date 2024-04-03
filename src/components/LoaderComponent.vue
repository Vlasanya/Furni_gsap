<script>
import { gsap } from 'gsap'
// import { CustomWiggle } from 'gsap/CustomWiggle'
// import { CustomEase } from 'gsap/CustomEase'
// gsap.registerPlugin(CustomEase, CustomWiggle)

export default {
  name: 'LoaderComponent',
  mounted() {
    this.$nextTick(() => {
      const tlLoader = gsap.timeline()
      // CustomWiggle.create("myWiggle", {
      //   wiggles: 5,
      //   type: 'easeInOut'
      // });
      tlLoader
        .set('.loader__item', { yPercent: -100 })
        .set('.loader__title', { opacity: 0 })
        .to('.loader__item', {
          yPercent: 0,
          duration: 0.5,
          stagger: 0.25
        })
        .to('.loader__item', {
          yPercent: 100,
          duration: 0.5,
          stagger: 0.25
        })
        .to('.loader__title', {
          opacity: 1,
          duration: 1,
          scale: 1.2
        })
        .set('.loader__item', { yPercent: -100 })
        .to('.loader__title', {
          opacity: 0,
          duration: 3,
          scale: 0.8
        })
        .to(
          '.loader',
          {
            yPercent: -100,
            duration: 2
          },
          '-=0.25'
        )
      //   gsap.to('.loader__dot circle', {
      //     duration: 2.5,
      //     ease: "myWiggle",
      //     y: -250
      //     });
      gsap.from('.loader__dot', {
        y: -20,
        ease: 'bounce.out',
        duration: 3,
        stagger: {
          repeat: -1,
          each: 0.
        }
      })
    })
  }
}
</script>

<template>
  <div class="loader">
    <div class="loader__title">
      furni
      <span class="loader__dot-container">
        <svg
          class="loader__dot"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="4" cy="4" r="4" fill="#323232" />
        </svg>
      </span>
    </div>
    <div class="loader__item loader__item-1"></div>
    <div class="loader__item loader__item-2"></div>
    <div class="loader__item loader__item-3"></div>
  </div>
</template>

<style>
.loader {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 5;
  display: flex;
}
.loader__title {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 38px;
  z-index: 6;
  color: #3b5d50;
  display: flex;
}
.loader__dot,
.loader__dot-container {
  overflow: visible;
}
.loader__item {
  flex: 1 1 auto;
  z-index: 7;
  background: #3b5d50;
}
.loader__item-1 {
  border-right: 1px solid #323232;
}
.loader__item-2 {
  border-right: 1px solid #323232;
}
</style>
