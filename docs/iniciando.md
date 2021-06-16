# Trabalhando com quasar

<https://quasar.dev/>

## Criando um novo projeto

`quasar create <nome do projeto>`

## Executando o projeto em modo de desenvolvedor

`quasar dev`
`quasar dev -m android`

## Adicionando uma nova página no projeto

`quasar new page <nome do arquivo da página>`

`quasar new page FormCadastro`
`quasar new page Login`
`quasar new page Perfil`
`quasar new page Signup`


## Componente no Vue
```html
<template>
<!-- Tags dos elementos que são mostrados no componente-->
</template>
<script>
// Código do Javascript
</script>
```

## Inserindo TAGS

### Tag com conteúdo
```js
<tag>
    <tag1>
    ...
    </tag1>
</tag>
```

### Propriedades
```html
<tag prop="valor" prop2="valor" prop3="valor">
</tag>

<tag prop="valor" prop2="valor" prop3="valor" />
```

### Tag sem conteúdo
`<tag />`

## Adicionado um formulário
<https://quasar.dev/vue-components/input>

Cria o formulário na página
`<q-form> ... </q-form>`

Inserindo campos na página
```html
<q-input label="Nome" />
<q-input label="Data de Nascimento" type="date" />
<q-input label="E-mail" type="email" />
```

### Exemplo de formulário
```html
<q-form class="q-gutter-md">
    <div class="row">
        <div class="col">
            <q-input label="Nome" />
        </div>
        <div class="col">
            <q-input label="Data de Nascimento" type="date" />
        </div>
    </div>
    <q-input label="E-mail" type="email" />
    <q-btn label="Cadastrar" />
</q-form>
```


## Criando rotas
<https://quasar.dev/quasar-cli/lazy-loading#lazy-load-router-pages>
### Chamando uma outra página através do botão
```html
<q-btn label="Ir para" to="/rota" />
```
