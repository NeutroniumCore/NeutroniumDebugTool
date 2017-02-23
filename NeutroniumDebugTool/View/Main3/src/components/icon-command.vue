<template>
  <div>
      <button class="ui button inverted" :data-tooltip="nome" data-position="bottom center" @click="execute">
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
