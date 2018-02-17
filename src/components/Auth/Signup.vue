<template>
  <div class="page">
    <div class="container">
      <div class="left">
        <div class="login">Login</div>
        <div class="eula">By logging in you agree to the ridiculously long terms that you didn't bother to read</div>
      </div>
      <div class="right">
        <svg viewBox="0 0 320 300">
          <defs>
            <linearGradient
                            inkscape:collect="always"
                            id="linearGradient"
                            x1="13"
                            y1="193.49992"
                            x2="307"
                            y2="193.49992"
                            gradientUnits="userSpaceOnUse">
              <stop
                    style="stop-color:#ff00ff;"
                    offset="0"
                    id="stop876" />
              <stop
                    style="stop-color:#ff0000;"
                    offset="1"
                    id="stop878" />
            </linearGradient>
          </defs>
          <path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
        </svg>
        <form class="form" method="POST" @submit.prevent="emailSignup">
          <label for="email">Email</label>
          <input type="email" id="email" autofocus="autofocus" v-model="email">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password">
          <input type="submit" id="submit" value="Submit" style="cursor: pointer;">
          <div style="padding-top: 34px; text-align: center;">
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
            <button class="button is-large" @click="oAuthLogin('twitter')">
              <span class="icon">
                <i class="fa fa-twitter"></i>
              </span>
              <!-- <span>Twitter</span> -->
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import * as firebase from 'firebase';
import anime from 'animejs';

const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

githubAuthProvider.setCustomParameters({ allow_signup: 'false' });

