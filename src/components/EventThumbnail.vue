<template>
  <div>
    <h1>Event</h1>
    <div>{{ eventThumbnail.name }}</div>
    <div>{{ eventThumbnail.day }}</div>
  </div>
</template>

<script lang="ts">
import { EventInList } from "src/types/event";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class EventThumbnail extends Vue {
  @Prop() eventThumbnail!: EventInList;
}
</script>
