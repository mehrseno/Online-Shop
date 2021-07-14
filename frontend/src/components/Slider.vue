<template>
  <div>
    <transition-group name="fade" tag="div">
      <!-- <div v-for="i in [currentIndex]" :key="i"> -->
      <img :src="currentImg" />
      <!-- <img :src="require(`@/assets/images/${currentImg}`)"/> -->
      <!-- </div> -->
    </transition-group>

    <a class="prev" @click="prev" href="#">&#10094; قبلی</a>
    <a class="next" @click="next" href="#">&#10095; بعدی</a>

    <div class="hero-nav">
      <h1 class="hero-nav__title">یه نگاهی به دکان بنداز...</h1>
      <form class="search-wrapper">
        <input
          type="text"
          class="search-wrapper__input"
          placeholder="نام محصول خود را وارد کنید..."
        />
        <SubmitButton
          type="button"
          class="search-wrapper__submit"
          submit="جستجو کنید"
        />
      </form>
    </div>
  </div>
</template>

<script>
import SubmitButton from "./SubmitButton.vue";

export default {
  name: "Slider",
  data() {
    return {
      images: [
        // "Slideshare1.png",
        // "clock.png",
        "https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",
        "https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg",
      ],
      timer: null,
      currentIndex: 0,
    };
  },
  components: { SubmitButton },
  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 10000);
    },

    next: function() {
      this.currentIndex += 1;
      clearInterval(this.timer);
      this.startSlide();
    },
    prev: function() {
      clearInterval(this.timer);
      this.currentIndex -= 1;
      this.startSlide();
    },
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
};
</script>

<style scoped>
.hero-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 10%;
  position: absolute;
  top: 0;
}
.hero-nav__title {
  color: var(--text-dark-color);
  font-size: 200%;
  margin-bottom: 40px;
  text-align: center;
}

.search-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.search-wrapper__input {
  background-color: var(--element-background);
  border-radius: 24px;
  margin-bottom: 35px;
  border: none;
  text-align: center;
  width: 62%;
  height: 40px;
  outline: no;
}

.search-wrapper__input::placeholder {
  color: var(--subtext-dark-color);
}

.search-wrapper__submit {
  margin-bottom: 30px;
  width: 18%;
  z-index: 2;
}

div {
  width: 100%;
  position: relative;
}

/* .fade-enter-active {
  transition: all .4s ease;
  overflow: hidden;
  visibility: visible;
  position: relative;
  width: 100%;
  opacity: 0;
}
.fade-leave-active {
  transition: all .1s ease;
} */

/* .fade-enter,
.fade-leave-to {
  opacity: 0;
} */

img {
  height: 600px;
  width: 100%;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
  z-index: 2;
}

.next {
  left: 0;
}

.prev {
  right: 0;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}
</style>
