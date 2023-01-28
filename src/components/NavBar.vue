<script setup>
import BackHome from "./BackHome.vue";
</script>

<template>
  <div class="navbar">
    <div class="flex-1"></div>

    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <router-link to="/">
          <li><a>Home</a></li>
        </router-link>
        <router-link to="/about">
          <li><a>About</a></li>
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

          <ul class="p-2 bg-base-100">
            <router-link to="/card/mercury">
              <li><a>Mercury</a></li>
            </router-link>
            <li><a>Vinus</a></li>
            <li><a>Earth</a></li>
            <li><a>Mars</a></li>
            <li><a>Jupiter</a></li>
            <li><a>Saturn</a></li>
            <li><a>Uranus</a></li>
            <li><a>Neptune</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
