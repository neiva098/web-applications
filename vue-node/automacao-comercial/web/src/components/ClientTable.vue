<template>
  <section>
    <b-tabs>
      <b-tab-item label="Table">
        <b-table
          v-if="renderTable"
          :data="data"
          :columns="columns"
          :selected.sync="selected"
        >
        </b-table>
      </b-tab-item>
    </b-tabs>
    <a @click="clickEvent">
      <font-awesome-icon icon="plus-circle" size="2x" class="add-button" />
    </a>
    <a @click="confirm">
      <font-awesome-icon icon="minus-circle" size="2x" class="add-button" />
    </a>
    <a @click="editEvent">
      <font-awesome-icon icon="edit" size="2x" class="add-button" />
    </a>
    <b-modal :active.sync="isModalActive">
      <RegisterClientModal @sendClientData="insertClientData" />
    </b-modal>
    <b-modal :active.sync="isEditModalActive">
      <EditClientModal
        :name="name"
        :email="email"
        :cpf="cpf"
        :phone="phone"
        :address="address"
        @sendClientData="updateClientData"
      />
    </b-modal>
  </section>
</template>

<script>
import RegisterClientModal from "./RegisterClientModal.vue";
import EditClientModal from "./EditClientModal.vue";
import axios from "axios";
export default {
  components: {
    RegisterClientModal,
    EditClientModal
  },
  data() {
    return {
      data: null,
      isModalActive: false,
      isEditModalActive: false,
      renderTable: true,
      selected: null,
      name: null,
      email: null,
      cpf: null,
      phone: null,
      address: null,
      columns: [
        {
          field: "nome",
          label: "Nome",
          searchable: true
        },
        {
          field: "e_mail",
          label: "E-mail"
        },
        {
          field: "cpf",
          label: "CPF"
        },
        {
          field: "telefone",
          label: "Telefone"
        },
        {
          field: "endereco",
          label: "Endereco"
        }
      ]
    };
  },
  mounted() {
    axios
      .post("http://localhost:3000/api/general/getTable", {
        table_name: "cliente"
      })
      .then(response => {
        this.data = response.data;
        this.renderTable = false;
        this.$nextTick(() => {
          this.renderTable = true;
        });
      });
  },
  methods: {
    clickEvent() {
      this.isModalActive = true;
    },
    confirm() {
      this.$buefy.dialog.confirm({
        message: "Tem certeza que deseja excluir " + this.selected.nome + "?",
        onConfirm: () => {
          this.deleteClientData()
        }
      });
    },
    editEvent() {
      if (this.selected) {
        this.name = this.selected.nome;
        this.cpf = this.selected.cpf;
        this.phone = this.selected.telefone;
        this.email = this.selected.e_mail;
        this.address = this.selected.endereco;
        this.isEditModalActive = true;
      }
    },
    insertClientData(clientData) {
      axios
        .post("http://localhost:3000/api/clientes/insertCliente", clientData)
        .then(() => {
          this.$buefy.toast.open("Cliente cadastrado");
        })
        .then(() => {
          axios
            .post("http://localhost:3000/api/general/getTable", {
              table_name: "cliente"
            })
            .then(response => {
              this.data = response.data;
              this.renderTable = false;
              this.$nextTick(() => {
                this.renderTable = true;
              });
            });
        });
      this.selected = null;
    },
    updateClientData(clientData) {
      axios
        .post("http://localhost:3000/api/clientes/updateCliente", clientData)
        .then(() => {
          this.$buefy.toast.open("Informacoes do cliente atualizadas");
        })
        .then(() => {
          axios
            .post("http://localhost:3000/api/general/getTable", {
              table_name: "cliente"
            })
            .then(response => {
              this.data = response.data;
              this.renderTable = false;
              this.$nextTick(() => {
                this.renderTable = true;
              });
            });
        });
      this.selected = null;
    },
    deleteClientData() {
      if (this.selected !== null) {
        axios
          .post(
            "http://localhost:3000/api/clientes/deleteCliente",
            this.selected
          )
          .then(() => {
            this.$buefy.toast.open("Cliente apagado");
          })
          .then(() => {
            axios
              .post("http://localhost:3000/api/general/getTable", {
                table_name: "cliente"
              })
              .then(response => {
                this.data = response.data;
                this.renderTable = false;
                this.$nextTick(() => {
                  this.renderTable = true;
                });
              });
          });
      }
      this.selected = null;
    }
  }
};
</script>

<style scoped>
.add-button {
  color: gray;
}

.add-button:hover {
  color: red;
}
</style>
