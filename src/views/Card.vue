<script setup>
import BackHome from '../components/BackHome.vue';
import NavBar from '../components/NavBar.vue';


</script>

<template>
    <NavBar />
   <div class=" flex flex-col items-center justify-center h-fit  m-2 ">
    <router-link to="/planet" > 
        <BackHome class="absolute top-0 left-1/2" /> 
      </router-link>
    <div >
        <img src="https://media1.giphy.com/media/l0HlO4V8iCRME3i0g/giphy.gif?cid=ecf05e47ku6tndqpwjvvt2huwna3xrxmuqqvspyqcys93612&rid=giphy.gif&ct=g" 
      alt="Mercury" class="w-96">
    </div>
    <div class=" ml-5 container flex flex-col  items-center p-4 text-left h-80 
    bg-base-300 ">
        <h2 class="text-2xl font-bold font-serif">
            Mercury
        </h2>
        <p class="p-6 ">
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
    <div class=" ml-5 container flex flex-col  items-center p-4 text-left h-80 
    bg-base-300 ">
        <h3 class="text-2xl font-bold font-serif">Neptune Facts</h3>
        <p class="p-6 ">Average temperature: -201°C (-331°F) where atmospheric pressure equals sea level on Earth
            Average distance from Sun: 4,495 million kilometers (2,793 million miles), or 30 times farther from the Sun than Earth
            Diameter: 49,528 kilometers (30,775 miles), Neptune is 3.9 times wider than Earth
            Volume: 63 trillion km3 (15 trillion mi3), Earth could fit inside Neptune 63 times
            Gravity: 11 m/s², or 1.1 times that of Earth’s
            Solar day: 16 Earth hours
            Solar year: 60,190 Earth days
            Atmosphere: 80% hydrogen, 19% helium, 1% other gases
            Neptune is about four times wider than Earth. If Earth were a large apple, Neptune would be the size of a basketball.
            Neptune orbits our Sun, a star, and is the eighth planet from the Sun at a distance of about 2.8 billion miles (4.5 billion kilometers).
        </p>
    </div>
   
   
   </div>
</template>