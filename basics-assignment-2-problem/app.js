const app = Vue.createApp({
  data() {
    return {
      alertMessage: 'Ouch!',
      output: '',
      confirmedOutput: '',
    };
  },
  methods: {
    showAlert() {
      alert(this.alertMessage);
    },
    registerInput(e) {
        this.output = e.target.value;
    },
    confirmInput(e) {
        this.confirmedOutput = e.target.value;
    }
  },
});

app.mount('#assignment');
