<script lang="ts">
	import PostCard from '$lib/components/PostCard.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<main class="container mx-auto min-h-screen w-full max-w-screen-sm md:input-bordered md:border-x">
	<div class="flex h-full w-full flex-col gap-4 divide-y divide-base-content/10 pb-20 pt-1">
		{#if data.data.length > 0}
			{#each data.data as item}
				<PostCard data={item} isPostRoute={data.isPostRoute} />
			{/each}
		{/if}
	</div>
</main>
