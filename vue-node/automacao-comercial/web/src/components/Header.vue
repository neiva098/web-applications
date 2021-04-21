<template>
  <div style="width: 100%">
    <header class="header">
      <div class="align-items-center">
        <p class="header-titulo">S.A.C - Cadastro de clientes</p>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    
  }
}
</script>

<style scoped>
  .header {
  background-color: #949494;
  height: 7vh;
  border-radius: 0 0 15px 15px;
  min-height: 4rem;
  padding: 0 2rem 0 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 500;
}

.align-items-center {
  display: flex;
  align-items: center;
}

.header-titulo {
  font-size: 2rem;
  color: white;
  font-weight: 600;
}
</style>