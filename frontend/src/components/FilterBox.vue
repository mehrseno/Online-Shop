<template>
  <div class="categories card">
    <div class="card__header categories__header">
      دسته‌بندی‌ها
    </div>
    <div class="categories__option">
      <input
        type="checkbox"
        name="category"
        value="1"
        checked="checked"
        id="category_id_1"
      />
      <label for="category_id_1">گزینه‌ی اول</label>
    </div>
    <div class="categories__option">
      <input type="checkbox" name="category" value="2" id="category_id_2" />
      <label for="category_id_2">گزینه‌ی دوم</label>
    </div>
    <div class="categories__option">
      <input type="checkbox" name="category" value="3" id="category_id_3" />
      <label for="category_id_3">گزینه‌ی سوم</label>
    </div>
    <div class="categories__option">
      <input type="checkbox" name="category" value="4" id="category_id_4" />
      <label for="category_id_4">گزینه‌ی چهارم</label>
    </div>
    <div class="categories__option">
      <input type="checkbox" name="category" value="5" id="category_id_5" />
      <label for="category_id_5">گزینه‌ی پنجم</label>
    </div>
    <div class="categories__option">
      <input type="checkbox" name="category" value="6" id="category_id_6" />
      <label for="category_id_6">گزینه‌ی ششم</label>
    </div>
    <div class="categories__option">
      <input type="checkbox" name="category" value="7" id="category_id_7" />
      <label for="category_id_7">گزینه‌ی هفتم</label>
    </div>
  </div>
</template>

<script>
export default {
    name: "FilterBox",
}
</script>

<style>
  .card {
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border: .1em solid  #b7b8b7;
    box-shadow: -1px -1px 5px 0px #fff, 7px 7px 20px 0px #0003, 4px 4px 5px 0px #0002;
    overflow-y: auto; /* for automatic scrollbar */ 
    margin-top: 15px;
  }
  
  .card__header {
    font-weight: bold;
    border-bottom: .1em solid #b7b8b7 ;
    padding: 10px;
  }
</style>

<style scoped>

.categories {
    height: 26vh;
} 


.categories__option {
    margin: 10px;
    margin-top: 5px;
    margin-bottom: 3px;
}

.categories__option label {
    cursor: pointer;
    height: 28px;
    top: 0;
}

.categories__option input[type="checkbox"] {
    display: none;
}

.categories__option input[type="checkbox"] + label::before {
    content: "\2714"; /* for tick */
    border: 0.1em solid #E7E9E8 ;
    border-radius: 50%;
    width: 1em;
    height: 1em;
    display: inline-block;
    padding-right: 0.2em;
    padding-left: 0.2em;
    padding-bottom: 0.4em;
    margin-left: .2em;
    text-align: center;
    vertical-align: bottom;
    color: transparent;
}

.categories__option input[type="checkbox"]:checked + label:before  { /* for select */
    background-color: #009FFF;
    color: white;
}

.categories__option input[type="checkbox"]:checked + label {
    color: #009FFF;
    font-weight: bold;
}

</style>