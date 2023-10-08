<script lang="ts">
	import { page } from '$app/stores';
	import {
		Sidebar,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper,
		SidebarDropdownWrapper,
		Checkbox
	} from 'flowbite-svelte';
	import {
		ShoppingCartSolid,
		MailBoxSolid,
		UserSolid,
		CalendarWeekSolid
	} from 'flowbite-svelte-icons';

	import { sportsParamName } from '$lib/constants';

	import setParams from '$lib/util/setparams';
	import { checkIfSportsIsActive } from '$lib/util/processURLParams';
	import { onMount } from 'svelte';

	export let events: Array<any>;
	let spanClass = 'flex-1 ml-3 whitespace-nowrap';

	$: activeUrl = $page.url.pathname;
	$: sports = events.map((elem: any) => elem.sport).sort();

	const handleSportsFilterClick = (sport: string, sportsParam: string | null) => {
		const sportsArray = sportsParam ? sportsParam.split('|') : [];
		if (checkIfSportsIsActive(sport, sportsParam)) {
			setParams(
				$page.url.searchParams,
				sportsParamName,
				sportsArray.filter((elem) => elem != sport).join('|')
			);
		} else {
			setParams($page.url.searchParams, sportsParamName, [...sportsArray, sport].join('|'));
		}
	};

	onMount(() => {
		if (sports.length > 0) {
			setParams($page.url.searchParams, sportsParamName, sports.join('|'));
		}
	});

	//active={$page.url.searchParams.get(sportsParamName) === sport}
</script>

<Sidebar {activeUrl}>
	<SidebarWrapper>
		<SidebarGroup>
			<SidebarItem label="All events">
				<svelte:fragment slot="icon">
					<CalendarWeekSolid
						class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
					/>
				</svelte:fragment>
			</SidebarItem>
			<SidebarDropdownWrapper
				isOpen={$page.url.searchParams.get(sportsParamName) != null}
				label="My Sports"
			>
				<svelte:fragment slot="icon">
					<ShoppingCartSolid
						class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
					/>
				</svelte:fragment>
				<ul class="w-48 dark:bg-gray-800">
					{#each sports as sport}
						<li class="p-2 ml-5">
							<Checkbox
								checked={checkIfSportsIsActive(sport, $page.url.searchParams.get(sportsParamName))}
								on:change={() =>
									handleSportsFilterClick(sport, $page.url.searchParams.get(sportsParamName))}
							>
								{sport}
							</Checkbox>
						</li>
					{/each}
				</ul>
			</SidebarDropdownWrapper>
			<SidebarItem label="My events" {spanClass}>
				<svelte:fragment slot="icon">
					<MailBoxSolid
						class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
					/>
				</svelte:fragment>
				<svelte:fragment slot="subtext">
					<span
						class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200"
					>
						3
					</span>
				</svelte:fragment>
			</SidebarItem>
			<SidebarItem label="Create Event">
				<svelte:fragment slot="icon">
					<UserSolid
						class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
					/>
				</svelte:fragment>
			</SidebarItem>
		</SidebarGroup>
	</SidebarWrapper>
</Sidebar>

<!---
<SidebarDropdownItem
						on:click={() =>
							setParams(
								$page.url.searchParams,
								sportsParamName,
								$page.url.searchParams.get(sportsParamName) === sport ? null : sport
							)}
						label={sport}
						active={checkIfSportsIsActive(sport, $page.url.searchParams.get(sportsParamName))}
					/>
-->
