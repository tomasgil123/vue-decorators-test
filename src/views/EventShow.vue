<template>
  <div>
    <h1>Event show</h1>
    <div>Number of the event {{ id }}</div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class EventShow extends Vue {
  @Prop() id!: string;
}
</script>
