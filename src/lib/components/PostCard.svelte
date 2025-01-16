<script>
	import Eye from 'phosphor-svelte/lib/Eye';
	import ListNumbers from 'phosphor-svelte/lib/ListNumbers';
	import Star from 'phosphor-svelte/lib/Star';
</script>

<section class="flex flex-col gap-1.5 py-2 pt-3">
	<header class="px-4">
		<section class="flex items-center gap-3">
			<div class="avatar">
				<div class="w-9 rounded-xl">
					<img
						alt="profile_pic"
						src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
					/>
				</div>
			</div>
			<div class="-space-y-1">
				<h2 class="font-semibold">Manohar Maharshi</h2>
				<p class="text-base-content/85 text-sm">@mmmmaharshi</p>
			</div>
		</section>
	</header>
	<p class="px-4 text-[16px] leading-snug">
		"always great to see a feel-good movie about traveling, recognizing your worth & wearing fun new
		accessories as you leave a toxic relationship. :) getting rid of a shitty boyfriend can be a
		real bear."
	</p>
	<section class="mt-1.5 px-4">
		{@render filmEmbbed()}
	</section>
</section>

{#snippet filmEmbbed()}
	<section
		class="input-bordered bg-base-200 flex h-44 items-start gap-4 overflow-hidden rounded-xl border"
	>
		<figure class="bg-base-100 h-full w-28 shrink-0 overflow-hidden lg:w-32">
			<img
				src="https://a.ltrbxd.com/resized/film-poster/4/5/9/5/6/4/459564-midsommar-0-1000-0-1500-crop.jpg?v=ed7b8ded1f"
				alt="movie"
				class="aspect-[2/3] h-full w-full shrink-0 object-cover"
			/>
		</figure>
		<section class="flex h-full w-full flex-col items-start justify-between gap-1 py-2 pr-4">
			<header>
				<h3 class="line-clamp-1 text-lg font-semibold">Midsommar (2019)</h3>
				<p class="text-base-content/85 line-clamp-1 text-sm">
					Directed by <span class="font-medium">Ari Aster</span>
				</p>
			</header>
			<div class="flex flex-1 items-start">
				<p class="text-base-content/80 line-clamp-4 text-[13px] italic leading-snug">
					"Several friends travel to Sweden to study as anthropologists a summer festival that is
					held every ninety years in the remote hometown of one of them. What begins as a dream
					vacation in a place where the sun never sets, gradually turns into a dark nightmare as the
					mysterious inhabitants invite them to participate in their disturbing festive activities."
				</p>
			</div>
			<footer
				class="text-base-content/80 flex w-full items-center justify-between gap-5 text-sm lg:justify-start"
			>
				<div class="mt-auto flex max-w-max items-center gap-1">
					<Star size={15} />
					<span>3.5 ½</span>
				</div>

				<div class="mt-auto flex max-w-max items-center gap-1">
					<Eye size={17} />
					<span>20</span>
				</div>

				<div class=" mt-auto flex max-w-max items-center gap-1">
					<ListNumbers size={17} />
					<span>20</span>
				</div>
			</footer>
		</section>
	</section>
{/snippet}
