<template>
  <q-page padding>
    <q-btn icon="home" to="/" />

    <div class="flex flex-center column">
      <h4>IMC</h4>

      <q-form class="q-gutter-md">
        <q-input
          label="Altura"
          v-model="altura"
          mask="#.##"
          fill-mask="#"
          reverse-fill-mask
        />
        <q-input label="Peso" v-model="peso" mask="#" reverse-fill-mask />
        <q-slider v-model="peso" :min="10" :max="250" :step="1" />
      </q-form>

      <h4>Resultado</h4>
      <p>{{ imc }}</p>
      <p>{{ mensagem }}</p>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      altura: 0,
      peso: 0
    };
  },
  computed: {
    imc() {
      if (+this.peso == 0 || +this.altura == 0) return 0;
      else return +this.peso / (+this.altura * +this.altura);
    },
    mensagem() {
      var i = this.imc;

      if (i == 0) {
        return "";
      } else {
        return this.retornaMensagem(i);
      }
    }
  },
  methods: {
    retornaMensagem(imc) {
      if (imc <= 18.5) {
        return "Abaixo do peso";
      } else if (imc > 18.5 && imc < 25) {
        return "Normal";
      } else if (imc >= 25 && imc < 30) {
        return "Sobrepeso";
      } else if (imc >= 30 && imc < 40) {
        return "Obesidade I";
      } else {
        return "Obesidade II";
      }
    }
  }
};
</script>
