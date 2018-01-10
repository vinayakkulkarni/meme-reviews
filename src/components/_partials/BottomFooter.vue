<template>
  <footer class="footer" style="padding: 3rem 1.5rem;">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>MEME 👏 REVIEWS 👏</strong> Made with ❤️ {{ year }}
          </p>
        </div>
      </div>
    </footer>
</template>
<script>
export default {
  name: 'Footer',
  data() {
    return {
      year: '2018',
    };
  },
};
</script>
