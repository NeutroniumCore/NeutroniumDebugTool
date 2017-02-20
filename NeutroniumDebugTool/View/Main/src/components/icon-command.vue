<template>
    <div class="uk-button uk-button-default" :title="detail" uk-tooltip @click="execute">
      <div class="fa" :class="iconName" aria-hidden="true" >
      </div>
    </div>
</template>

<script>
import comandMixin from 'neutronium-vue-command-mixin'

export default {
  mixins:[comandMixin],
  props:{
    detail: String,
    icon: String
  },
  computed:{
    iconName(){
      return "fa-" + this.icon
    }
  }
}
</script>

<style>
.logo {
  height: 50px;
}
</style>
