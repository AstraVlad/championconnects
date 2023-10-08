<script>
	import { events } from '$lib/data';
	import EventsSidebar from '$lib/ui/EventsSidebar.svelte';
	export let data;
</script>

<div class="flex gap-5 mt-3 ml-1">
	<EventsSidebar events={data.events} />
	<slot />
</div>
