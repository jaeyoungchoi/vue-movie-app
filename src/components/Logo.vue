<template>
  <RouterLink
    to="/"
    class="logo">
    OMDbAPI<span>.COM</span>
  </RouterLink>
</template>

<style lang="scss" scoped>
@import "../scss/main";
.logo{
    font-family: 'Oswald', sans-serif;
    font-size: 20px;
    color: $primary;
    text-decoration: none;
    span{
        color: $black;
    }
}
</style>