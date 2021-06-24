<template>
  <q-page padding>
    <!-- content -->
    <h4>Lista do Mercado</h4>

    <q-form>
      <div class="row">
        <div class="col-5">
          <q-input label="Produto" v-model="nome" />
        </div>
        <div class="col">
          <q-input label="Qtde" v-model="qtde" mask="###" fill-mask="0" reverse-fill-mask />
        </div>
        <div class="col">
          <q-input label="Preço" v-model="preco" mask="#.##" fill-mask="0" reverse-fill-mask />
        </div>
        <div class="col-2">
          <q-btn label="Salvar" @click="salvar()" />
        </div>
      </div>   
    </q-form>
    <h4>Produtos</h4>
    <q-list separator>
      <q-item v-for="produto in produtosNaoComprados" :key="produto.nome">
       <q-item-section side top>
          <q-checkbox v-model="produto.comprado" />
        </q-item-section>        
        <q-item-section>{{ produto.nome }}</q-item-section>
        <q-item-section class="col-2">{{ produto.preco }}</q-item-section>
        <q-item-section class="col-2">{{ produto.qtde }}</q-item-section>
        <q-item-section class="col-2" side>
          <q-item-label>{{ produto.total }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section></q-item-section>
        <q-item-section>Total</q-item-section>
        <q-item-section class="col-2"></q-item-section>
        <q-item-section class="col-2">{{ totalQtde }}</q-item-section>
        <q-item-section class="col-2" side>
          <q-item-label>{{ total }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <h6>Comprados</h6>
    <q-list separator>
      <q-item v-for="produto in produtosComprados" :key="produto.nome">
       <q-item-section side top>
          <q-checkbox v-model="produto.comprado" />
        </q-item-section>        
        <q-item-section>{{ produto.nome }}</q-item-section>
        <q-item-section class="col-2">{{ produto.preco }}</q-item-section>
        <q-item-section class="col-2">{{ produto.qtde }}</q-item-section>
        <q-item-section class="col-2" side>
          <q-item-label>{{ produto.total }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section></q-item-section>
        <q-item-section>Total</q-item-section>
        <q-item-section class="col-2"></q-item-section>
        <q-item-section class="col-2">{{ totalQtdeComprados }}</q-item-section>
        <q-item-section class="col-2" side>
          <q-item-label>{{ totalComprados }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
const reducerTotal = (total, produto) => total + produto.total;
const reducerQtde = (total, produto) => total + produto.qtde;

export default {
  // name: 'PageName',
  data () {
    return {
      nome: '',
      preco: 0,
      qtde: 0,
      produtos: [
        {
          comprado: false,
          nome: "Macarrão",
          preco: 3.55,
          qtde: 2,
          total: 7.1
        },
        {
          comprado: false,
          nome: "Arroz",
          preco: 15.7,
          qtde: 1,
          total: 15.7
        },
        {
          comprado: false,
          nome: "Feijão",
          preco: 8.76,
          qtde: 1,
          total: 8.76
        }
      ]      
    }
  },
  computed: {
    total () {
      return this.produtosNaoComprados.reduce(reducerTotal, 0);
    },
    totalQtde () {
      return this.produtosNaoComprados.reduce(reducerQtde, 0);
    },
    totalComprados () {
      return this.produtosComprados.reduce(reducerTotal, 0);
    },
    totalQtdeComprados () {
      return this.produtosComprados.reduce(reducerQtde, 0);
    },
    produtosComprados () {
      return this.produtos.filter(produto => produto.comprado)
    },
    produtosNaoComprados() {
      return this.produtos.filter(produto => !produto.comprado)
    }
  },
  methods: {
    salvar () {
      var produto = {
        comprado: false,
        nome: this.nome,
        preco: +this.preco,
        qtde: +this.qtde,
        total: +this.preco * +this.qtde
      };

      this.produtos.push(produto);      

      this.$q.notify('Produto adicionado com sucesso!');

      this.limpar();
      //this.$q.loading.show();
    },
    limpar () {
      this.nome = '';
      this.preco = 0;
      this.qtde = 0;
    }
  }
}
</script>
