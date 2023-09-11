<script>
	// import { page } from '$app/stores';
	import logo from '$lib/images/logo.svg';
</script>

<header>
	<div class="wrapper">
		<div class="menu">
			<a class="logo" href=""><img src="{ logo }" alt=""></a>
		
			<div class="header__infoBlock">
				<a href="" class="infoBlock left">+7 (499) 611-15-91</a>
				<a href="" class="infoBlock right">Поступить к нам</a>
			</div>
		</div>
	</div>
</header>

<style>

	.wrapper {
		max-width: 1980px;
		margin: 0 auto;
		padding: 24px 117px;
	}

	header {
		background-color: var(--color-bg-header);
		height: 100px;
	}

	.menu{
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0 auto;
	}

	.header__infoBlock {
		display: flex;
		align-items: center;
	}

	.infoBlock {
		text-decoration: none;
		color: var(--color-text);
		padding: 16px 22px;
		border-radius: 67px;
		border: 1px solid #000;
		background: #FFF;
		box-shadow: 1px 3px 0px 0px #000;
	}

	.right {
		margin-left: 16px;
		background: #FFE500;
	}
</style>

