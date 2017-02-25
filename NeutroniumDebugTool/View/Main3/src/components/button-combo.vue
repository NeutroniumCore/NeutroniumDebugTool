<template>
  <div class="button-combo">
    <div v-if="hoover" class="ui right pointing label hover-tool">
      {{hoover}}
    </div>

    <div :class="{'no-hoover': !hoover}" class="ui icon buttons grey inverted" @mouseleave="hoover= null">
      <icon-command v-for="command in commands" :command="command.command" :class="{'active': command.active}" :icon="command.icon" :name="command.name" @mouseenter.native="hoover =command.name">
      </icon-command>
    </div>
  </div>
</template>

<script>
import iconCommand from './icon-command'

export default {
  components: {
    iconCommand
  },
  props:{
    commands: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      hoover: null
    }
  }
}
</script>

<style>
.hover-tool {
  width:100px;
}

.button-combo .no-hoover {
  margin-left:110px;
}
</style>
