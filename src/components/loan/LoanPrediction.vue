<template>
  <div class="row">
    <template v-for="variant in ['primary','secondary','success','outline-success','warning','danger','link']">
      <div class="col-md-4 pb-2" v-for="size in ['sm','','lg']">
        <b-button :size="size" :variant="variant" href="">
          {{variant}} {{size}}
        </b-button>
      </div>
    </template>
  </div>
</template>

<script>

</script>
