<template>
  <div class="hello">
    <div class="has-text-centered" v-if="!signedIn">
      <img src="../assets/images/logo.svg" style="width: 15em" alt="MEME 👏 REVIEWS">
      <h1>{{ msg }}</h1>
    </div>
    <memes v-if="signedIn"></memes>
  </div>
</template>

<script>
import memes from '../components/Pages/Memes';

export default {
  name: 'index',
  components: {
    memes,
  },
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
      memes: {},
      msg: 'Welcome to Meme 👏 Reviews 👏',
      errors: {},
    };
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
