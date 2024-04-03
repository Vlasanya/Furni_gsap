<script>
import { ref } from 'vue'
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, } from 'swiper/modules'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'TestimonialsSection',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const swiperInstance = ref(null);

  const onSwiper = (swiper) => {
    swiperInstance.value = swiper;
  };

  const nextSlide = () => {
    swiperInstance.value.slideNext();
  };

  const prevSlide = () => {
    swiperInstance.value.slidePrev();
  };
    return {
       onSwiper,
    nextSlide,
    prevSlide,
      modules: [Navigation, Pagination, Autoplay],
    }
  },
  mounted() {
    const laptopScreen = window.matchMedia('(min-width: 992px)')
    if (laptopScreen.matches) {
      const tlTestimonials = gsap.timeline()
      tlTestimonials
        .from('.section__testimonials', {
          scrollTrigger: {
            trigger: '.section__testimonials',
            start: '0 center',
            scrub: true,
            end: '+=150'
          },
          css: {
            backgroundColor: '#578573'
          }
        })
        .from('.section__testimonials .testimonials__text', {
          scrollTrigger: {
            trigger: '.section__testimonials',
            start: '0 center',
            scrub: true,
            end: '+=150'
          },
          css: {
            color: '#fff'
          }
        })
        .from('.section__testimonials .testimonials__title', {
          scrollTrigger: {
            trigger: '.section__testimonials',
            start: '0 center',
            scrub: true,
            end: '+=150'
          },
          css: {
            color: '#fff'
          }
        })
    }
  }
}
</script>

<template>
  <section class="section__testimonials">
    <div class="container">
      <h2 class="section__title testimonials__title text__center">Testimonials</h2>
      <div class="slider__wrapper">
        <div class="swiper swiper__testimonials">
          <swiper
            class="swiper-wrapper"
            :modules="modules"
            :slides-per-view="1"
            :space-between="50"
            navigation
            :pagination="{ clickable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
             :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :loop="true"
          >
          
            <!-- Slides -->
            <swiper-slide class="swiper-slide testimonials__slide">
              <div class="testimonials__text">
                ‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam. Mauris accumsan
                felis fermentum euismod egestas. Mauris ante augue, cursus sit amet arcu a, maximus
                suscipit nibh. Integer vel nibh tellus. Pellentesque in risus non dui venenatis
                sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at molestie odio accumsan non.
                Pellentesque ma’’
              </div>
              <div class="testimonials__avatar">
                <img src="../assets/img/person.jpg" alt="person" />
              </div>
              <div class="testimonials__name">Michelle Anna</div>
              <div class="testimonials__position">CEO, Co-Founder, XYZ Inc.</div>
            </swiper-slide>

            <swiper-slide class="swiper-slide testimonials__slide">
              <div class="testimonials__text">
                ‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam. Mauris accumsan
                felis fermentum euismod egestas. Mauris ante augue, cursus sit amet arcu a, maximus
                suscipit nibh. Integer vel nibh tellus. Pellentesque in risus non dui venenatis
                sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at molestie odio accumsan non.
                Pellentesque ma’’
              </div>
              <div class="testimonials__avatar">
                <img src="../assets/img/person.jpg" alt="person" />
              </div>
              <div class="testimonials__name">Michelle Anna</div>
              <div class="testimonials__position">CEO, Co-Founder, XYZ Inc.</div>
            </swiper-slide>

            <swiper-slide class="swiper-slide testimonials__slide">
              <div class="testimonials__text">
                ‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam. Mauris accumsan
                felis fermentum euismod egestas. Mauris ante augue, cursus sit amet arcu a, maximus
                suscipit nibh. Integer vel nibh tellus. Pellentesque in risus non dui venenatis
                sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at molestie odio accumsan non.
                Pellentesque ma’’
              </div>
              <div class="testimonials__avatar">
                <img src="../assets/img/person.jpg" alt="person" />
              </div>
              <div class="testimonials__name">Michelle Anna</div>
              <div class="testimonials__position">CEO, Co-Founder, XYZ Inc.</div>
            </swiper-slide>

            <swiper-slide class="swiper-slide testimonials__slide">
              <div class="testimonials__text">
                ‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam. Mauris accumsan
                felis fermentum euismod egestas. Mauris ante augue, cursus sit amet arcu a, maximus
                suscipit nibh. Integer vel nibh tellus. Pellentesque in risus non dui venenatis
                sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at molestie odio accumsan non.
                Pellentesque ma’’
              </div>
              <div class="testimonials__avatar">
                <img src="../assets/img/person.jpg" alt="person" />
              </div>
              <div class="testimonials__name">Michelle Anna</div>
              <div class="testimonials__position">CEO, Co-Founder, XYZ Inc.</div>
            </swiper-slide>

            <swiper-slide class="swiper-slide testimonials__slide">
              <div class="testimonials__text">
                ‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam. Mauris accumsan
                felis fermentum euismod egestas. Mauris ante augue, cursus sit amet arcu a, maximus
                suscipit nibh. Integer vel nibh tellus. Pellentesque in risus non dui venenatis
                sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at molestie odio accumsan non.
                Pellentesque ma’’
              </div>
              <div class="testimonials__avatar">
                <img src="../assets/img/person.jpg" alt="person" />
              </div>
              <div class="testimonials__name">Michelle Anna</div>
              <div class="testimonials__position">CEO, Co-Founder, XYZ Inc.</div>
            </swiper-slide>
          </swiper>
          <!-- If we need pagination -->
          <div class="swiper-pagination"></div>
        </div>

        <!-- If we need navigation buttons -->
        <button class="slider__btn prev__btn" @click="prevSlide">
          <svg
            width="10"
            height="20"
            viewBox="0 0 10 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="slider__btn-path"
              d="M9 18.43L1 10.1164L9 1.80273"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button class="slider__btn next__btn" @click="nextSlide">
          <svg
            width="10"
            height="20"
            viewBox="0 0 10 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="slider__btn-path"
              d="M1 18.43L9 10.1164L1 1.80273"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
 ::v-deep .swiper-button-next, ::v-deep .swiper-button-prev {
  display: none;
 }
</style>