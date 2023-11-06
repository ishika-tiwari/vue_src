<template>
  <div id="q-app" style="min-height: 100vh">
    <q-parallax>
      <template v-slot:media>
        <img src="~src\assets\pink.gif" />
        <div class="q-pa-md">
          <div class="q-col-gutter-md row justify-center items-center">
            <div class="images">
              <q-img src="~src\assets\Ishika_Tiwari.png">
                <div class="absolute-bottom text-subtitle1 text-center">
                  Ishika Tiwari
                </div>
              </q-img>
            </div>
          </div>
        </div>
      </template>
    </q-parallax>

    <div class="q-pa-md1">
      <h6>
        <strong
          >Hello! My name is Ishika Tiwari. I am from Madhya Pradesh.</strong
        >
      </h6>
      <h6>
        <strong
          >I am a software engineer, currently working in LTIMindtree. This is
          my small introduction.</strong
        >
      </h6>
    </div>

    <div class="q-pa-md q-gutter-sm text-center">
      <q-btn
        color="primary"
        class="about-button"
        label="My Hobbies"
        @click="($event) => $router.push('/about/hobbies')"
      />
    </div>

    <div class="q-pa-md q-gutter-sm1 text-center">
      <q-btn
        color="primary"
        class="about-button"
        label="My Skills"
        @click="($event) => $router.push('/about/skills')"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutMe",
});
</script>
<style scoped>
.images {
  width: 20%;
  height: 30%;
  display: inline-block;
}

.q-pa-md1 {
  text-align: center;
}
</style>
