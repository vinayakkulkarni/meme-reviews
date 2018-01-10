<template>
  <nav class="navbar is-transparent is-fixed-top">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="../../assets/images/logo.svg" alt="MEME 👏 REVIEWS 👏" width="112" height="28">
        </a>
        <div class="navbar-burger burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-end" v-if="!signedIn">
          <div class="navbar-item">
            <router-link tag="a" :to="{name: 'signup'}" class="button is-rounded is-primary">Login (or Signup)</router-link>
            <!-- <a class="navbar-link" href="/">
              Login / Signup
            </a> -->
          </div>
        </div>
        <div class="navbar-end" v-if="signedIn">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="/">
              My Profile
            </a>
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" href="/">
              <img :src="user.photoURL" alt="Profile" v-if="user.photoURL"> &nbsp; {{ user.displayName }}
              </a>
            </div>
          </div>
          <div class="navbar-item">
            <button class="button is-danger" @click.once="signOut">Sign Out</button>
          </div>
        </div>
      </div>
    </nav>
</template>
<script>
export default {
  name: 'Navbar',
  props: {
    user: {
      type: Object,
      default: {},
      required: true,
    },
    signedIn: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    signOut() {
      this.$emit('signOut', true);
    },
  },
};
</script>

