<script lang="ts">
	import { Tabs, TabItem } from 'flowbite-svelte';

	import { Hr, P } from 'flowbite-svelte';
	import { page } from '$app/stores';
	import setParams from '$lib/util/setparams';
	import EventsList from '$lib/ui/EventsList.svelte';
	import EventsCards from '$lib/ui/EventsCards.svelte';
	import { viewParamName, sportsParamName } from '$lib/constants';
	import { checkIfSportsIsActive } from '$lib/util/processURLParams';

	export let data;

	$: events = data.events.filter((event) =>
		checkIfSportsIsActive(event.sport, $page.url.searchParams.get(sportsParamName))
	);
</script>

<div>
	<Tabs>
		<TabItem
			on:click={() => setParams($page.url.searchParams, viewParamName, 'cards')}
			open={$page.url.searchParams.get(viewParamName)
				? $page.url.searchParams.get(viewParamName) === 'cards'
				: true}
		>
			<span slot="title">As cards</span>
			<EventsCards {events} />
		</TabItem>
		<TabItem
			on:click={() => setParams($page.url.searchParams, viewParamName, 'list')}
			open={$page.url.searchParams.get(viewParamName) === 'list'}
		>
			<span slot="title">As list</span>
			<EventsList {events} />
		</TabItem>
		<TabItem
			on:click={() => setParams($page.url.searchParams, viewParamName, 'map')}
			open={$page.url.searchParams.get(viewParamName) === 'map'}
		>
			<span slot="title">On the map</span>
			<P class="text-sm text-gray-500 dark:text-gray-400">No map yet (but will be)</P>
		</TabItem>
	</Tabs>
</div>
