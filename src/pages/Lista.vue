<template>
  <q-page padding>

    <h3>V-for</h3>

    <q-form class="q-gutter-md q-mb-xl">
      <q-input label="Cor" v-model="nome" />
      <q-input label="RGB" v-model="rgb" type="color" />
      <div>
        <q-btn label="Salvar" @click="salvarCor()" />
      </div>
    </q-form>

    <div v-for="cor in cores" :key="cor" 
    class="q-pa-md"
    :style="`background-color: ${cor.rgb}; color: white;`">
      {{ cor.nome }}
    </div>

  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      nome: '',
      rgb: '',
      cores: [
        {
          nome: "Vermelho",
          rgb: "#990000"
        }, 
        {
          nome: "Verde",
          rgb: "#009900"
        }, 
        {
          nome: "Azul",
          rgb: "#000099"
        }, 
        {
          nome: "Amarelo",
          rgb: "#FF8500"
        }, 
        {
          nome: "Rosa",
          rgb: "#d32d69"
        }, 
        {
          nome: "Marrom",
          rgb: "#8B4513"
        }
      ]
    }
  },

  methods: {
    salvarCor () {
      var cor = {
        nome: this.nome,
        rgb: this.rgb
      };

      this.cores.push(cor);

      this.nome = "";
      this.cor = "";
    }
  }
}
</script>
