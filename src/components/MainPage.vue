<script>
import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

import '../css/style.css'
import LoaderComponent from './LoaderComponent.vue'
import HeaderComponent from './HeaderComponent.vue'
import HeroSection from './HeroSection.vue'
import MaterialsSection from './MaterialsSection.vue'
import ChooseSection from './ChooseSection.vue'
import HelpSection from './HelpSection.vue'
import ExamplesSection from './ExamplesSection.vue'
import TestimonialsSection from './TestimonialsSection.vue'
import BlogSection from './BlogSection.vue'
import SubscribeSection from './SubscribeSection.vue'
import FooterComponent from './FooterComponent.vue'


export default {
  name: 'MainPage',
  components: {
    LoaderComponent,
    HeaderComponent,
    HeroSection,
    MaterialsSection,
    ChooseSection,
    HelpSection,
    ExamplesSection,
    TestimonialsSection,
    BlogSection,
    SubscribeSection,
    FooterComponent
  }
}
</script>

<template>
  <div class="main__body">
    <LoaderComponent />
    <!-- Header -->
    <HeaderComponent />
    <!-- Main Page -->
    <main>
      <!-- Section Hero -->
      <HeroSection />

      <!-- Section Materials -->
      <MaterialsSection />

      <!-- Section Choose -->
      <ChooseSection />

      <!-- Section Help -->
      <HelpSection />

      <!-- Section Examples -->
      <ExamplesSection />
      

      <!-- Section Testimonials -->
      <TestimonialsSection />

      <!-- Section Blog -->
      <BlogSection />
     

      <!-- Section Subscibe -->
      <SubscribeSection />
    </main>
    <!-- Footer -->
    <FooterComponent />
    
  </div>
</template>
