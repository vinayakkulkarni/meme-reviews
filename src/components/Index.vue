<template>
  <div class="hello">
    <div class="has-text-centered">
      <img src="../assets/images/logo.svg" style="width: 15em" alt="MEME 👏 REVIEWS">
      <h1>{{ msg }}</h1>
      <ul v-if="signedIn">
        <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
        <li><a href="http://chat.vuejs.org/" target="_blank" rel="noopener">Vue Community Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
        <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank" rel="noopener">Docs for This Template</a></li>
        <li><a href="#" @click="signOut">Sign Out</a></li>
      </ul>
      <ul v-else>
        <router-link tag="button" :to="{name: 'signup'}" class="button is-rounded">Login / Signup.</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import db from '../firebase';

export default {
  name: 'index',
  firebase: {
    memes: db.ref('memes'),
  },
  mounted() {
    const t = this;
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        t.signedIn = true;
      } else {
        t.signedIn = false;
      }
    });
  },
  data() {
    return {
      memes: {},
      msg: 'Welcome to Meme 👏 Reviews 👏',
      signedIn: this.$route.params.signedIn,
      errors: {},
    };
  },
  methods: {
    signOut() {
      const t = this;
      firebase.auth().signOut().then(() => {
        t.signedIn = false;
      }).catch((error) => {
        t.errors = error;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
[v-cloak] {
  display: none;
}
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495e;
}
</style>
