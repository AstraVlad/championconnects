<script lang="ts">
	import { page } from '$app/stores';
	$: activeUrl = $page.url.pathname;
</script>

<div>{activeUrl}</div>
