<template>
  <div class="categories">
    <div class="categories__nav">
      <p>نام دسته‌بندی</p>
      <p>عملیات</p>
    </div>
    <div v-for="category in categories" :key="category">
      <div class="cateogries__row">
        {{ category }}
        <p class="categories__edit">ویرایش دسته‌بندی</p>

        <span class="categories__reomve" @click="onDelete(category)"
          ><span class="fas fa-times"></span> حذف دسته‌بندی</span
        >
      </div>
    </div>
    <form @submit="onSubmit" class="categories__add">
      <input
        v-model="text"
        type="text"
        name="اضافه کردن دسته‌بندی"
        placeholder="دسته‌بندی جدید را اضافه کنید..."
      />
      <input type="submit" value="اضافه کردن دسته‌بندی" class="add__submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "AdminProfileCategories",
  data() {
    return {
      categories: [],
      text: '',
    };
  },
  created() {
    this.categories = ["کیف", "کفش", "چسب", "سس"];
  },
  methods: {
    onDelete(category) {
      this.categories = this.categories.filter((c) => c !== category);
    },
    onSubmit(e) {
      e.preventDefault();
      if (!this.text) {
        alert("لطفاْ یک کتگوری وارد کنید");
        return;
      }
      this.categories = [...this.categories, this.text];
      this.text = "";
    },
  },
};
</script>

<style scoped>
.categories {
  padding: 30px;
  background: white;
  flex-direction: column;
  display: flex;
  width: 650px;
}

.categories__nav {
  width: 100%;
  display: grid;
  padding-right: 40px;
  grid-template-columns: 2fr 1fr;
  border-bottom: solid #eff4f8;
  color: #c0c0c0;
}

.cateogries__row {
  width: 100%;
  display: grid;
  padding-right: 40px;
  border-bottom: solid #eff4f8;
  grid-template-columns: 2fr 1fr 1fr;
  height: 3.5rem;
  line-height: 3.5rem;
  vertical-align: middle;
  color: #6d6d6d;
}

p:hover,
.categories__reomve:hover {
  color: var(--text-hover-color);
  cursor: pointer;
}

.categories__add {
  height: 2.5rem;
  padding-right: 40px;
  margin-top: 10px;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
}

.add__submit {
  text-align: center;
  color: white;
  width: 10rem;
  border-radius: 0.3rem 0rem 0rem 0.3rem;
  line-height: 2.5rem;
  background: rgb(14, 186, 197);
}
</style>
