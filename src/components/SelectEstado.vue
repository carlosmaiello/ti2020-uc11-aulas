<template>
  <q-select
    v-bind="$attrs"
    v-on="$listeners"
    use-chips
    :options="estados"
    option-value="sigla"
    option-label="nome"
    @filter="filterFn"
    @filter-abort="abortFilterFn"
  >
    <template v-slot:no-option>
      <q-item>
        <q-item-section class="text-grey">
          No results
        </q-item-section>
      </q-item>
    </template>
  </q-select>
</template>

<script>
export default {
  data() {
    return {
      estados: null
    };
  },
  computed: {
    jsonUrl() {
      return "https://gist.githubusercontent.com/henriquejensen/1032c47a44d2cddaa2ef47fc531025db/raw/c58fdc848baf2a1fb53e617a0ad4e9754ec68e35/json-estados-brasileiros";
    }
  },
  methods: {
    filterFn(val, update, abort) {
      if (this.estados !== null) {
        // already loaded
        update();
        return;
      }

      fetch(this.jsonUrl)
        .then(response => response.json())
        .then(data => {
          this.estados = data.UF;
          update();
        });
    },

    abortFilterFn() {
      // console.log('delayed filter aborted')
    }
  }
};
</script>

<style></style>
