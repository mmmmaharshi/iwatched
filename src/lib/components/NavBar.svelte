<script>
	import Binoculars from 'phosphor-svelte/lib/Binoculars';
	import MagnifyingGlass from 'phosphor-svelte/lib/MagnifyingGlass';
</script>

<nav class="input-bordered sticky top-0 z-50 border-b bg-base-100 py-1.5">
	<section
		class="container mx-auto flex w-full max-w-screen-md items-center justify-between px-4 pl-0"
	>
		<a href="/" class="btn btn-ghost btn-sm gap-0 text-2xl font-semibold">
			<p>
				<span class="text-primary">The</span><span>talkie</span>
			</p>
		</a>
		<aside class="flex items-center gap-4">
			<section class="flex items-center gap-1">
				<a href="/" class="btn btn-ghost btn-sm h-10">
					<MagnifyingGlass size={20} weight="bold" />
				</a>
				<a href="/" class="btn btn-ghost btn-sm h-10">
					<Binoculars size={25} />
				</a>
			</section>
			<a href="/" class="btn btn-ghost h-auto min-h-max w-auto overflow-hidden rounded-xl p-0">
				<div class="avatar">
					<div class="w-9 rounded-xl">
						<img
							alt="profile_pic"
							src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
						/>
					</div>
				</div>
			</a>
		</aside>
	</section>
</nav>
