const app = Vue.createApp({
  data() {
    return {
      myName: 'Carlos Pereira',
      myAge: 30,
      imgURL: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/03/1c/9c.jpg'
    };
  },
  methods: {
    increaseAge() {
      return this.myAge + 5;
    },
    favoriteNumber() {
        const randomNumber = Math.random();
        return randomNumber
    }
  },
});

app.mount('#assignment');
