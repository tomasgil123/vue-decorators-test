<template>
  <h1>Event List</h1>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class EventShow extends Vue {
  data() {
    return {
      listEvents: [],
    };
  }
}
</script>
