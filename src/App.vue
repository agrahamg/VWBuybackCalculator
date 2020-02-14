<template>
<div>
  <header>
    vw buyback calculator
  </header>
  <main>
    <select
    name="region" 
    id="regions"
    v-model="region"
    >
      <option 
        v-for="region in regions"
        :key="region.state"
        :value="region.region">
        {{region.state}}
      </option>
    </select>
    {{region}}
  </main>
</div>
</template>

<script>

import regions from '@/data/regions'
import {ref} from '@vue/composition-api'

export default {
  name: 'App',

  setup(){
    const region = ref('')

    return {
      regions,
      region
    }
  }

}
</script>

<style>

</style>
