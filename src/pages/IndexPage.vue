<template>
  <div id="q-app" style="min-height: 100vh">
    <div class="q-pa-md">
      <q-parallax>
        <template v-slot:media>
          <img src="~src\assets\123.png" />
        </template>

        <template v-slot:content="scope">
          <div
            class="absolute column items-center"
            :style="{
              opacity: 0.6 + (1 - scope.percentScrolled) * 0.55,
              top: scope.percentScrolled * 60 + '%',
              left: 0,
              right: 0,
            }"
          >
            <img
              src="~src\assets\book.png"
              style="width: 150px; height: 150px"
            />
            <div class="text-h3 text-white text-center">
              <strong>MY INTRODUCTION</strong>
            </div>
          </div>

          <div></div>
        </template>
      </q-parallax>
    </div>

    <div class="q-pa-md q-gutter-sm" text-center>
      <q-btn
        color="primary"
        class="about-button"
        label="About Me"
        @click="($event) => $router.push('/about')"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>

<style scoped>
.images {
  display: flex;
  align-items: center;
  width: 20%;
  height: 30%;
}
</style>
