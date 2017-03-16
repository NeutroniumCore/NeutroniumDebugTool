<template>
<div class="ui label about-badge">
    {{text}}
    <div class="detail">
    {{info}}
    </div>
</div>
</template>

<script>

export default {
  props:{
    text: String,
    info: String
  }
}
</script>

<style>
</style>