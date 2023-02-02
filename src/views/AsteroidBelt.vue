
<script setup>
import  NavBar from "../components/NavBar.vue";
</script>

<template>
<NavBar class="z-10" />
    <div class="carousel  h-screen w-screen">
        
  <div id="slide1" class="carousel-item relative w-full">
    <img src="https://images.immediate.co.uk/production/volatile/sites/25/2021/02/GettyImages-183097871-f4941a3.jpg" 
    class="object-contain m-auto" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 

  <div id="slide2" class="carousel-item relative w-full">
    <div class="flex   justify-evenly gap-6 mr-20 ml-20 mt-36">
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Asteroids-KnownNearEarthObjects-Animation-UpTo20180101.gif"
     class="h-1/2 " />
     <p> 
        The asteroid belt is a torus-shaped region in the Solar System, centered on the Sun and roughly spanning the space between the orbits of the planets Jupiter and Mars.
        It contains a great many solid, irregularly shaped bodies called asteroids or minor planets. The identified objects are of many sizes, but much smaller than planets.
        The asteroid belt formed from the primordial solar nebula as a group of planetesimals.
        Planetesimals are the smaller precursors of the protoplanets. Between Mars and Jupiter, however, gravitational perturbations from Jupiter imbued the protoplanets with too much orbital energy for them to accrete into a planet.
    </p>
    </div>
   
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <div class="flex   justify-evenly gap-6 mr-20 ml-20 mt-36"> 
        <img src="https://scitechdaily.com/images/Interstellar-Asteroids.gif" class="h-1/2" />
        <P> The asteroid belt is the smallest and innermost known circumstellar disc in the Solar System.
             Classes of small Solar System bodies in other regions are the near-Earth objects, the centaurs, the Kuiper belt objects, the scattered disc objects, the sednoids, and the Oort cloud objects. About 60% of the main belt mass is contained in the four largest asteroids: Ceres, Vesta, Pallas, and Hygiea. 
             The total mass of the asteroid belt is calculated to be 3% that of the Moon.</P>
    </div> 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div> 
  
</div>
</template>