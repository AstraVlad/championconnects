<script lang="ts">
	import EventCard from '$lib/ui/EventCard.svelte';
	export let events: Array<any>;
</script>

<div class="flex flex-wrap gap-5">
	{#each events as event}
		<EventCard data={event} />
	{/each}
</div>
