<script lang="ts">
	import { Hr } from 'flowbite-svelte';
	export let events: Array<any>;
</script>

<ul>
	{#each events as event, index}
		<li class="dark:text-gray-300">
			<span class="font-semibold">{index + 1}. {event.name}</span>
			<p class="dark:text-gray-400">{event.about}</p>
		</li>
		{#if index < events.length - 1}
			<Hr />
		{/if}
	{/each}
</ul>
