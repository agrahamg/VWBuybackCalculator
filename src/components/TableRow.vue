<template>
  <tr>
    <td>{{ title }}</td>
    <td>${{ obj.buyback }}</td>
    <td>${{ obj.modification }}</td>
  </tr>
</template>

<script>
  export default {
    name: 'TableRow',
    props:{
      title:{
        type:String,
        required:true
      },
      obj:{
        type: Object,
        required:true
      }
    }

  }
</script>
