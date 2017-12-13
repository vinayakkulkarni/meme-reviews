<template>
  <div id="app" class="Site">
    <section class="hero is-medium is-warning is-bold Site-content">
      <div class="hero-body">
        <div class="container is-fluid">
          <div class="content has-text-centered">
            <main>
              <img src="./assets/logo.png" alt="MEME 👏 REVIEWS">
              <router-view></router-view>
            </main>
          </div>
        </div>
      </div>
    </section>
    <footer class="footer" style="padding: 3rem 1.5rem;">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>MEME 👏 REVIEWS 👏</strong> Made with ❤️
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>
<style lang="sass" src="bulma"></style>
<style scoped>
.Site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.Site-content {
  flex: 1;
}
</style>
