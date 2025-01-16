<script lang="ts">
	import '@fontsource-variable/fredoka/index.css';
	import '../app.css';
	let { children } = $props();
</script>

<main class="container mx-auto min-h-screen w-full max-w-screen-sm">
	{@render children()}
</main>
