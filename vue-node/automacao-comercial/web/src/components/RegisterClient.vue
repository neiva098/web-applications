<template>
  <div class="align-itens-center">
    <Header />
    <ClientTable />
  </div>
</template>

<script>
import Header from "./Header.vue";
import ClientTable from "./ClientTable.vue";
export default {
  components: {
    Header,
    ClientTable
  },
  data() {
    return {
      teste: null,
      isModalActive: false,
      clientData: null
    };
  },
  methods: {
    clickEvent() {
      this.isModalActive = !this.isModalActive;
    },
    addClient() {
      console.log("teste");
    },
    getClientData(clientData) {
      this.clientData = clientData;
    },
    confirm(selected) {
      console.log(this.selected);
      this.$buefy.dialog.confirm({
        message: "Deseja excluir esse cliente?",
        onConfirm: () => this.$buefy.toast.open("User confirmed")
      });
    }
  }
};
</script>

<style scoped>
.align-items-center {
  display: flex;
  align-items: center;
}
</style>
