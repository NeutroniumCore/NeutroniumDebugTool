<template>
  <div :data-tooltip="nome" data-inverted="" data-position="bottom left">
      <button class="ui button"  @click="execute">
        <i class="icon" :class="icon" ></i>
    </button>
  </div>
</template>

<script>
import comandMixin from 'neutronium-vue-command-mixin'

export default {
  mixins:[comandMixin],
  props:{
    nome: String,
    icon: String
  }
}
</script>

<style>
</style>
