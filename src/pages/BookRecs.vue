<template>
  <div>
    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-avatar rounded>
          <img src="~src\assets\life.jpg" />
        </q-avatar>
      </q-item-section>
      <q-item-section><strong>A little life</strong></q-item-section>
      <p><strong>By Hanya Yanagihara</strong></p>
    </q-item>
    <q-separator></q-separator>

    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-avatar rounded>
          <img src="~src\assets\great.jpg" />
        </q-avatar>
      </q-item-section>
      <q-item-section><strong>Great Expectations</strong></q-item-section>
      <p><strong>By Charles Dickens</strong></p>
    </q-item>
    <q-separator></q-separator>

    <q-item clickable v-ripple>
      <q-item-section avatar>
        <q-avatar rounded>
          <img src="~src\assets\1984.jpg" />
        </q-avatar>
      </q-item-section>
      <q-item-section><strong>1984</strong></q-item-section>
      <p><strong>By George Orwell</strong></p>
    </q-item>
  </div>

  <div class="q-pa-md q-gutter-sm3" text-center>
    <q-btn
      color="primary"
      class="about-button"
      label="Back"
      @click="($event) => $router.push('/recs/hobbies')"
    />
  </div>
</template>
