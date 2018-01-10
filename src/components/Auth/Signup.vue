<template>
  <div class="container has-text-centered">
    <div class="column is-4 is-offset-4">
      <h3 class="title has-text-grey">Signup / Login</h3>
      <p class="subtitle has-text-grey">You can use SSO or use email, password to login.</p>
      <div class="box">
        <figure class="avatar">
          <img src="../../assets/images/logo.svg" style="width: 9em" alt="MEME 👏 REVIEWS">
        </figure>
        <div class="field">
          <div class="control has-icons-right">
            <input class="input is-large" type="email" placeholder="Your Email" v-model="email" :class="{'is-danger': errors.message}">
            <span class="icon is-small is-right" v-if="errors.message">
              <i class="fa fa-warning"></i>
            </span>
          </div>
          <p class="help is-danger is-left">{{ errors.message }}</p>
        </div>

        <div class="field">
          <div class="control">
            <input class="input is-large" type="password" placeholder="Your Password" v-model="password">
          </div>
        </div>
        <div class="field">
          <div class="control">
            <a class="button is-block is-info is-large" @click="emailSignup">Signup</a>
          </div>
        </div>
        <div class="field">
          <div class="buttons has-addons is-centered">
            <button class="button is-large" @click="oAuthLogin('github')">
              <span class="icon">
                <i class="fa fa-github"></i>
              </span>
              <!-- <span>GitHub</span> -->
            </button>
            <button class="button is-large" @click="oAuthLogin('google')">
              <span class="icon">
                <i class="fa fa-google-plus"></i>
              </span>
              <!-- <span>Google Plus</span> -->
            </button>
            <button class="button is-large" @click="oAuthLogin('facebook')">
              <span class="icon">
                <i class="fa fa-facebook"></i>
              </span>
              <!-- <span>Facebook</span> -->
            </button>
            <button class="button is-large" @click="oAuthLogin('twitter')">
              <span class="icon">
                <i class="fa fa-twitter"></i>
              </span>
              <!-- <span>Twitter</span> -->
            </button>
          </div>
        </div>
      </div>
      <!-- <p class="has-text-grey">
        <a href="../">Sign Up</a> &nbsp;·&nbsp;
        <a href="../">Forgot Password</a> &nbsp;·&nbsp;
        <a href="../">Need Help?</a>
      </p> -->
    </div>
  </div>
</template>
<script>
import * as firebase from 'firebase';

const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

githubAuthProvider.setCustomParameters({ allow_signup: 'false' });

export default {
  name: 'Signup',
  mounted() {
    const t = this;
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        t.$router.push({ name: 'Index', params: { signedIn: true } });
      } else {
        t.loggedOut = true;
      }
    });
  },
  data() {
    return {
      email: null,
      password: null,
      oAuthProvider: null,
      token: null,
      user: {},
      errors: {},
      loggedOut: false,
    };
  },
  methods: {
    emailSignup() {
      const t = this;
      firebase
        .auth()
        .createUserWithEmailAndPassword(t.email, t.password)
        .catch((error) => {
          t.errors = error;
        });
    },
    oAuthLogin(provider) {
      const t = this;

      if (provider === 'twitter') {
        t.oAuthProvider = twitterAuthProvider;
      }

      if (provider === 'github') {
        t.oAuthProvider = githubAuthProvider;
      }

      if (provider === 'facebook') {
        t.oAuthProvider = facebookAuthProvider;
      }

      if (provider === 'google') {
        t.oAuthProvider = googleAuthProvider;
      }

      firebase
        .auth()
        .signInWithPopup(t.oAuthProvider)
        .then((result) => {
          t.token = result.credential.accessToken;
          t.user = result.user;
          t.$router.push({ name: 'Index', params: { signedIn: true } });
        })
        .catch((error) => {
          t.errors = error;
        });
    },
  },
};
</script>
