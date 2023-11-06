<template>

<div>
<h4><strong>I only like to read. Novels are life. Books over humans.</strong></h4>
<p>One more hobby is singing. Like sometimes. But only Taylor Swift's songs.</p>
</div>

<div class="q-pa-md q-gutter-sm1">
  <q-btn color="primary" class="about-button" label="Book reccomandations" @click="$event => $router.push('/hobbies/recs')"/>
</div>
<div class="q-pa-md q-gutter-sm1">
  <q-btn color="primary" class="about-button" label="Back" @click="$event => $router.push('/hobbies/about')"/>
</div>

</template>

<script>
</script>

<style scoped>

.h3 {
    text-align: center;
}
</style>
