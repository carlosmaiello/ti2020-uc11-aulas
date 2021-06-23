// import something here

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async ( { app, router, Vue } ) => {
  // something to do

  var numeral = require("numeral");

  Vue.filter("formatarNumero", function (value) {
    return numeral(value).format("0,0"); 
  });

  Vue.filter("formatarDinheiro", function (value) {
    return numeral(value).format("R$ 0.00"); 
  });
}
