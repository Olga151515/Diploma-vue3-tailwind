<script setup>
defineProps(["planet"]);
</script>

<template>
  <div class="text-2xl  md:text-lg navbar bg-black fixed top-0 w-full z-50">
    <div class="flex-1"></div>

    <div class="flex-none   font-semibold text-cyan-100">
      <ul class="menu menu-horizontal">
        <router-link to="/">
          <li><a>
            <i class="fa-solid fa-house md:hidden "></i>
            <p class="hidden md:block">Home</p>  
          </a></li>
        </router-link>
        <router-link to="/about">
          <li><a>
            <i class="fa-solid fa-magnifying-glass md:hidden t"></i>
            <p class="hidden md:block">About</p>  
           </a></li>
        </router-link>
        <li tabindex="0">
          <router-link to="/planet">
            <a class="flex gap-1 items-center  ">
              <i class="fa-solid fa-earth-americas md:hidden "></i>
            <p class="hidden md:block">Planets</p>  
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
                />
              </svg>
            </a>
          </router-link>

          <ul class="p-2 bg-base-100 z-10 text-lg md:text-xl">
            <router-link to="/card/mercury">
              <li><a>Mercury</a></li>
            </router-link>

            <router-link to="/card/venus">
              <li><a>Venus</a></li>
            </router-link>

            <router-link to="/card/earth">
              <li><a>Earth</a></li>
            </router-link>

            <router-link to="/card/mars">
              <li><a>Mars</a></li>
            </router-link>

            <router-link to="/card/jupiter">
              <li><a>Jupiter</a></li>
            </router-link>

            <router-link to="/card/saturn">
              <li><a>Saturn</a></li>
            </router-link>

            <router-link to="/card/uranus">
              <li><a>Uranus</a></li>
            </router-link>

            <router-link to="/card/neptune">
              <li><a>Neptune</a></li>
            </router-link>
          </ul>
        </li>
        <router-link to="/asteroidBelt">
          <li><a>
            <i class="fa-solid fa-meteor md:hidden"></i>
            <p class="hidden md:block">Asteroid Belt</p>      
          </a></li>
        </router-link>

        <router-link to="/gallery">
          <li>
            <a>
              <p class="hidden md:block">Gallery</p>
              <img
                class="w-9 "
                src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"
                alt="NASA"
            /></a>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>
