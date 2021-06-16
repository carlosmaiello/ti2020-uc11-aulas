# Trabalhando com quasar

[Documentação do Quasar](https://quasar.dev/)

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
<template>
<!-- Tags dos elementos que são mostrados no componente-->
</template>
<script>
// Código do Javascript
</script>

## Inserindo TAGS

### Tag com conteúdo

<tag>
    <tag1>
    ...
    </tag1>
</tag>

### Propriedades
<pre><code>
<tag prop="valor" prop2="valor" prop3="valor">
</tag>

<tag prop="valor" prop2="valor" prop3="valor" />
</code></pre>

### Tag sem conteúdo
`<tag />`

## Adicionado um formulário
[Documentação de Campos da Página](https://quasar.dev/vue-components/input)

Cria o formulário na página
`<q-form> ... </q-form>`

Inserindo campos na página
<pre><code>
<q-input label="Nome" />
<q-input label="Data de Nascimento" type="date" />
<q-input label="E-mail" type="email" />
</code></pre>

### Exemplo de formulário
<pre><code>
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
</code></pre>


