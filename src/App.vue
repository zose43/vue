<template>
  <div id="app">
    <Form @submitForm="onSubmit" />
    <TotalBalance :total="TotalBalance" />
    <BudgetList :list="list" @deleteItem="onDeleteItem" />
  </div>
</template>
s
<script>
import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalance";
import Form from "@/components/Form";

export default {
  name: "App",
  components: {
    BudgetList,
    TotalBalance,
    Form
  },
  data: () => ({
    list: {
      1: {
        type: "INCOME",
        value: 100,
        comment: "Some comment",
        id: 1
      },
      2: {
        type: "OUTCOME",
        value: -50,
        comment: "Some outcome comment",
        id: 2
      }
    }
  }),
  methods: {
    onDeleteItem(id) {
      this.$delete(this.list, id);
    },
    onSubmit(data) {
      const newObj = { ...data, id: String(Math.random()) };
      this.$set(this.list, newObj.id, newObj);
    }
  },
  computed: {
    TotalBalance() {
      return Object.values(this.list).reduce(
        (acc, item) => acc + item.value,
        0
      );
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>
