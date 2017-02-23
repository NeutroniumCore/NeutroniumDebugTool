<template>
  <div>
      <button class="ui button inverted" :data-tooltip="nome" :data-position="position" @click="execute">
        <i class="icon" :class="icon" ></i>
    </button>
  </div>
</template>

<script>
import comandMixin from 'neutronium-vue-command-mixin'

export default {
  mixins:[comandMixin],
  computed:{
    position() {
      return this.direction + ' center'
    }
  },
  props:{
    nome: String,
    icon: String,
    direction:{
      type: String,
      default: 'left'
    }
  }
}
</script>

<style>
</style>
