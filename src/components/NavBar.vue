

<template>
  <div class="navbar">
    <div class="flex-1"></div>

    <div class="flex-none text-slate-400 font-semibold">
      <ul class="menu menu-horizontal px-1">
        <router-link to="/">
          <li><a >Home  </a></li>
        </router-link>
        <router-link to="/about">
          <li><a>About </a></li>
        </router-link>
        <li tabindex="0">
          <router-link to="/planet">
            <a class="flex gap-2 items-center">
              Planets
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

          <ul class="p-2 bg-base-100 z-10">
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
          <li><a>Asteroid Belt</a></li>
        </router-link>
        
        <router-link to="/gallery">
          <li><a>Gallery</a></li>
        </router-link>

      </ul>
    </div>
  </div>
</template>
