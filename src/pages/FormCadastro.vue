<template>
  <q-page padding>
    <q-btn label="Voltar" to="/" class="q-mt-md" />
    <h3>Cadastro de Cliente</h3>
    <q-form class="q-gutter-md">
      <q-slider :min="0" :max="10" v-model="slider" :label-always="true" />     
      <div class="row">
        <div class="col">
          <q-input label="Teste" />
        </div>
        <div class="col">
          <q-input label="Teste" />
        </div>
      </div>
      <q-input label="Teste" />
      <q-input label="Teste" />
      <q-input label="Teste" />
      <q-input label="Teste" />
      <q-input label="Teste" />
      <q-input label="Teste" />
      <q-input label="Teste" />
      <q-input label="Teste" />
      <q-input label="Teste" />
      <q-input label="Teste" />
      <q-input label="Teste" />
      <q-checkbox label="Teste" />
      <div>
        <q-radio label="Teste" />
        <q-radio label="Teste" />
        <q-radio label="Teste" />
        <q-radio label="Teste" />
      </div>
      <div>
        <q-btn label="Teste" />
      </div>
    </q-form>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data () {
    return {
      slider: 3
    }
  }
};
</script>
