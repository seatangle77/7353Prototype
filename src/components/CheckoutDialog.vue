<template>
    <div v-if="visible" class="checkout-dialog">
      <div class="message">{{ currentMessage }}</div>
        <img v-if="currentimg" :src="currentimg" alt="pay" />
      <div v-if="showOptions" class="options">
        <button v-for="option in currentOptions" :key="option" @click="handleOption(option)">{{ option }}</button>
      </div>
      <button v-if="showCloseButton" @click="closeDialog">Close</button>
    </div>
  </template>
  
  <script>
  import map from '@/assets/img/pay.png';

  export default {
    data() {
      return {
        visible: false,
        currentStep: 0,
        steps: [
          { 
            message: "Hello! Welcome to our Supermarket. May I scan your items?", 
            options: ["Yes please.", "No thanks."], 
            img: null
          },
          { 
            message: "The total price is $10. Would you like any bags?", 
            options: ["Yes one bag please.", "No thanks."], 
            img: null
          },
          { 
            message: "Ok! What kind of payment would you like to use?", 
            options: ["QR Code", "Octopus Card", "Passcode"],
            img: map
          },
          { 
            message: "This is your receipt. Have a nice day!",
            options: ["Thanks! You too!"],
            img: null
          }
        ],
        currentMessage: "",
        currentOptions: [],
        currentimg: null,
        showOptions: true,
        showCloseButton: false,
      };
    },
    methods: {
      showDialog() {
        this.visible = true;
        this.currentStep = 0;
        this.updateStep();
      },
      closeDialog() {
        this.visible = false;
        // Optionally reset dialog state here if needed
      },
      handleOption(option) {
        // Log or handle the selected option
        console.log("Selected option:", option);
        if (this.currentStep < this.steps.length - 1) {
          this.currentStep++;
          this.updateStep();
        } else {
          this.showOptions = false;
          this.showCloseButton = true;
        }
      },
      updateStep() {
        const step = this.steps[this.currentStep];
        this.currentMessage = step.message;
        this.currentOptions = step.options;
        this.currentimg = step.img;
        this.showOptions = step.options.length > 0;
      }
    }
  };
  </script>
  
  <style scoped>
  .checkout-dialog {
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    z-index: 100;
  }
  
  .message {
    margin-bottom: 20px;
  }
  
  .options button {
    display: inline-block;
    margin-right: 10px;
    padding: 5px 10px;
    background-color: #1d469f;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    color: #fff;
  }
  
  .options button:hover {
    background-color: #517ecb;
  }
  img{
    width: 200px;
  }
  </style>
  