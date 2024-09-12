<template>
    <button :style="buttonStyle">{{ text }}</button>
</template>

<script setup>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true
    },
    backgroundColor: {
      type: String,
      default: '#42b983'
    },
    color: {
      type: String,
      default: '#ffffff'
    },
    borderColor: {
      type: String,
      default: '#42b983'
    }
  },
  computed: {
    buttonStyle() {
      return {
        backgroundColor: this.backgroundColor,
        color: this.color,
        border: `1px solid ${this.borderColor}`,
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px'
      };
    }
  }
};
</script>