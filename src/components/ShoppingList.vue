<template>
  <div class="shopping-list-container" v-if="isVisible">
    <h2>Shopping List</h2>
    <ul>
      <li v-for="(item, index) in shoppingItems" :key="index">
        <!-- 只显示checkbox，但不使用v-model -->
        <input type="checkbox" :id="`item-${index}`" :checked="isItemChecked(item.name)" disabled>
        <label :for="`item-${index}`">{{ item.name }}</label>
      </li>
    </ul>
    <button @click="close">Close</button>
  </div>
</template>

<script>
export default {
  props: {
    // 父组件传入的选中项列表
    selectedItems: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isVisible: false,
      shoppingItems: [
        { name: "Tissue Paper" },
        { name: "Milk" },
        { name: "Detergent" }
      ]
    };
  },
  methods: {
    show() {
      this.isVisible = true;
    },
    close() {
      this.isVisible = false;
    },
    // 使用计算属性来判断项是否应该选中
    isItemChecked(itemName) {
      return this.selectedItems.includes(itemName);
    }
  }
};
</script>

  
  <style>
  .shopping-list-container {
    position: fixed;
    width: 300px;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    z-index: 200;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin: 10px 0;
  }
  button {
    margin-top: 10px;
    padding: 5px 10px;
  }
  /* 现在被选中且禁用的checkbox将有自定义的样式 */
input[type="checkbox"]:disabled:checked {
  /* 你可以添加更具体的样式来覆盖默认的样式 */
  /* 这里我们将背景设置为浅蓝色，并添加了一个对勾符号 */
  background-color: rgb(48, 144, 196);
  -webkit-appearance: none; /* 对于WebKit浏览器 */
  -moz-appearance: none; /* 对于老版本的Firefox */
  appearance: none;
  width: 1em;
  height: 1em;
  border: 1px solid #ddd;
  position: relative;
}

input[type="checkbox"]:disabled:checked:after {
  content: '✓';
  position: absolute;
  top: -0.2em;
  left: 0.1em;
  font-size: 1.2em;
  color: white;
}
  </style>
  