<script>
	// import { page } from '$app/stores';
	import logo from '$lib/images/logo.svg';
</script>

<header>
	<div class="wrapper">
		<div class="menu">
            <nav class="menu__navigation">
                <ul class="navigation__list">
                    <li class="navigation__item"><a href="" class="navigation__itemLink">Категории</a></li>
                    <li class="navigation__item"><a href="" class="navigation__itemLink">Категории</a></li>
                    <li class="navigation__item"><a href="" class="navigation__itemLink">Категории</a></li>
                    <li class="navigation__item"><a href="" class="navigation__itemLink">Категории</a></li>
                    <li class="navigation__item"><a href="" class="navigation__itemLink">Категории</a></li>
                </ul>
            </nav>
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
		background-color: var(--color-bg-main);
		height: 100px;
	}

    .navigation__list{
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .navigation__itemLink{
        text-decoration: none;
        color: var(--color-text);
    }

    .navigation__item:nth-child(n+2){
        margin-left: 40px;
    }
</style>

