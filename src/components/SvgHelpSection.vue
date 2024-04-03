<script>

export default {
    name: 'SvgHelpSection',
    mounted() {
    this.$nextTick(() => {
       const svg = document.querySelector('.help__svg');
      const circles = document.querySelectorAll('.help__svg circle');

        const initialPositions = [];
        circles.forEach((circle, index) => {
            initialPositions[index] = {
                x: circle.getAttribute('cx'),
                y: circle.getAttribute('cy')
            };
        });

        svg.addEventListener('mouseover', () => {
            circles.forEach(circle => {
                const maxX = 100;
                const maxY = 100; 
                const randomX = Math.floor(Math.random() * maxX) - (maxX / 2); 
                const randomY = Math.floor(Math.random() * maxY) - (maxY / 2); 
                circle.style.transition = 'transform 1s ease';
                circle.style.transform = `translate(${randomX}px, ${randomY}px)`;
            });
        });

        svg.addEventListener('mouseout', () => {
            circles.forEach((circle, index) => {
                circle.style.transition = 'transform 1s ease';
                circle.style.transform = `translate(0, 0)`;
                circle.setAttribute('cx', initialPositions[index].x);
                circle.setAttribute('cy', initialPositions[index].y);
            });
        });
    });
    }
}
</script>

<template>
    <svg
          class="help__svg"
          width="262"
          height="176"
          viewBox="0 0 262 176"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle opacity="0.3" cx="4.5" cy="4"  r="4" fill="#35736E" />
          <circle opacity="0.3" cx="40.5" cy="4"  r="4" fill="#35736E" />
          <circle opacity="0.3" cx="76" cy="4" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="112" cy="4" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="148" cy="4" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="184" cy="4" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="220" cy="4" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="256" cy="4" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="4.5" cy="28"  r="4" fill="#35736E" />
          <circle opacity="0.3" cx="40.5" cy="28"  r="4" fill="#35736E" />
          <circle opacity="0.3" cx="76" cy="28" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="112" cy="28" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="148" cy="28" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="184" cy="28" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="220" cy="28" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="256" cy="28" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="4.5" cy="52"  r="4" fill="#35736E" />
          <circle opacity="0.3" cx="40.5" cy="52"  r="4" fill="#35736E" />
          <circle opacity="0.3" cx="76" cy="52" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="112" cy="52" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="148" cy="52" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="184" cy="52" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="220" cy="52" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="256" cy="52" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="4.5" cy="76"  r="4" fill="#35736E" />
          <circle opacity="0.3" cx="40.5" cy="76"  r="4" fill="#35736E" />
          <circle opacity="0.3" cx="76" cy="76" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="112" cy="76" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="148" cy="76" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="184" cy="76" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="220" cy="76" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="256" cy="76" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="4.5" cy="100"  r="4" fill="#35736E" />
          <circle opacity="0.3" cx="40.5" cy="100"  r="4" fill="#35736E" />
          <circle opacity="0.3" cx="76" cy="100" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="112" cy="100" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="148" cy="100" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="184" cy="100" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="220" cy="100" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="256" cy="100" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="4.5" cy="124"  r="4" fill="#35736E" />
          <circle opacity="0.3" cx="40.5" cy="124"  r="4" fill="#35736E" />
          <circle opacity="0.3" cx="76" cy="124" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="112" cy="124" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="148" cy="124" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="184" cy="124" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="220" cy="124" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="256" cy="124" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="4.5" cy="148"  r="4" fill="#35736E" />
          <circle opacity="0.3" cx="41.5" cy="148"  r="4" fill="#35736E" />
          <circle opacity="0.3" cx="78" cy="148" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="114" cy="148" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="150" cy="148" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="186" cy="148" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="222" cy="148" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="258" cy="148" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="4.5" cy="172"  r="4" fill="#35736E" />
          <circle opacity="0.3" cx="41.5" cy="172"  r="4" fill="#35736E" />
          <circle opacity="0.3" cx="78" cy="172" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="114" cy="172" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="150" cy="172" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="186" cy="172" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="222" cy="172" r="4" fill="#35736E" />
          <circle opacity="0.3" cx="258" cy="172" r="4" fill="#35736E" />
        </svg>
</template>
