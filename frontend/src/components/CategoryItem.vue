<template>
  <div class="categories__option">
    <input :value= value type="checkbox" name="category" :id="id"  />
    <label for="id">{{ title }}</label>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: {
    id: String,
    text: String,
    title: String,
    check : Boolean,
    value :String
  },
};
</script>


 <style  scoped>
.categories__option label {
  cursor: pointer;
  height: 28px;
  top: 0;
}

.categories__option input[type="checkbox"] {
  display: none;
}
.categories__option input[type="checkbox"]:checked + label:before {
  /* for select */
  background-color: #009fff;
  color: white;
}

.categories__option input[type="checkbox"] + label::before {
  content: "\2714"; /* for tick */
  border: 0.1em solid #e7e9e8;
  border-radius: 50%;
  width: 1em;
  height: 1em;
  display: inline-block;
  padding-right: 0.2em;
  padding-left: 0.2em;
  padding-bottom: 0.4em;
  margin-left: 0.2em;
  text-align: center;
  vertical-align: bottom;
  color: transparent;
}
.categories__option {
  margin: 10px;
  margin-top: 5px;
  margin-bottom: 3px;
}



.categories__option input[type="checkbox"]:checked + label {
  color: #009fff;
  font-weight: bold;
}
</style>
