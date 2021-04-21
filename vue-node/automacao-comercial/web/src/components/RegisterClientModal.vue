<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">Cadastrar cliente</p>
    </header>
    <b-message v-if="areFieldsEmptyPopUp"
      title="Campo vazio"
      type="is-danger"
      has-icon
      aria-close-label="Close message"
      @close="areFieldsEmptyPopUp=false"
    >
      Por favor preencha todos os campos
    </b-message>
    <section class="modal-card-body">
      <b-field label="Nome">
        <b-input
          type="nome"
          v-model="name"
          placeholder="Nome do cliente"
          :maxlength="36"
          required
        >
        </b-input>
      </b-field>

      <b-field label="Email">
        <b-input
          type="email"
          v-model="email"
          placeholder="Email do cliente"
          :maxlength="36"
          required
        >
        </b-input>
      </b-field>

      <b-field label="CPF">
        <b-input
          type="cpf"
          v-model="cpf"
          placeholder="CPF do cliente"
          :maxlength="11"
          required
        >
        </b-input>
      </b-field>

      <b-field label="Telefone">
        <b-input
          type="telefone"
          v-model="phone"
          placeholder="Telefone do cliente"
          :maxlength="9"
          required
        >
        </b-input>
      </b-field>

      <b-field label="Endereco">
        <b-input
          type="endereco"
          v-model="address"
          placeholder="Endereco do cliente"
          :maxlength="36"
          required
        >
        </b-input>
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <button class="button" type="button" @click="$parent.close()">
        Cancelar
      </button>
      <button class="button" type="button" @click="clearFields">
        Limpar Campos
      </button>
      <button class="button is-primary" @click="sendClientData">
        Cadastrar
      </button>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      email: null,
      cpf: null,
      phone: null,
      address: null,
      areFieldsEmptyPopUp: false
    };
  },
  methods: {
    clearFields() {
      this.name = null;
      this.email = null;
      this.cpf = null;
      this.phone = null;
      this.address = null;
    },
    areFieldsEmpty() {
      return (
        this.name !== null &&
        this.email !== null &&
        this.cpf !== null &&
        this.phone !== null &&
        this.address !== null
      );
    },
    sendClientData() {
      this.areFieldsEmptyPopUp = !this.areFieldsEmpty();
      if (this.areFieldsEmpty()) {
        this.$emit("sendClientData", {
          nome: this.name,
          e_mail: this.email,
          cpf: this.cpf,
          telefone: this.phone,
          endereco: this.address
        });
        this.$parent.close();
      }
    }
  }
};
</script>
