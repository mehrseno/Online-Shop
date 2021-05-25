<template>
  <div >
    <label for="subformInput">{{ name }}</label>
    <input class="subformInput"  :type="inputType" :placeholder="inputPlaceholder"/>
  </div>
</template>

<script>
export default {
  name: "Subform",
  props: {
    name: String,
    type: String,
    inputPlaceholder: String,
  },
};
</script>

<style scoped>
div{
  display: flex;
  flex-direction: row;
}

input{
  /* display: flex;
    flex-direction: column; */
  background-color: #fff;
  color: black;
  border: none;
  align-items: center;
  border-radius: 0.3rem 0rem 0rem 0.3rem;
  padding: 10x 20px;
  height: 2.6rem;
  width: 17.5rem;
}

::placeholder {
  color: rgb(181, 183, 189);
  font-size: 15px;
  margin: 0 10px;
  padding-right: 10px;
}

label{
   background-color: rgb(14, 186, 197);
   line-height: 2.8rem;
   align-items: center;
   font-size:1rem;
   color:#fff;
   width:5.3rem;
   height:2.6rem;
   border-radius: 0rem 0.3rem 0.3rem 0rem;
} 
</style>

