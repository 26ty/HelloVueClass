<!--root component-->

<!--script-->
<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<!--template-->
<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <!--HelloWorld.vue-->
      <HelloWorld msg="You did it!你成功了！" />
    </div>
  </header>

  <main>
    <!--TheWelcome.vue ->> WelcomeItem.vue-->
    <TheWelcome />
  </main>
</template>

<!--style scoped用於限制樣式範圍於單一檔案中-->
<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
