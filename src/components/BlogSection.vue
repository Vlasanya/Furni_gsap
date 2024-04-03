<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'BlogSection',
  mounted() {
    const laptopScreen = window.matchMedia('(min-width: 992px)')
    if (laptopScreen.matches) {
      const tlBlog = gsap.timeline()
      tlBlog
      .from('.section__blog-title', {
        scrollTrigger: {
          trigger: '.section__blog',
          start: '0 center',
          scrub: true,
          end: '+=150'
        },
        css: {
          xPercent: -100,
          backgroundColor: '#3b5d50',
          color: '#3b5d50'
        }
      })
      .from('.blog__img img', {
        scrollTrigger: {
          trigger: '.section__blog',
          start: '0 center',
          scrub: true,
          end: '+=250'
        },
        transformOrigin: '50% 50%',
          scale: 0
      })
      .from('.blog__title', {
        scrollTrigger: {
          trigger: '.section__blog',
          start: '0 center',
          scrub: true,
          end: '+=250'
        },
        autoAlpha: 0,
        y: -250
      })
      .from('.blog__info', {
        scrollTrigger: {
          trigger: '.section__blog',
          start: '0 center',
          scrub: true,
          end: '+=250'
        },
        autoAlpha: 0,
        x: -350,
        stagger: 0.5
      })
      .from('.blog__link', {
        scrollTrigger: {
          trigger: '.section__blog',
          start: '0 350',
          scrub: true,
          end: '+=250'
        },
        x: 250,
        autoAlpha: 0
      })
      
    }
  }
}
</script>

<template>
     <section class="section__blog">
        <div class="container">
          <div class="blog__header">
            <h2 class="section__title section__blog-title">Recent Blog</h2>
            <a href="#" class="blog__link">View All Posts</a>
          </div>

          <div class="blog">
            <a href="#" class="blog__item">
              <div class="blog__img">
                <img src="../assets/img/blog-1.jpg" alt="img" />
              </div>
              <div class="blog__title">First Time Home Owner Ideas</div>
              <div class="blog__info"><span>by</span> Nana Ama <span>on</span> Nov 18th, 2022</div>
            </a>

            <a href="#" class="blog__item">
              <div class="blog__img">
                <img src="../assets/img/blog-2.jpg" alt="img" />
              </div>
              <div class="blog__title">First Time Home Owner Ideas</div>
              <div class="blog__info"><span>by</span> Nana Ama <span>on</span> Nov 18th, 2022</div>
            </a>

            <a href="#" class="blog__item">
              <div class="blog__img">
                <img src="../assets/img/blog-3.jpg" alt="img" />
              </div>
              <div class="blog__title">First Time Home Owner Ideas</div>
              <div class="blog__info"><span>by</span> Nana Ama <span>on</span> Nov 18th, 2022</div>
            </a>
          </div>
        </div>
      </section>
</template>