<script lang="ts">
	import NavBar from '$lib/components/NavBar.svelte';
	import '@fontsource-variable/fredoka/index.css';
	import '../app.css';
	let { children } = $props();
</script>

<NavBar />
{@render children()}
