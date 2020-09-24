const app = Vue.createApp({
  data() {
    return {
      lessThenResult: 'Not there yet',
      moreThenResult: 'Too much!',
      number: 0,
    };
  },
  methods: {
    addNumber(n) {
        return this.number = this.number + n;
    }
  },
  computed: {
      result() {
          if (this.number < 37) {
              return this.lessThenResult;
          } else if (this.number === 37) {
              return this.number;
          } else {
              return this.moreThenResult;
          }
      }
  },
  watch: {
      result() {
          const that = this;
          setTimeout(() => {
              that.number = 0
          }, 5000)
      }
  }
});

app.mount('#assignment');
