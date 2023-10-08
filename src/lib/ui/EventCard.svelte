<script lang="ts">
	import type { EventCardProps } from '$lib/ui/eventcard';
	import { Card, Button, Toggle } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	export let data: EventCardProps;
</script>

<Card img="/images/Sport_balls.svg.png" class="mb-4">
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
	<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
		{data.about}
	</p>
	<Button>
		Enroll <ArrowRightOutline class="w-3.5 h-3.5 ml-2 text-white" />
	</Button>
</Card>
