<script>
	import PostFilmEmbbed from '$lib/components/PostFilmEmbbed.svelte';
</script>

<main class="container mx-auto min-h-screen w-full max-w-screen-sm pt-5">
	<section class="flex flex-col gap-1.5">
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
		<p class="px-4 italic leading-snug">
			"always great to see a feel-good movie about traveling, recognizing your worth & wearing fun
			new accessories as you leave a toxic relationship. :) getting rid of a shitty boyfriend can be
			a real bear."
		</p>
		<section class="mt-1 px-4">
			<PostFilmEmbbed />
		</section>
	</section>
</main>
