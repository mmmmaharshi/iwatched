<script lang="ts">
	import PostCard from '$lib/components/PostCard.svelte';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<main class="container mx-auto min-h-screen w-full max-w-screen-sm md:input-bordered md:border-x">
	{#if data}
		<PostCard data={data.data} isPostRoute={data.isPostRoute} />
	{/if}
</main>
