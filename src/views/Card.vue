<script setup>
import BackHome from '../components/BackHome.vue';


</script>

<template>
    
   <div class="container flex flex-col items-center justify-center gap-4 m-2 ">
    <router-link to="/planet" > 
        <BackHome class="absolute top-0 left-1/2" /> 
      </router-link>
    <div class="mt-12">
        <img src="https://media1.giphy.com/media/l0HlO4V8iCRME3i0g/giphy.gif?cid=ecf05e47ku6tndqpwjvvt2huwna3xrxmuqqvspyqcys93612&rid=giphy.gif&ct=g" 
      alt="Mercury">
    </div>
    <div class=" ml-5 container flex flex-col  items-center p-4 text-left h-80 outline-double ">
        <h2 class="text-2xl font-bold font-serif">
            Mercury
        </h2>
        <p class="p-10 ">
            Mercury is the smallest planet in the Solar System and the closest to the Sun. 
            Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. 
            It is named after the Roman god Mercurius (Mercury), god of commerce, messenger of the gods, 
            and mediator between gods and mortals, corresponding to the Greek god Hermes (Ἑρμῆς). 
            Like Venus, Mercury orbits the Sun within Earth's orbit as an inferior planet, 
            and its apparent distance from the Sun as viewed from Earth never exceeds 28°.
             This proximity to the Sun means the planet can only be seen near the western horizon after sunset 
             or the eastern horizon before sunrise, usually in twilight. At this time, it may appear as a bright 
             star-like object, but is more difficult to observe than Venus. From Earth, the planet telescopically 
             displays the complete range of phases, similar to Venus and the Moon, which recurs over its synodic 
             period of approximately 116 days. The synodic proximity of Mercury to Earth makes Mercury most of the 
             time Earth's closest planet, despite Venus at times approaching Earth closer than any other planet can.

            Mercury rotates in a way that is unique in the Solar System. 
            It is tidally locked with the Sun in a 3:2 spin–orbit resonance, meaning that relative to the fixed stars, 
            it rotates on its axis exactly three times for every two revolutions it makes around the Sun.
            
        </p>
    </div>
   
   
   </div>
</template>