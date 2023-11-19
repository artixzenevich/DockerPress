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

		<header class="navbar bg-base-100 rounded-xl shadow-lg">
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
							'menu_class' => 'menu menu-horizontal px-1'
						)
					);
				?>
			</div>
			<input type="checkbox" value="synthwave" class="toggle theme-controller"/>
		</header>


