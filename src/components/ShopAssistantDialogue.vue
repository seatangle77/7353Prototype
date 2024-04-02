<template>
    <div v-if="visible" class="dialogue-container">
      <p>Hi! What can I help you with?</p>
      <div class="items-container">
        <p>Do you need help finding the following items?</p>
        <ul>
          <li v-for="item in shoppingItems" :key="item.name">
            <button @click="selectItem(item)">{{ item.name }}</button>
          </li>
        </ul>
      </div>
      <p v-if="selectedSection" class="result">You can find {{ selectedItem.name }} in the {{ selectedSection }}.</p>
      <button @click="close">Close</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        visible: false,
        shoppingItems: [
          { name: "Tissue Paper", section: "Personal Care Section" },
          { name: "Milk", section: "Beverages Section" },
          { name: "Detergent", section: "Cleaning Supplies Section" }
        ],
        selectedItem: null,
        selectedSection: ''
      };
    },
    methods: {
      show() {
        this.visible = true;
      },
      close() {
        this.visible = false;
      },
      hide() {
        this.visible = false;
        this.selectedItem = null;
        this.selectedSection = '';
      },
      selectItem(item) {
        this.selectedItem = item;
        this.selectedSection = item.section;
      }
    }
  }
  </script>
  
  <style scoped>
  .dialogue-container {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    z-index: 1000;
    text-align: center;
  }
  
  .items-container {
    margin-bottom: 20px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin: 10px 0;
  }
  
 .items-container button {
    background-color: #1d469f;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 5px;
    margin: 5px;
    color: #fff;
    font-size: 18px;
  }
  
 .items-container button:hover {
    background-color: #517ecb;
  }
  
  p {
    margin: 10px 0;
  }
  .result{
    color: #1c5e8d;
    font-size: 18px;
    font-weight: 600;
  }
  </style>
  