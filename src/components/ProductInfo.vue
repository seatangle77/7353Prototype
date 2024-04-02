<template>
    <div v-if="visible" class="product-info-container">
      <div class="product-details">
        <h3>{{ product.name }}</h3>
        <p>Price: {{ product.price }}</p>
        <p>Description: {{ product.description }}</p>
        <p>Ingredients: {{ product.ingredients.join(', ') }}</p>
      </div>
      <div class="product-actions">
        <button @click="selectProduct">Select</button>
        <button @click="close">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      visible: {
        type: Boolean,
        required: true
      }
    },
    data() {
      return {
        product: {
          name: 'Milk',
          price: '$3.99',
          description: 'A fresh and natural milk with high-quality standards.',
          ingredients: ['Cow Milk', 'Vitamin D']
        }
      };
    },
    methods: {
      selectProduct() {
        this.$emit('selected', this.product);
      },
      close() {
        this.$emit('close');
      }
    }
  }
  </script>
  
  <style scoped>
  .product-info-container {
    position: fixed;
    left: 50%;
    top: 20%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 10;
  }
  
  .product-details h3 {
    margin-top: 0;
  }
  
  .product-actions button {
    margin-right: 10px;
  }
  </style>
  