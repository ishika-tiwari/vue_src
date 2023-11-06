<template>
  
  
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          My Profile
        </q-toolbar-title>

        <div>Get to know me better! {{}}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Educational Background',
    caption: 'MCA (Science)',
    icon: 'school',
    link: 'http://localhost/#/about'
  },
  {
    title: 'Github',
    caption: 'github.com/ishika_tiwari',
    icon: 'code',
    link: 'https://github.com'
  },
  
  {
    title: 'Goodreads Account',
    caption: 'Goodreads challenge 42/50',
    icon: 'favorite',
    link: 'https://www.goodreads.com/user/show/134652324'
  },
  {
    title: 'Instagram',
    caption: '@ishika_tiwari',
    icon: 'rss_feed',
    link: 'https://instagram.com/_ishika_tiwari?igshid=OGQ5ZDc2ODk2ZA=='
  },
  {
    title: 'Facebook',
    caption: '@ishika_tiwari',
    icon: 'public',
    link: 'https://facebook.ishika_tiwari'
  }
  
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
