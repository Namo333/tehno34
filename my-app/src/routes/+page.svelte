<script>
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';
	import heroImg from '$lib/images/mainImg.svg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="herro__block">
	<div class="wrapper">
		<div class="heroBlock__content">
			<div class="content__left">
				<h1 class="content__leftTitle">Откройте дверь в будущее с нами</h1>
				<p class="content__leftText">Решаешь куда поступить и кем быть? Приходи и мы расскажем!</p>
				<a href="" class="content__leftButton">Поступить к нам!</a>
			</div>
			<div class="content__right">
				<img class="content__rightImg" src="{ heroImg }" alt="">
			</div>
		</div>
	</div>
</section>

<section class="herro__blockState">
	<div class="wrapper">
		<div class="blockState__content">
			<div class="content__block">
				<h1 class="content__blockTitle">12.000+</h1>
				<p class="content__blockText">Довольных учеников</p>
			</div>
			<div class="content__block">
				<h1 class="content__blockTitle">9+</h1>
				<p class="content__blockText">Лучших профессий</p>
			</div>
			<div class="content__block">
				<h1 class="content__blockTitle">3</h1>
				<p class="content__blockText">Корпуса</p>
			</div>
		</div>
	</div>
</section>

<style>
	.herro__block{
		background-color: var(--color-bg-main);
		height: 79vh;
	}

	.herro__blockState{
		background-color: var(--color-bg-main);
		height: 20vh;
	}

	.heroBlock__content{
		display: flex;
	}

	.content__left{
		margin-top: 130px;
	}

	.content__leftTitle{
		font-size: 64px;
		font-style: normal;
		font-weight: 700;
		line-height: 96.5px; /* 150.781% */
		margin: -11px auto;
	}

	.content__leftText{
		font-size: 25px;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
		margin-bottom: 35px;
	}

	.content__leftButton{
		text-decoration: none;
		color: var(--color-text);
		padding: 16px 22px;
		border-radius: 67px;
		border: 1px solid #000;
		background: var(--color-button);
		box-shadow: 1px 3px 0px 0px #000;
		leading-trim: both;
		text-edge: cap;
		font-size: 18px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
	}

	.content__rightImg{
		width: 100%;
	}


	.blockState__content{
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.content__block{
		text-align: center;
	}

	.content__blockTitle{
		leading-trim: both;
		text-edge: cap;
		font-size: 44px;
		font-style: normal;
		font-weight: 700;
		margin: 10px auto;
	}

	.content__blockText{
		color: var(--color-smol-text);
		leading-trim: both;
		text-edge: cap;
		font-size: 20px;
		font-style: normal;
		font-weight: 500;
		margin: 0;
	}

	.content__block:nth-child(n+2){
		margin-left: 200px
	}
</style>
