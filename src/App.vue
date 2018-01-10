<template>
  <div id="app" class="Site">
    <top-navbar :user="user" :signedIn="signedIn" @signOut="signOut"></top-navbar>
    <section class="hero is-fullheight is-light is-bold Site-content">
      <div class="hero-body">
        <div class="container is-fluid">
          <div class="content">
            <main>
              <router-view></router-view>
            </main>
          </div>
        </div>
      </div>
    </section>
    <bottom-footer></bottom-footer>
  </div>
</template>

<script>
import BottomFooter from './components/_partials/BottomFooter';
export default {
  name: 'app',
  components: {
    TopNavbar,
    BottomFooter,
  },
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
