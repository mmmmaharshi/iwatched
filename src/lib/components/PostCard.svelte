<script lang="ts">
	import type { PostProps } from '$lib/types';
	import { abbreviateNumber } from 'js-abbreviation-number';

	import { cn, convertRatingToStars, sharePost, truncateText } from '$lib/utils';
	import { formatDistanceToNowStrict } from 'date-fns';
	import ArrowRight from 'phosphor-svelte/lib/ArrowRight';
	import ChatCircle from 'phosphor-svelte/lib/ChatCircle';
	import Export from 'phosphor-svelte/lib/Export';
	import Eye from 'phosphor-svelte/lib/Eye';
	import Heart from 'phosphor-svelte/lib/Heart';
	import ListNumbers from 'phosphor-svelte/lib/ListNumbers';
	import Star from 'phosphor-svelte/lib/Star';

	let { data, isPostRoute }: { data: PostProps; isPostRoute: boolean } = $props();
	const {
		id,
		caption,
		posted_time,
		comments_count,
		likes_count,
		user: { full_name, profile_pic, username },
		film_embbed
	} = data;
</script>

{#if isPostRoute}
	<div class="flex flex-col gap-1 pt-3">
		{@render renderPost()}
	</div>
{:else}
	<a href={'/post/' + id} class="flex flex-col gap-1 pt-3">
		{@render renderPost()}
	</a>
{/if}

{#snippet renderPost()}
	<header class="px-4">
		{@render userProfile()}
	</header>
	<section class="px-4 pt-0.5">
		{@render postCaption()}
	</section>

	{#if film_embbed}
		<section class="mb-0.5 mt-1.5 px-4">
			{@render filmEmbbed()}
		</section>
	{/if}

	<footer class="mt-0.5">
		{@render postActions()}
	</footer>
{/snippet}

{#snippet userProfile()}
	<section class="group flex items-center gap-2.5">
		<div class="avatar input-bordered overflow-hidden rounded-full border">
			<div class="w-9">
				<img alt={full_name + 'profile_pic'} src={profile_pic} />
			</div>
		</div>
		<div class="-space-y-0.5">
			<h2 class="line-clamp-1 font-semibold group-hover:text-primary group-hover:underline">
				{full_name}
			</h2>
			<p class="line-clamp-1 text-sm text-base-content/80">
				@{username} &middot; {formatDistanceToNowStrict(posted_time)}
			</p>
		</div>
	</section>
{/snippet}

{#snippet postCaption()}
	{#if caption.type === 'REVIEW'}
		<p class={cn(isPostRoute ? '' : 'line-clamp-5', 'text-[16px] leading-snug')}>
			<span class="text-primary">{convertRatingToStars(film_embbed!.rating)}</span> — {caption.text}
		</p>
	{:else if caption.type === 'GENERAL'}
		<p class={cn(isPostRoute ? '' : 'line-clamp-5', 'text-[16px] leading-snug')}>
			{caption.text}
		</p>
	{/if}
{/snippet}

{#snippet postActions()}
	<section class="flex items-center justify-between space-y-px px-3">
		<section>
			<div class="flex items-center gap-0.5">
				<button class="btn btn-square btn-ghost btn-sm">
					<Heart size={21} />
				</button>
				<button class="btn btn-square btn-ghost btn-sm">
					<ChatCircle size={21} />
				</button>
				<button
					type="button"
					onclick={async (e) => {
						e.preventDefault();
						e.stopImmediatePropagation();
						e.stopPropagation();
						await sharePost({ title: truncateText(caption.text), url: window.location.href });
					}}
					class="btn btn-square btn-ghost btn-sm"
				>
					<Export size={21} />
				</button>
			</div>
			{#if likes_count || comments_count}
				<p class="line-clamp-1 pl-1 text-xs text-base-content/80">
					{#if likes_count}
						<span>{abbreviateNumber(Number(likes_count))} likes,</span>
					{/if}
					{#if comments_count}
						<span>{abbreviateNumber(Number(comments_count))} comments</span>
					{/if}
				</p>
			{/if}
		</section>
		{#if !isPostRoute}
			{#if caption.type === 'REVIEW'}
				<aside>
					<button class="btn btn-link btn-sm no-underline">Read review <ArrowRight /></button>
				</aside>
			{/if}
		{/if}
	</section>
{/snippet}

{#snippet filmEmbbed()}
	<a
		href={'/film/' + id}
		onclick={(e) => {
			e.stopPropagation();
		}}
		class="input-bordered flex h-44 items-start gap-3 overflow-hidden rounded-xl border bg-base-200"
	>
		<figure class="h-full w-28 shrink-0 overflow-hidden bg-base-100 lg:w-32">
			<img
				src={film_embbed!.poster_path}
				alt={`${film_embbed!.title} (${id})`}
				class="aspect-[2/3] h-full w-full shrink-0 object-cover"
			/>
		</figure>
		<section class="flex h-full w-full flex-col items-start justify-between gap-1 py-2 pr-4">
			<header>
				<h3 class="line-clamp-1 text-lg font-semibold">
					{film_embbed!.title} ({film_embbed!.year.getFullYear()})
				</h3>
				<p class="line-clamp-1 pt-px text-sm text-base-content/85">
					Directed by <span class="font-medium text-base-content">{film_embbed!.director}</span>
				</p>
			</header>
			<div class="flex flex-1 items-start pt-px">
				<p class="line-clamp-4 text-[13px] italic leading-snug text-base-content/70">
					"{film_embbed!.storyline}"
				</p>
			</div>
			<footer
				class="flex w-full items-center justify-between gap-5 text-xs text-base-content/80 md:text-sm lg:justify-start"
			>
				<div class="mt-auto flex max-w-max items-center gap-1">
					<Star size={15} />
					<span>{film_embbed!.rating}</span>
				</div>

				<div class="mt-auto flex max-w-max items-center gap-1">
					<Eye size={17} />
					<span>{abbreviateNumber(film_embbed!.watch_count)}</span>
				</div>

				<div class=" mt-auto flex max-w-max items-center gap-1">
					<ListNumbers size={17} />
					<span>{abbreviateNumber(film_embbed!.in_lists_count)}</span>
				</div>
			</footer>
		</section>
	</a>
{/snippet}
