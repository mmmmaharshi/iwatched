<script lang="ts">
	import { page } from '$app/state';
</script>

<main class="container mx-auto min-h-screen w-full max-w-screen-sm px-4 pt-10 text-center">
	<h1 class="badge badge-info" data-error={page.status}>{page.error?.message}</h1>
</main>
