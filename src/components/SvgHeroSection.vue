<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
  name: 'HeroSection',
  mounted() {
    const laptopScreen = window.matchMedia('(min-width: 992px)')
    if (laptopScreen.matches) {
      
      gsap.to('.hero__svg', {
        scrollTrigger: {
          trigger: '.section__hero',
          start: '-100 0',
          scrub: true
        },
        scale: 0.5,
        y: 50
      })
    }
    const svg = document.querySelector('.hero__svg')
    svg.onmouseover = () => {
        const circles = document.querySelectorAll('.hero__circle')
        const colors = ['#fffb00', '#578573', '#00ff23', '#fff']
        const rando = () => colors[Math.floor(Math.random() * colors.length)]
        circles.forEach(circle => {
            circle.style.fill = rando()
        })
        }
     svg.addEventListener('mouseout', () => {
            const circles = document.querySelectorAll('.hero__circle')
            circles.forEach(circle => {
                circle.style.fill = '#D9D9D9'
            })
        });
  }
}
</script>

<template>
     <svg
      class="hero__svg"
      width="260"
      height="176"
      viewBox="0 0 260 176"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse class="hero__circle" opacity="0.3" cx="4.5" cy="4" rx="4.5" ry="4" fill="#D9D9D9" />
      <ellipse class="hero__circle" opacity="0.3" cx="40.5" cy="4" rx="4.5" ry="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="76" cy="4" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="112" cy="4" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="148" cy="4" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="184" cy="4" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="220" cy="4" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="256" cy="4" r="4" fill="#D9D9D9" />
      <ellipse class="hero__circle" opacity="0.3" cx="4.5" cy="28" rx="4.5" ry="4" fill="#D9D9D9" />
      <ellipse
        class="hero__circle"
        opacity="0.3"
        cx="40.5"
        cy="28"
        rx="4.5"
        ry="4"
        fill="#D9D9D9"
      />
      <circle class="hero__circle" opacity="0.3" cx="76" cy="28" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="112" cy="28" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="148" cy="28" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="184" cy="28" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="220" cy="28" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="256" cy="28" r="4" fill="#D9D9D9" />
      <ellipse class="hero__circle" opacity="0.3" cx="4.5" cy="52" rx="4.5" ry="4" fill="#D9D9D9" />
      <ellipse
        class="hero__circle"
        opacity="0.3"
        cx="40.5"
        cy="52"
        rx="4.5"
        ry="4"
        fill="#D9D9D9"
      />
      <circle class="hero__circle" opacity="0.3" cx="76" cy="52" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="112" cy="52" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="148" cy="52" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="184" cy="52" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="220" cy="52" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="256" cy="52" r="4" fill="#D9D9D9" />
      <ellipse class="hero__circle" opacity="0.3" cx="4.5" cy="76" rx="4.5" ry="4" fill="#D9D9D9" />
      <ellipse
        class="hero__circle"
        opacity="0.3"
        cx="40.5"
        cy="76"
        rx="4.5"
        ry="4"
        fill="#D9D9D9"
      />
      <circle class="hero__circle" opacity="0.3" cx="76" cy="76" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="112" cy="76" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="148" cy="76" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="184" cy="76" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="220" cy="76" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="256" cy="76" r="4" fill="#D9D9D9" />
      <ellipse
        class="hero__circle"
        opacity="0.3"
        cx="4.5"
        cy="100"
        rx="4.5"
        ry="4"
        fill="#D9D9D9"
      />
      <ellipse
        class="hero__circle"
        opacity="0.3"
        cx="40.5"
        cy="100"
        rx="4.5"
        ry="4"
        fill="#D9D9D9"
      />
      <circle class="hero__circle" opacity="0.3" cx="76" cy="100" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="112" cy="100" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="148" cy="100" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="184" cy="100" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="220" cy="100" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="256" cy="100" r="4" fill="#D9D9D9" />
      <ellipse
        class="hero__circle"
        opacity="0.3"
        cx="4.5"
        cy="124"
        rx="4.5"
        ry="4"
        fill="#D9D9D9"
      />
      <ellipse
        class="hero__circle"
        opacity="0.3"
        cx="40.5"
        cy="124"
        rx="4.5"
        ry="4"
        fill="#D9D9D9"
      />
      <circle class="hero__circle" opacity="0.3" cx="76" cy="124" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="112" cy="124" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="148" cy="124" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="184" cy="124" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="220" cy="124" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="256" cy="124" r="4" fill="#D9D9D9" />
      <ellipse
        class="hero__circle"
        opacity="0.3"
        cx="4.5"
        cy="148"
        rx="4.5"
        ry="4"
        fill="#D9D9D9"
      />
      <ellipse
        class="hero__circle"
        opacity="0.3"
        cx="40.5"
        cy="148"
        rx="4.5"
        ry="4"
        fill="#D9D9D9"
      />
      <circle class="hero__circle" opacity="0.3" cx="76" cy="148" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="112" cy="148" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="148" cy="148" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="184" cy="148" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="220" cy="148" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="256" cy="148" r="4" fill="#D9D9D9" />
      <ellipse
        class="hero__circle"
        opacity="0.3"
        cx="4.5"
        cy="172"
        rx="4.5"
        ry="4"
        fill="#D9D9D9"
      />
      <ellipse
        class="hero__circle"
        opacity="0.3"
        cx="40.5"
        cy="172"
        rx="4.5"
        ry="4"
        fill="#D9D9D9"
      />
      <circle class="hero__circle" opacity="0.3" cx="76" cy="172" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="112" cy="172" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="148" cy="172" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="184" cy="172" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="220" cy="172" r="4" fill="#D9D9D9" />
      <circle class="hero__circle" opacity="0.3" cx="256" cy="172" r="4" fill="#D9D9D9" />
    </svg>
</template>