<template>
  <q-page class="flex flex-center">

    <q-form class="q-gutter-sm">      
      <q-input outlined label="E-mail" />
      <q-input outlined label="Senha" />
      <div>
        <q-btn color="primary" icon="login" label="Entrar" class="full-width"/>
      </div>
    </q-form>

  </q-page>
</template>

<script>
export default {
  name: "PageIndex"
};
</script>
