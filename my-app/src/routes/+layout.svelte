<script>
	import Header from '../lib/components/Header.svelte';
	import Navmenu from '../lib/components/Navmenu.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import '../lib/styles.css';
	import '../lib/adaptive.css';
</script>

<div class="app">
	<Header />
	<Navmenu />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
</style>