export default {
  name: 'Signup',
  data() {
    return {
      email: null,
      password: null,
      oAuthProvider: null,
      token: null,
      auth: firebase.auth(),
      user: {},
      errors: {},
      loggedOut: false,
    };
  },
  mounted() {
    const t = this;
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // t.showAlert();
      } else {
        t.loggedOut = true;
      }
    });
    let current = null;
    document.querySelector('#email').addEventListener('focus', () => {
      if (current) current.pause();
      current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: 0,
          duration: 700,
          easing: 'easeOutQuart',
        },
        strokeDasharray: {
          value: '240 1386',
          duration: 700,
          easing: 'easeOutQuart',
        },
      });
    });
    document.querySelector('#password').addEventListener('focus', () => {
      if (current) current.pause();
      current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: -336,
          duration: 700,
          easing: 'easeOutQuart',
        },
        strokeDasharray: {
          value: '240 1386',
          duration: 700,
          easing: 'easeOutQuart',
        },
      });
    });
    document.querySelector('#submit').addEventListener('focus', () => {
      if (current) current.pause();
      current = anime({
        targets: 'path',
        strokeDashoffset: {
          value: -730,
          duration: 700,
          easing: 'easeOutQuart',
        },
        strokeDasharray: {
          value: '530 1386',
          duration: 700,
          easing: 'easeOutQuart',
        },
      });
    });
  },
  methods: {
    emailSignup() {
      const t = this;
      t.auth
        .createUserWithEmailAndPassword(t.email, t.password)
        .then(() => {
          // if new user is created!
          t
            .$swal({
              title: 'Yay!',
              text: 'A new hope arises!',
              type: 'success',
              showCancelButton: false,
              confirmButtonColor: '#3085d6',
              confirmButtonText: '🤙',
            })
            .then((result) => {
              if (result.value) {
                t.$router.push({ name: 'Index', params: { signedIn: true } });
              }
            });
        })
        .catch((error) => {
          t.errors = error;
          if (t.errors.code === 'auth/email-already-in-use') {
            t.signInEmail();
          }
        });
    },
    signInEmail() {
      const t = this;
      t.auth
        .signInWithEmailAndPassword(t.email, t.password)
        .then(() => {
          // Sucessful login
          t
            .$swal({
              title: 'Yay!',
              text: 'Welcome back',
              type: 'success',
              showCancelButton: false,
              confirmButtonColor: '#3085d6',
              confirmButtonText: '🤙',
            })
            .then((result) => {
              if (result.value) {
                t.$router.push({ name: 'Index', params: { signedIn: true } });
              }
            });
        })
        .catch((error) => {
          t.errors = error;
          // Unsucessful login
          t
            .$swal({
              title: 'Eeks!',
              text: error.message,
              type: 'error',
              showCancelButton: false,
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'OK ☹️',
            })
            .then((result) => {
              if (result.value) {
                t.password = null;
              }
            });
          if (error.code === 'auth/wrong-password') {
            t
              .$swal({
                title: 'Eeks!',
                text: error.message,
                type: 'error',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Would you like to reset your password?',
              })
              .then((result) => {
                if (result.value) {
                  t.password = null;
                  t.resetPassword();
                }
              });
          }
        });
    },
    resetPassword() {
      const t = this;
      t.auth
        .sendPasswordResetEmail(t.email)
        .then(() => {
          // Email sent. Add Alert here!
          t
            .$swal({
              title: 'Hell yeah!',
              text: 'Please check your ✉️ with the instructions!',
              type: 'success',
              showCancelButton: false,
              confirmButtonColor: '#3085d6',
              confirmButtonText: '🤟',
            })
            .then((result) => {
              if (result.value) {
                // t.$router.push({ name: 'Index', params: { signedIn: true } });
              }
            });
        })
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

      if (provider === 'google') {
        t.oAuthProvider = googleAuthProvider;
      }

      firebase
        .auth()
        .signInWithPopup(t.oAuthProvider)
        .then((result) => {
          t.token = result.credential.accessToken;
          t.user = result.user;
          t
            .$swal({
              title: "'twas sucessful!",
              type: 'success',
              showCancelButton: false,
              confirmButtonColor: '#3085d6',
              confirmButtonText: '🤙',
            })
            .then((data) => {
              if (data.value) {
                t.$router.push({ name: 'Index', params: { signedIn: true } });
              }
            });
        })
        .catch((error) => {
          t.errors = error;
          t
            .$swal({
              title: 'Eeks!',
              text: error.message,
              type: 'error',
              showCancelButton: false,
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'OK ☹️',
            })
            .then((result) => {
              if (result.value) {
                t.password = null;
              }
            });
        });
    },
    showAlert() {
      const t = this;
      t
        .$swal({
          title: 'Yay!',
          text: "You've sucessfully logged in!",
          type: 'success',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: "OK, what's next?",
        })
        .then((result) => {
          if (result.value) {
            t.$router.push({ name: 'Index', params: { signedIn: true } });
          }
        });
      // t.$swal('Sucessfully Logged In!!');
    },
  },
};
</script>
<style scoped>
@import url('https://rsms.me/inter/inter-ui.css');
::selection {
  background: #2d2f36;
}
::-webkit-selection {
  background: #2d2f36;
}
::-moz-selection {
  background: #2d2f36;
}
.page {
  font-family: 'Inter UI', sans-serif;
  background: #e2e2e5;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: absolute;
  place-content: center;
  width: 100%;
}
@media (max-width: 767px) {
  .page {
    height: 100vh;
  }
}
.container {
  display: flex;
  height: 320px;
  margin: 0 auto;
  width: 640px;
}
@media (max-width: 767px) {
  .container {
    flex-direction: column;
    height: 630px;
    width: 320px;
  }
}
.left {
  background: white;
  height: calc(100% - 40px);
  top: 20px;
  position: relative;
  width: 50%;
}
@media (max-width: 767px) {
  .left {
    height: 100%;
    left: 20px;
    width: calc(100% - 40px);
    max-height: 270px;
  }
}
.login {
  font-size: 50px;
  font-weight: 900;
  margin: 50px 40px 40px;
}
.eula {
  color: #999;
  font-size: 14px;
  line-height: 1.5;
  margin: 40px;
}
.right {
  background: #474a59;
  box-shadow: 0px 0px 40px 16px rgba(0, 0, 0, 0.22);
  color: #f1f1f2;
  position: relative;
  width: 50%;
}
@media (max-width: 767px) {
  .right {
    flex-shrink: 0;
    height: 100%;
    width: 100%;
    max-height: 350px;
  }
}
svg {
  position: absolute;
  width: 320px;
}
path {
  fill: none;
  stroke: url(#linearGradient);
  stroke-width: 4;
  stroke-dasharray: 240 1386;
}
.form {
  margin: 40px;
  position: absolute;
}
label {
  color: #c2c2c5;
  display: block;
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 5px;
}
input {
  background: transparent;
  border: 0;
  color: #f2f2f2;
  font-size: 20px;
  height: 30px;
  line-height: 30px;
  outline: none !important;
  width: 100%;
}
input::-moz-focus-inner {
  border: 0;
}
#submit {
  color: #707075;
  margin-top: 1.65em;
  transition: color 300ms;
}
#submit:focus {
  color: #f2f2f2;
}
#submit:active {
  color: #d0d0d2;
}
</style>
