<template>
  <q-page padding>
    <q-btn label="Voltar" to="/" class="q-mt-md" />
    <h3>Soma</h3>
    <h5 class="q-my-none">Valores</h5>
    <q-form>
      <q-input label="Número 1" v-model="n1" />
      <q-input label="Número 2" v-model="n2" />
      <div>
        <q-btn label="Somar" @click="somar()"/>
      </div>
    </q-form>
    <h5 class="q-mb-none">Resultado</h5>
    <p class="text-h4">{{ res }}</p>
  </q-page>
</template>

<script>
export default {
  name: "PageSoma",
  data () {
    return {
      n1: "",
      n2: "",
      res: ""
    }    
  },
  methods: {
    somar () {
      this.res = (+this.n1) + (+this.n2);
    }
  }
};
</script>
