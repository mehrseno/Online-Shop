
<template>
  <transition name="fade">
    <div class="modal__backdrop" @click="close">
      <div class="modal">
        <button type="button" class="btn-close" @click="close">x</button>
        <p class="modal__massage">
          {{ modalMassage }}
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",
  props: {
    modalMassage: String,
  },
  methods: {
    close() {
      this.$emit("close");
    },
    // changeMassage(){
    //   this.Modal_massage = this.
    // }
  },
};
</script>

<style>
.modal__backdrop {
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
  display: flex;
  flex-direction: column;
  border-radius: 24px 24px;
  max-height: 80vh;
  width: 400px;
  background-color: var(--element-background);
  margin-top: 20px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  color: rgb(14, 186, 197);
  background: transparent;
  text-align: right;
}

.modal__massage {
  text-align: center;
  padding: 20px 10px;
  color: rgb(14, 186, 197);
  font-size: 20px;
  border-radius: 0px 0px 20px 24px;
  direction: rtl;
  overflow-y: auto;
}
.fade-leave-active,
.fade-enter-active {
  transition: all 0.5s ease-in;
}

.fade-leave-to,
.fade-enter-from {
  transform: translateY(25px);
  opacity: 0;
}
</style>