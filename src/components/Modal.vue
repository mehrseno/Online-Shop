
<template>
  <div class="modal-backdrop">
    <div class="modal">
      <button type="button" class="btn-close" @click="close">x</button>
      <div class="modal-body">hi ziri</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: var(--element-background);
  border-radius: 24px 24px;
  width: 400px;
  max-height: 80vh;
}

.modal-body {
  padding: 20px 10px;
  color: blue;
  border-radius: 0px 0px 24px 24px;
  text-align: center;
  font-size: 20px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  color: rgb(14, 186, 197);
  background: transparent;
}
</style>