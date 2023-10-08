<script>
	import '../app.postcss';
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Dropdown,
		DropdownItem,
		DropdownHeader,
		DropdownDivider,
		Avatar,
		DarkMode,
		Badge
	} from 'flowbite-svelte';
	import { page } from '$app/stores';
	$: activeUrl = $page.url.pathname;
	let activeClass =
		'text-white bg-green-700 md:bg-transparent md:text-green-700 md:dark:text-white dark:bg-green-600 md:dark:bg-transparent';
	let nonActiveClass =
		'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';
</script>

<Navbar fluid rounded color="form">
	<NavBrand class="flex-1" href="/">
		<img src="/images/logo.jpg" class="mr-3 h-6 sm:h-9" alt="Site Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
			>Sports Scout</span
		>
	</NavBrand>
	<div class="flex items-center md:order-2">
		<Avatar id="avatar-menu" src="/avatars/pascal.jpg" />
	</div>
	<Dropdown placement="bottom" triggeredBy="#avatar-menu">
		<DropdownHeader>
			<span class="block text-sm">Test User</span>
			<span class="block truncate text-sm font-medium">name@mail-server.com</span>
		</DropdownHeader>
		<DropdownItem>Dashboard</DropdownItem>
		<DropdownItem>Settings</DropdownItem>
		<DropdownDivider />
		<DropdownItem>
			Buy Premium
			<Badge border rounded color="green">%</Badge>
		</DropdownItem>
		<DropdownDivider />
		<DropdownItem>Sign out</DropdownItem>
		<DropdownDivider />
		<DarkMode class="ring-inset" />
	</Dropdown>
	<NavHamburger />
	<NavUl {activeUrl}>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/events">Events and Tournaments</NavLi>
		<NavLi href="/coaches">Clubs and Coaches</NavLi>
		<NavLi href="/athlets">Athlets</NavLi>
		<NavLi href="/bazaar">Gear Bazaar</NavLi>
		<NavLi href="/shop">Merchant's Place</NavLi>
		<NavLi href="/help">Help</NavLi>
	</NavUl>
</Navbar>

<slot />
