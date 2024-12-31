<script setup lang="ts">
import { localStorage } from 'rattail'
import { StyleProvider } from "@varlet/ui"

import { darkTheme } from "@/styles/dark"
import { lightTheme } from "@/styles/light"

const userTheme = localStorage.get('prefer-dark')
const { store, system } = useColorMode({
  attribute: 'color-scheme',
  storageKey: 'prefer-dark',
  initialValue: userTheme || 'auto',
})

const theme = computed(() => store.value === 'auto' ? system.value : store.value)

watchEffect(() => {
  StyleProvider(theme.value === 'light' ? lightTheme : darkTheme)
})

function onChangeTheme(mode: 'light' | 'dark' | 'auto') {
  store.value = mode
}

const themeGroup = [
  {
    icon: 'i-carbon-sun',
    title: 'light',
  },
  {
    icon: 'i-carbon:cloud-service-management',
    title: 'auto',
  },
  {
    icon: 'i-carbon-moon',
    title: 'dark',
  }
]
</script>
<template>
  <var-button-group mode="outline" type="primary">
    <var-button v-for="item in themeGroup" :key="item.title" @click="onChangeTheme(item.title)" :type="theme === item.title ? 'primary' : ''">
      <span :class="item.icon"></span>
    </var-button>
  </var-button-group>
</template>
