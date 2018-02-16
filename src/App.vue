<template>
  <div id="app">
    <div class="Site" v-if="$route.name !== 'signup'">
      <top-navbar :user="user" :signedIn="signedIn" @signOut="signOut"></top-navbar>
      <section class="hero is-fullheight is-light is-bold Site-content">
        <div class="hero-body">
          <div class="container is-fluid">
            <div class="content">
              <main>
                <router-view :signedIn="signedIn" :user="user"></router-view>
              </main>
            </div>
          </div>
        </div>
      </section>
      <bottom-footer></bottom-footer>
    </div>
    <div style="height: 100vh; width: 100vw;" v-else>
      <router-view :signedIn="signedIn" :user="user"></router-view>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import db from './firebase';
import TopNavbar from './components/_partials/TopNavbar';
import BottomFooter from './components/_partials/BottomFooter';

export default {
  name: 'app',
  components: {
    TopNavbar,
    BottomFooter,
  },
  firebase: {
    memes: db.ref('memes'),
  },
  data() {
    return {
      user: {},
      signedIn: false,
    };
  },
  mounted() {
    const t = this;
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        t.user = user;
        t.signedIn = true;
      } else {
        t.signedIn = false;
      }
    });
  },
  methods: {
    signOut() {
      const t = this;
      firebase
        .auth()
        .signOut()
        .then(() => {
          t.signedIn = false;
        })
        .catch((error) => {
          t.errors = error;
        });
    },
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
