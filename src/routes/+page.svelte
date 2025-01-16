<script>
	import PostCard from '$lib/components/PostCard.svelte';
</script>

<main class="container mx-auto min-h-screen w-full max-w-screen-sm pt-2">
	<div class="divide-base-content/10 flex h-full w-full flex-col gap-3 divide-y">
		{#each Array(10).fill(null) as item}
			<PostCard />
		{/each}
	</div>
</main>
