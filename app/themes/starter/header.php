<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Starter
 */

?>
<!doctype html>
<html <?php language_attributes(); ?> data-theme="light">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<div class="container px-3 mx-auto">
		<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'starter' ); ?></a>

		<header class="navbar bg-base-100 rounded-xl shadow-lg gap-2 items-center">
			<div class="flex-1">
				<a href="<?= home_url() ?>" class="btn btn-ghost text-xl"><?php bloginfo( 'name' ); ?></a>
			</div>
			<div class="flex-none">
				<?php
					wp_nav_menu(
						array(
							'theme_location' => 'menu-1',
							'container'       => 'ul',
							'menu_id'        => 'primary-menu',
							'menu_class' => 'menu menu-sm dropdown-content z-[1] p-2 bg-base-100 rounded-box w-52'
						)
					);
				?>

			</div>
			<div class="flex-2">
				<div class="drawer drawer-end z-50">
					<input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
					<div class="drawer-content">
						<!-- Page content here -->
						<label for="my-drawer-4" class="drawer-button btn btn-ghost btn-circle ">
							<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
						</label>
					</div> 
					<div class="drawer-side">
						<label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
						<div class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
							<?php get_sidebar(); ?>
						</div>
					</div>
				</div>
			</div>
		</header>


