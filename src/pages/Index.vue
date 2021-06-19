<template>
  <q-page class="flex flex-center column items-stretch" padding>
    <h4>Atividades das Aulas</h4>
    <q-btn label="Cadastro" to="/cadastro" padding="md" color="primary" />
    <q-btn
      label="Login"
      to="/login"
      padding="md"
      color="primary"
      class="q-my-md"
    />
    <q-btn label="Ir para Soma" to="/soma" padding="md" color="primary" />
    <q-btn label="IMC" to="/imc" padding="md" color="primary" />
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  components: {}
};
</script>
