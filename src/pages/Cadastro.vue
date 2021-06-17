<template>
  <q-page padding>
    <q-btn label="Voltar" to="/" class="q-mt-md" />
    <h4>Cadastro de Cliente</h4>
    <q-form class="q-gutter-md">
      <div class="row">
        <div class="col">
          <q-input label="Nome" />
        </div>
        <div class="col">
          <q-input label="Sobrenome" />
        </div>
      </div>
      <q-input label="Email" type="email" />
      <q-input label="Telefone" type="tel" mask="(##) #####-####" fill-mask="#" />
      <h6 class="q-mb-none q-mt-xl">Endereço</h6>
      <q-input label="CEP" mask="#####-###" fill-mask="#" />
      <q-input label="Logradouro" />
      <q-input label="Número" />
      <q-input label="Complemento" />
      <q-input label="Bairro" />
      <q-input label="Cidade" />
      <select-estado label="Estado" v-model="estado" />
      

      <h6 class="q-mb-none q-mt-xl">Documentos</h6>
      <q-input label="CPF"  mask="###.###.###-##" fill-mask="#" />
      <q-input label="RG" mask="##.###.###-#" fill-mask="#" />

      <div>
        <q-btn label="Cadastrar" type="submit" size="lg" color="primary" class="q-my-lg" />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import SelectEstado from 'components/SelectEstado';
export default {
  components: { SelectEstado },
  // name: 'PageName',
  data() {
    return {
      estado: null
    };
  }
};
</script>
