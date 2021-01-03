<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta content="width=device-width, initial-scale=1.0" name="viewport">
	<meta name="format-detection" content="telephone=no">
	<meta name="description" content="">
	<meta property="og:description" content="박병준과 양승혜의 결혼식에 초대합니다." />
	<meta property="og:image" content="https://seunghye-byungjun-wedding.github.io/wedding/images/main/main.jpg" />
	<meta name="author" content="ByungJun">
	<title>승혜 &amp; 병준</title>

	<link rel="icon" href="images/favicon.jpg">
	<!-- Bootstrap -->
	<link rel="stylesheet" href="css/bootstrap/bootstrap.min.css" type="text/css" media="screen" />
	<!-- Pace -->
	<link rel="stylesheet" href="css/preloader.css" media="screen">
	<link rel="stylesheet" href="css/preloader-default.css" media="screen">
	<!-- Flexslider -->
	<link rel="stylesheet" href="css/flexslider/flexslider.css" type="text/css">
	<!-- Animate -->
	<link rel="stylesheet" href="css/animate/animate.css" type="text/css">
	<!-- Countdown -->
	<link rel="stylesheet" href="css/countdown/jquery.countdown.css" type="text/css">
	<!-- Magnific Popup -->
	<link rel="stylesheet" href="css/magnific-popup/magnific-popup.css" type="text/css">
	<!-- Owl Carousel -->
	<link rel="stylesheet" href="css/owlcarousel/owl.carousel.css" type="text/css">
	<link rel="stylesheet" href="css/owlcarousel/owl.theme.css" type="text/css">
	<!-- Icon -->
	<link rel="stylesheet" href="css/fonts/fontello/css/fontello.css" type="text/css" media="screen" />
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<!-- Font -->
	<link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Arvo:400,700' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' type='text/css'>

	<!-- Theme CSS -->
	<link href="css/style.css" rel="stylesheet" media="screen">

	<!-- Skin CSS -->
	<style>
		/* The Modal (background) */
		.modal {
			display: none;
			/* Hidden by default */
			position: fixed;
			/* Stay in place */
			z-index: 99999;
			/* Sit on top */
			left: 0;
			top: 0;
			width: 100%;
			/* Full width */
			height: 100%;
			/* Full height */
			overflow: auto;
			/* Enable scroll if needed */
			background-color: rgb(0, 0, 0);
			/* Fallback color */
			background-color: rgba(0, 0, 0, 0.4);
			/* Black w/ opacity */
			-webkit-animation-name: fadeIn;
			/* Fade in the background */
			-webkit-animation-duration: 0.4s;
			animation-name: fadeIn;
			animation-duration: 0.4s
		}

		/* Modal Content */
		.modal-content {
			position: fixed;
			bottom: 0;
			background-color: #fefefe;
			width: 100%;
			-webkit-animation-name: slideIn;
			-webkit-animation-duration: 0.4s;
			animation-name: slideIn;
			animation-duration: 0.4s
		}

		/* The Close Button */
		.modal-close {
			color: black;
			float: right;
			font-size: 28px;
			font-weight: bold;
		}

		.modal-close:hover,
		.modal-close:focus {
			color: #000;
			text-decoration: none;
			cursor: pointer;
		}

		.modal-header {
			padding: 2px 16px;
			color: white;
		}

		.modal-body {
			padding: 5px 16px;
		}

		.modal-footer {
			padding: 2px 16px;
			color: white;
		}

		.modal2 {
			display: none;
			/* Hidden by default */
			position: fixed;
			/* Stay in place */
			z-index: 99999;
			/* Sit on top */
			left: 0;
			top: 0;
			width: 100%;
			/* Full width */
			height: 100%;
			/* Full height */
			overflow: auto;
			/* Enable scroll if needed */
			background-color: rgb(0, 0, 0);
			/* Fallback color */
			background-color: rgba(0, 0, 0, 0.4);
			/* Black w/ opacity */
			-webkit-animation-name: fadeIn;
			/* Fade in the background */
			-webkit-animation-duration: 0.4s;
			animation-name: fadeIn;
			animation-duration: 0.4s
		}

		/* Modal Content */
		.modal-content2 {
			position: fixed;
			bottom: 0;
			background-color: #fefefe;
			width: 100%;
			-webkit-animation-name: slideIn;
			-webkit-animation-duration: 0.4s;
			animation-name: slideIn;
			animation-duration: 0.4s
		}

		/* The Close Button */
		.modal-close2 {
			color: black;
			float: right;
			font-size: 28px;
			font-weight: bold;
		}

		.modal-close2:hover,
		.modal-close2:focus {
			color: #000;
			text-decoration: none;
			cursor: pointer;
		}

		.modal-header2 {
			padding: 2px 16px;
			color: white;
		}

		.modal-body2 {
			padding: 5px 16px;
		}

		.modal-footer2 {
			padding: 2px 16px;
			color: white;
		}

		/* Add Animation */
		@-webkit-keyframes slideIn {
			from {
				bottom: -300px;
				opacity: 0
			}

			to {
				bottom: 0;
				opacity: 1
			}
		}

		@keyframes slideIn {
			from {
				bottom: -300px;
				opacity: 0
			}

			to {
				bottom: 0;
				opacity: 1
			}
		}

		@-webkit-keyframes fadeIn {
			from {
				opacity: 0
			}

			to {
				opacity: 1
			}
		}

		@keyframes fadeIn {
			from {
				opacity: 0
			}

			to {
				opacity: 1
			}
		}

		#toast {
    position: fixed;
    bottom: 30px;
    left: 50%;
    padding: 15px 20px;
    transform: translate(-50%, 10px);
    border-radius: 30px;
    overflow: hidden;
    font-size: .8rem;
    opacity: 0;
    visibility: hidden;
    transition: opacity .5s, visibility .5s, transform .5s;
    background: rgba(0, 0, 0, .35);
    color: #fff;
    z-index: 10000;
}

#toast.reveal {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, 0)
}
	</style>



</head>

<body class="outside-bottom-bar-page">
	<!--PRELOADER-->
	<div id="preloader">

		<div class="alignment">
			<div class="v-align center-middle">

				<!-- LEFT HEART -->
				<div class="heart-animation">
					<i class="de-icon-heart"></i>
				</div>

				<!-- RIGHT HEART -->
				<div class="heart-animation-reverse">
					<i class="de-icon-heart"></i>
				</div>

			</div>
		</div>

	</div>
	<!--END of PRELOADER-->


	<!-- MAIN SLIDER -->
	<section id="main-slider" class="flexslider fullscreen">

		<!-- MAIN SLIDER TITLE OUTTER WRAPPER -->
		<div class="slide-title-outter-wrapper">

			<!-- MAIN SLIDER TITLE INNER WRAPPER -->
			<div class="slide-title-inner-wrapper">

				<!-- TITLE 2 -->
				<div class="slide-title">

					<div class="container">
						<div class="row">
							<div class="col-sm-offset-3 col-sm-6 animation delay1 fadeInUp">

								<div id="invited">
									You're Invited
								</div>
								<div class="banner-text withlove medium light">
									<h2>박병준과 양승혜의</h2>
									<h2>결혼식에 초대합니다.</h2>
								</div>
								<div id="banner-date">
									<h3>
										- 2021.01.30 오후 4시 </br>
										- 신도림라마다호텔 </br>
										- 5층 세인트그레이스홀</h3>
								</div>

							</div>
						</div>
					</div>

				</div>

			</div><!-- END of MAIN SLIDER TITLE INNER WRAPPER -->

		</div> <!-- END of MAIN SLIDER TITLE OUTTER WRAPPER -->

		<!-- MAIN SLIDER IMAGES -->

		<ul class="slides">
			<li>
				<!-- SLIDE IMAGE -->
				<div data-stellar-ratio="0.5" class="slide-image" style="background-image:url(./images/main/main.jpg); background-position:top center">
				</div>

				<!-- SLIDE OVERLAY -->
				<div class="slide-overlay" style="opacity:0"> </div>

			</li>
		</ul><!-- END of MAIN SLIDER IMAGES -->

		<!-- NAVIGATION -->
		<header id="nav-header">
			<nav id="nav-bar" class="bottom-bar outside fluid-width block-color nav-center sticky-nav animation fadeIn">

				<div id="nav-wrapper">

					<!-- LOGO -->
					<!-- <div class="logo-wrapper"> -->
					<!-- CSS LOGO -->
					<!-- <a href="index.html">
                    			<div class="css-logo rounded">
                   					<div class="css-logo-text">
                        				<i class="de-icon-heart-1"></i>
                    				</div>
                    			</div>
                       		</a> -->

					<!-- IMG LOGO
                    		<div class="img-logo">
                    			<img src="images/slide1.jpg">
                    		</div>-->
					<!-- </div> -->
					<!-- END of LOGO -->


					<ul id="nav-menu" class="nav-smooth-scroll">
						<li class="first-child">
							<a href="#main-slider">Top</a>
						</li>
						<li>
							<a href="#contact">연락처</a>
						</li>
						<li>
							<a href="#gallery-section">사진</a>
						</li>
						<li>
							<a href="#where-when">오시는 길</a>
						</li>
					</ul>
					<div class="clearboth"></div>
				</div>

			</nav>
		</header> <!-- END of NAVIGATION -->

	</section><!-- ENF of MAIN SLIDER -->


	<!--CONTENT SECTION-->
	<section id="content">

		<!--CONTACT SECTION-->
		<section id="intro">

			<div class="container">
				<div class="row">

					<!-- SECTION CONTENT -->
					<div>

						<!--PHOTO-ITEM-->
						<div class="photo-item animation fadeInLeft">

							<!--PHOTO-->
							<img src="./images/main/intro.jpg" alt="" class="hover-animation image-zoom-in">

						</div>
						<!--END of PHOTO-ITEM-->

						<div class="his-her-name">
							<h3 class="text-center">초대의 글</h3>
							<!-- <div class="heart-wrapper">
                                	<div class="de-icon circle medium-size custom-heart">
            							<i class="de-icon-heart"></i>
            						</div>
                                </div> -->
						</div>

						<p class="blurb animation fadeInLeft text-center">
							신랑 박병준 신부 양승혜입니다.
							<br>
							<br>
							최근 일들로 인해 걱정이 많으실 텐데,
							<br>
							언제쯤 진정될지 알 수가 없어서
							<br>
							결혼식을 일정대로 진행하게 되었습니다.
							<br>
							<br>
							축하해 주시는 마음만으로도
							<br>
							감사히 여기니 무리해서 참석하지 않으셔도
							<br>
							괜찮다는 말씀을 드리고 싶습니다.
							<br>
							<br>
							저희 결혼을 축하해 주시는 모든 분들께
							<br>
							다시 한번 진심으로 감사드립니다.
							<br>
						</p>

					</div>
				</div>
			</div>
		</section>

		<!-- PHOTO DIVIDER -->
		<section id="photo-divider-1">
			<div class="image-divider fixed-height" style="background-image:url(./images/main/placeholder.jpg); height:500px" data-stellar-background-ratio="0.3">
			</div>
		</section>


		<!--CONTACT SECTION-->
		<section id="contact">

			<div class="container">
				<div class="his-her-name">
					<h3 class="text-center">연락처</h3>
					<!-- <div class="heart-wrapper">
												<div class="de-icon circle medium-size custom-heart">
								<i class="de-icon-heart"></i>
							</div>
											</div> -->
				</div>
				<!-- ROW-1 -->
				<div class="row">

					<div class="col-xs-6">

						<div class="his-her-name">
							<h3 class="text-center">신랑측</h3>
						</div>
						<br>
						<p class="blurb animation fadeInLeft text-center">
							신랑
							<a href="tel:01033361371">전화 <i class="de-icon-phone"></i></a>
						</p>
						<p class="blurb animation fadeInLeft text-center">
							부)박정식
							<a href="tel:01087741371">전화 <i class="de-icon-phone"></i></a>
						</p>
						<p class="blurb animation fadeInLeft text-center">
							모)김은숙
							<a href="tel:01023681371">전화 <i class="de-icon-phone"></i></a>
						</p>
						<br>
					</div>

					<div class="col-xs-6">

						<div class="his-her-name">
							<h3 class="text-center">신부측</h3>
						</div>
						<br>
						<p class="blurb animation fadeInLeft text-center">
							신부
							<a href="tel:01037700941">전화 <i class="de-icon-phone"></i></a>
						</p>
						<p class="blurb animation fadeInLeft text-center">
							부)양현승
							<a href="tel:01052747762">전화 <i class="de-icon-phone"></i></a>
						</p>
						<p class="blurb animation fadeInLeft text-center">
							모)박상임
							<a href="tel:01051707762">전화 <i class="de-icon-phone"></i></a>
						</p>
						<br>
					</div>
				</div> <!-- END of ROW-1 -->

			</div>

		</section>


		<!-- GALLERY SECTION -->
		<section id="gallery-section">

			<div class="container">

				<!-- ROW-1 -->
				<div class="row">

					<!-- SECTION TITLE -->
					<div class="col-sm-offset-2 col-sm-8 text-center">

						<div class="section-title animation fadeInUp">
							<h3>
								우리들의 아름다운 순간
							</h3>

						</div>
					</div>
				</div> <!-- END of ROW-1 -->


				<div class="row">

					<!--GALLERY-ITEM-1-->
					<div class="col-xs-6 col-sm-4">
						<!--PHOTO-ITEM-->
						<div class="photo-item animation fadeIn">

							<!--PHOTO-->
							<img src="./images/main/g1.jpg" alt="" class="hover-animation image-zoom-rotate" style="transition: none 0s ease 0s;">

							<!--PHOTO OVERLAY-->
							<div class="layer wh100 hidden-black-overlay hover-animation fade-in" style="transition: none 0s ease 0s;">
							</div>
							<!--END of PHOTO OVERLAY-->

							<!--ICON LINK-->
							<div class="layer wh100 hidden-link hover-animation delay1 fade-in" style="transition: none 0s ease 0s;">
								<div class="alignment">
									<div class="v-align center-middle">

										<a href="./images/main/g1.jpg" class="magnific-zoom-gallery">
											<div class="de-icon circle light medium-size inline" style="transition: none 0s ease 0s;">
												<i class="de-icon-zoom-in" style="transition: none 0s ease 0s;"></i>
											</div>
										</a>

									</div>
								</div>
							</div>
							<!--END of ICON LINK-->

						</div>
						<!--END of PHOTO-ITEM-->
					</div>
					<!--END of GALLERY-ITEM-1-->

					<!--GALLERY-ITEM-2-->
					<div class="col-xs-6 col-sm-4">
						<!--PHOTO-ITEM-->
						<div class="photo-item animation fadeIn">

							<!--PHOTO-->
							<img src="./images/main/g6.jpg" alt="" class="hover-animation image-zoom-rotate" style="transition: none 0s ease 0s;">

							<!--PHOTO OVERLAY-->
							<div class="layer wh100 hidden-black-overlay hover-animation fade-in" style="transition: none 0s ease 0s;">
							</div>
							<!--END of PHOTO OVERLAY-->

							<!--ICON LINK-->
							<div class="layer wh100 hidden-link hover-animation delay1 fade-in" style="transition: none 0s ease 0s;">
								<div class="alignment">
									<div class="v-align center-middle">

										<a href="./images/main/g6.jpg" class="magnific-zoom-gallery">
											<div class="de-icon circle light medium-size inline" style="transition: none 0s ease 0s;">
												<i class="de-icon-zoom-in" style="transition: none 0s ease 0s;"></i>
											</div>
										</a>

									</div>
								</div>
							</div>
							<!--END of ICON LINK-->

						</div>
						<!--END of PHOTO-ITEM-->
					</div>
					<!--END of GALLERY-ITEM-2-->

					<!--GALLERY-ITEM-3-->
					<div class="col-xs-6 col-sm-4">
						<!--PHOTO-ITEM-->
						<div class="photo-item animation fadeIn">

							<!--PHOTO-->
							<img src="./images/main/g7.jpg" alt="" class="hover-animation image-zoom-rotate" style="transition: none 0s ease 0s;">

							<!--PHOTO OVERLAY-->
							<div class="layer wh100 hidden-black-overlay hover-animation fade-in" style="transition: none 0s ease 0s;">
							</div>
							<!--END of PHOTO OVERLAY-->

							<!--ICON LINK-->
							<div class="layer wh100 hidden-link hover-animation delay1 fade-in" style="transition: none 0s ease 0s;">
								<div class="alignment">
									<div class="v-align center-middle">

										<a href="./images/main/g7.jpg" class="magnific-zoom-gallery">
											<div class="de-icon circle light medium-size inline" style="transition: none 0s ease 0s;">
												<i class="de-icon-zoom-in" style="transition: none 0s ease 0s;"></i>
											</div>
										</a>

									</div>
								</div>
							</div>
							<!--END of ICON LINK-->

						</div>
						<!--END of PHOTO-ITEM-->
					</div>
					<!--END of GALLERY-ITEM-3-->

					<!--GALLERY-ITEM-6-->
					<div class="col-xs-6 col-sm-4">
						<!--PHOTO-ITEM-->
						<div class="photo-item animation fadeIn">

							<!--PHOTO-->
							<img src="./images/main/g10.jpg" alt="" class="hover-animation image-zoom-rotate" style="transition: none 0s ease 0s;">

							<!--PHOTO OVERLAY-->
							<div class="layer wh100 hidden-black-overlay hover-animation fade-in" style="transition: none 0s ease 0s;">
							</div>
							<!--END of PHOTO OVERLAY-->

							<!--ICON LINK-->
							<div class="layer wh100 hidden-link hover-animation delay1 fade-in" style="transition: none 0s ease 0s;">
								<div class="alignment">
									<div class="v-align center-middle">

										<a href="./images/main/g10.jpg" class="magnific-zoom-gallery">
											<div class="de-icon circle light medium-size inline" style="transition: none 0s ease 0s;">
												<i class="de-icon-zoom-in" style="transition: none 0s ease 0s;"></i>
											</div>
										</a>

									</div>
								</div>
							</div>
							<!--END of ICON LINK-->

						</div>
						<!--END of PHOTO-ITEM-->
					</div>

					<div class="row"></div>
					<!--END of GALLERY-ITEM-6-->


					<!--GALLERY-ITEM-9-->
					<div class="col-xs-6 col-sm-4">
						<!--PHOTO-ITEM-->
						<div class="photo-item animation fadeIn">
							<!--PHOTO-->
							<img src="./images/main/g2.jpg" alt="" class="hover-animation image-zoom-rotate" style="transition: none 0s ease 0s;">
							<!--PHOTO OVERLAY-->
							<div class="layer wh100 hidden-black-overlay hover-animation fade-in" style="transition: none 0s ease 0s;">
							</div>
							<!--END of PHOTO OVERLAY-->
							<!--ICON LINK-->
							<div class="layer wh100 hidden-link hover-animation delay1 fade-in" style="transition: none 0s ease 0s;">
								<div class="alignment">
									<div class="v-align center-middle">

										<a href="./images/main/g2.jpg" class="magnific-zoom-gallery">
											<div class="de-icon circle light medium-size inline" style="transition: none 0s ease 0s;">
												<i class="de-icon-zoom-in" style="transition: none 0s ease 0s;"></i>
											</div>
										</a>

									</div>
								</div>
							</div>
							<!--END of ICON LINK-->
						</div>
						<!--END of PHOTO-ITEM-->
					</div>
					<!--END of GALLERY-ITEM-9-->
					<!--GALLERY-ITEM-11-->
					<div class="col-xs-6 col-sm-4">
						<!--PHOTO-ITEM-->
						<div class="photo-item animation fadeIn">
							<!--PHOTO-->
							<img src="./images/main/g3.jpg" alt="" class="hover-animation image-zoom-rotate" style="transition: none 0s ease 0s;">
							<!--PHOTO OVERLAY-->
							<div class="layer wh100 hidden-black-overlay hover-animation fade-in" style="transition: none 0s ease 0s;">
							</div>
							<!--END of PHOTO OVERLAY-->
							<!--ICON LINK-->
							<div class="layer wh100 hidden-link hover-animation delay1 fade-in" style="transition: none 0s ease 0s;">
								<div class="alignment">
									<div class="v-align center-middle">

										<a href="./images/main/g3.jpg" class="magnific-zoom-gallery">
											<div class="de-icon circle light medium-size inline" style="transition: none 0s ease 0s;">
												<i class="de-icon-zoom-in" style="transition: none 0s ease 0s;"></i>
											</div>
										</a>

									</div>
								</div>
							</div>
							<!--END of ICON LINK-->
						</div>
						<!--END of PHOTO-ITEM-->
					</div>
					<!--END of GALLERY-ITEM-11-->

					<!--GALLERY-ITEM-4-->
					<div class="col-xs-6 col-sm-4">
						<!--PHOTO-ITEM-->
						<div class="photo-item animation fadeIn">

							<!--PHOTO-->
							<img src="./images/main/g4.jpg" alt="" class="hover-animation image-zoom-rotate" style="transition: none 0s ease 0s;">

							<!--PHOTO OVERLAY-->
							<div class="layer wh100 hidden-black-overlay hover-animation fade-in" style="transition: none 0s ease 0s;">
							</div>
							<!--END of PHOTO OVERLAY-->

							<!--ICON LINK-->
							<div class="layer wh100 hidden-link hover-animation delay1 fade-in" style="transition: none 0s ease 0s;">
								<div class="alignment">
									<div class="v-align center-middle">

										<a href="./images/main/g4.jpg" class="magnific-zoom-gallery">
											<div class="de-icon circle light medium-size inline" style="transition: none 0s ease 0s;">
												<i class="de-icon-zoom-in" style="transition: none 0s ease 0s;"></i>
											</div>
										</a>

									</div>
								</div>
							</div>
							<!--END of ICON LINK-->

						</div>
						<!--END of PHOTO-ITEM-->
					</div>
					<!--END of GALLERY-ITEM-4-->

					<!--GALLERY-ITEM-5-->
					<div class="col-xs-6 col-sm-4">
						<!--PHOTO-ITEM-->
						<div class="photo-item animation fadeIn">

							<!--PHOTO-->
							<img src="./images/main/g5.jpg" alt="" class="hover-animation image-zoom-rotate" style="transition: none 0s ease 0s;">

							<!--PHOTO OVERLAY-->
							<div class="layer wh100 hidden-black-overlay hover-animation fade-in" style="transition: none 0s ease 0s;">
							</div>
							<!--END of PHOTO OVERLAY-->

							<!--ICON LINK-->
							<div class="layer wh100 hidden-link hover-animation delay1 fade-in" style="transition: none 0s ease 0s;">
								<div class="alignment">
									<div class="v-align center-middle">

										<a href="./images/main/g5.jpg" class="magnific-zoom-gallery">
											<div class="de-icon circle light medium-size inline" style="transition: none 0s ease 0s;">
												<i class="de-icon-zoom-in" style="transition: none 0s ease 0s;"></i>
											</div>
										</a>

									</div>
								</div>
							</div>
							<!--END of ICON LINK-->

						</div>
						<!--END of PHOTO-ITEM-->
					</div>
					<!--END of GALLERY-ITEM-5-->

					<!--GALLERY-ITEM-12-->
					<div class="col-xs-6 col-sm-4">
						<!--PHOTO-ITEM-->
						<div class="photo-item animation fadeIn">
							<!--PHOTO-->
							<img src="./images/main/g8.JPG" alt="" class="hover-animation image-zoom-rotate" style="transition: none 0s ease 0s;">
							<!--PHOTO OVERLAY-->
							<div class="layer wh100 hidden-black-overlay hover-animation fade-in" style="transition: none 0s ease 0s;">
							</div>
							<!--END of PHOTO OVERLAY-->
							<!--ICON LINK-->
							<div class="layer wh100 hidden-link hover-animation delay1 fade-in" style="transition: none 0s ease 0s;">
								<div class="alignment">
									<div class="v-align center-middle">

										<a href="./images/main/g8.JPG" class="magnific-zoom-gallery">
											<div class="de-icon circle light medium-size inline" style="transition: none 0s ease 0s;">
												<i class="de-icon-zoom-in" style="transition: none 0s ease 0s;"></i>
											</div>
										</a>

									</div>
								</div>
							</div>
							<!--END of ICON LINK-->
						</div>
						<!--END of PHOTO-ITEM-->
					</div>
					<!--END of GALLERY-ITEM-12-->
					<!--GALLERY-ITEM-13-->
					<div class="col-xs-6 col-sm-4">
						<!--PHOTO-ITEM-->
						<div class="photo-item animation fadeIn">
							<!--PHOTO-->
							<img src="./images/main/g9.jpg" alt="" class="hover-animation image-zoom-rotate" style="transition: none 0s ease 0s;">
							<!--PHOTO OVERLAY-->
							<div class="layer wh100 hidden-black-overlay hover-animation fade-in" style="transition: none 0s ease 0s;">
							</div>
							<!--END of PHOTO OVERLAY-->
							<!--ICON LINK-->
							<div class="layer wh100 hidden-link hover-animation delay1 fade-in" style="transition: none 0s ease 0s;">
								<div class="alignment">
									<div class="v-align center-middle">

										<a href="./images/main/g9.jpg" class="magnific-zoom-gallery">
											<div class="de-icon circle light medium-size inline" style="transition: none 0s ease 0s;">
												<i class="de-icon-zoom-in" style="transition: none 0s ease 0s;"></i>
											</div>
										</a>

									</div>
								</div>
							</div>
							<!--END of ICON LINK-->
						</div>
						<!--END of PHOTO-ITEM-->
					</div>

					<div class="row"></div>
					<!--END of GALLERY-ITEM-13-->
					<!--GALLERY-ITEM-14-->
					<div class="col-xs-6 col-sm-4">
						<!--PHOTO-ITEM-->
						<div class="photo-item animation fadeIn">
							<!--PHOTO-->
							<img src="./images/main/g14.jpg" alt="" class="hover-animation image-zoom-rotate" style="transition: none 0s ease 0s;">
							<!--PHOTO OVERLAY-->
							<div class="layer wh100 hidden-black-overlay hover-animation fade-in" style="transition: none 0s ease 0s;">
							</div>
							<!--END of PHOTO OVERLAY-->
							<!--ICON LINK-->
							<div class="layer wh100 hidden-link hover-animation delay1 fade-in" style="transition: none 0s ease 0s;">
								<div class="alignment">
									<div class="v-align center-middle">

										<a href="./images/main/g14.jpg" class="magnific-zoom-gallery">
											<div class="de-icon circle light medium-size inline" style="transition: none 0s ease 0s;">
												<i class="de-icon-zoom-in" style="transition: none 0s ease 0s;"></i>
											</div>
										</a>

									</div>
								</div>
							</div>
							<!--END of ICON LINK-->
						</div>
						<!--END of PHOTO-ITEM-->
					</div>
					<!--END of GALLERY-ITEM-14-->

					<!--GALLERY-ITEM-14-->
					<div class="col-xs-6 col-sm-4">
						<!--PHOTO-ITEM-->
						<div class="photo-item animation fadeIn">
							<!--PHOTO-->
							<img src="./images/main/g13.jpg" alt="" class="hover-animation image-zoom-rotate" style="transition: none 0s ease 0s;">
							<!--PHOTO OVERLAY-->
							<div class="layer wh100 hidden-black-overlay hover-animation fade-in" style="transition: none 0s ease 0s;">
							</div>
							<!--END of PHOTO OVERLAY-->
							<!--ICON LINK-->
							<div class="layer wh100 hidden-link hover-animation delay1 fade-in" style="transition: none 0s ease 0s;">
								<div class="alignment">
									<div class="v-align center-middle">

										<a href="./images/main/g13.jpg" class="magnific-zoom-gallery">
											<div class="de-icon circle light medium-size inline" style="transition: none 0s ease 0s;">
												<i class="de-icon-zoom-in" style="transition: none 0s ease 0s;"></i>
											</div>
										</a>

									</div>
								</div>
							</div>
							<!--END of ICON LINK-->
						</div>
						<!--END of PHOTO-ITEM-->
					</div>
					<!--END of GALLERY-ITEM-14-->

				</div>

			</div>
		</section>


		<!-- WHERE WHEN SECTION -->
		<section id="where-when">
			<div class="container">

				<!-- ROW-1 -->
				<div class="row">

					<!-- SECTION TITLE -->
					<div class="col-sm-offset-2 col-sm-8 text-center">

						<div class="section-title animation fadeInUp">
							<h2>
								오시는 길
							</h2>
						</div>
					</div>
				</div> <!-- END of ROW-1 -->

				<!-- ROW-2 -->
				<div class="row">

					<!-- SECTION TITLE -->
					<div class="col-sm-12 text-center">

						<div class="banner-text dark full animation fadeIn">

							<div class="row">
								<div class="col-xs-12 col-sm-3">
									<h3>2021년 1월 30일</h3>
								</div>
								<div class="col-xs-12 col-sm-3">
									<h3>오후 4시</h3>
								</div>
								<div class="col-xs-12 col-sm-3">
									<h3>신도림 라마다 호텔</h3>
								</div>
								<div class="col-xs-12 col-sm-3">
									<h3>5층 세인트그레이스홀</h3>
								</div>

							</div>


						</div>

					</div>
				</div> <!-- END of ROW-2 -->


				<!-- ROW-3 -->
				<!-- 카카오맵 네이버 맵 호출하는 기능 넣기 -->
				<div class="row">
					<div class="col-sm-12 animation fadeIn">
						<div class="photo-item animation fadeIn">
							<img src="./images/map.jpg" style="width: 100%; margin-bottom:20px;" />

							<!--PHOTO OVERLAY-->
							<div class="layer wh100 hidden-black-overlay hover-animation fade-in">
							</div>
							<!--END of PHOTO OVERLAY-->

							<!--ICON LINK-->
							<div class="layer wh100 hidden-link hover-animation delay1 fade-in">
								<div class="alignment">
									<div class="v-align center-middle">

										<a href="./images/map.jpg" class="magnific-zoom-gallery">
											<div class="de-icon circle light medium-size inline">
												<i class="de-icon-zoom-in"></i>
											</div>
										</a>

									</div>
								</div>
							</div>
							<!--END of ICON LINK-->
						</div>
						<!--END of photo item-->
						<div class="de-icon circle small-size inline" style="background-color:#f0394d">
							<i class="de-icon-address"></i>
						</div>
						<h3 class="inline">주소</h3>
						<ul>
							<li>서울특별시 구로구 신도림동 427-3 라마다 서울 신도림 호텔</li>
							<li>TEL 02.2162.2100</li>
						</ul>

						<div class="de-icon circle small-size inline" style="background-color:#f6700e">
							<i class="de-icon-truck"></i>
						</div>
						<h3 class="inline">무료 셔틀버스</h3>
						<ul>
							<li>추후 정해지면 업데이트 하도록 하겠습니다.</li>
						</ul>

						<div class="de-icon circle small-size inline" style="background-color:#0d9a48">
							<i class="de-icon-rebel"></i>
						</div>
						<h3 class="inline">대중교통</h3>
						<ul>
							<li>지하철: 1호선, 2호선 신도림역 1번 출구 (신도림역 광장 도보 5분)</li>
							<li>버스: 신도림역(구로역)</li>
							<li>간선버스(파랑) : 160. 503. 600. 662. 660. N16(심야)</li>
							<li>지선버스(초록) : 6513. 6515. 6516. 6637. 6640A. 6640B</li>
							<li>경기일반 : 10.11-1.11-2.510.530. 83. 88</li>
							<li>좌석버스 : 301, 320</li>
						</ul>
						<div class="de-icon circle small-size inline" style="background-color:#9400d3">
							<i class="de-icon-cab"></i>
						</div>
						<h3 class="inline">자가용</h3>
						<ul>
							<li>승용차 주차장 입구 : 서울특별시 구로구 신도림동 427-3</li>
							<li>관광버스 주차장 입구 : 서울특별시 구로구 경인로 624</li>
							<li>강남역: 강남대로 -> 사평대로 -> 올림픽대로(김포공항)방면 -> 노량 대교 -> 여의도(서울교)교차로 -> 경인로</li>
							<li>서울역: 한강대로 -> 청파로 -> 만리재로 -> 마포대교(마포대로) -> 여의대로 -> 경인로</li>
							<li>인천국제공항: 인천국제공항고속도로 -> 서울외곽순환고속도로 -> 경인고속도로 -> 서부간선도로(안양방면) -> 신도림고가차로 -> 경인로</li>
							<li>김포공항: 개화동로 -> 남부순환로 -> 오류IC -> 경인로</li>
						</ul>
					</div>
					<!-- <div class="col-sm-6 animation fadeIn">
                        	<div id="map-canvas" style="border:15px solid #FFF; margin-top:20px;"></div>
                        </div> -->

				</div> <!-- END of ROW-3 -->



			</div>
		</section>


		<!-- RSVP SECTION -->
		<section id="rsvp-section">

			<div class="container">

				<!-- ROW-1 -->
				<div class="row">

					<!-- SECTION TITLE -->
					<div class="col-sm-offset-2 col-sm-8 text-center">

						<div class="section-title animation fadeInUp">
							<h3 class="text-center">
								감사의 말
							</h3>
							<p class="blurb animation fadeInLeft text-center">
								코로나19가 언제쯤 진정될지 알 수가 없어 <br>
								결혼식을 일정대로 진행하게 되었습니다.<br>
								식장에서도 코로나19에 대한 대책을 마련하여<br>
								열 감지 및 소독 등 많은 신경을 쓰고 있으니<br>
								어려운 발걸이라도 함께 해주신다면<br>
								더욱 감사한 마음을 갖고<br>
								행복하게 사는 모습으로 보답 드리겠습니다.<br>
								축하해 주시는 마음만으로도<br>
								감사히 여기니 무리해서 참석하지 않으셔도<br>
								괜찮다는 말씀 드리고 싶습니다.<br>
								마음만으로도 저희에게는 큰 힘이 됩니다.<br>
							</p>
							<br><br>
							<h3 class="text-center">
								<라마다호텔 웨딩 지침>
							</h3>
							<p style="text-align: left;">※코로나 2.5단계(1월 17일까지)지침 사항입니다. <br>추후 변경되는 모바일 청첩장을 통해 알려드리겠습니다.
							</p>

							<p style="text-align: left;">- 세인트그레이스홀 신랑, 신부 포함 49명 수용합니다.<br>
								- 홀 인원 제한으로 입장 못할 경우 연회장에서 식사 하시면서 스크린으로 라이브 예식 시청(49명 수용)<br>
								- 식사를 안하실 경우 답례품으로 대체됩니다.<br>
								- 하객분들은 마스크 착용 필수입니다.<br>
								- 1월 30일 결혼식에는 방역지침에 따라 웨딩 지침이 변경됩니다.<br>
							</p> <br>
							<br>
							<h3 class="text-center">
								마음 전하실 곳
							</h3>
							<br>
							<br>
							<!-- Trigger/Open The Modal -->
							<div class="col-xs-6">
								<div class="his-her-name">
									<p id="myBtn" class="text-center">신랑측 계좌</p>
								</div>
							</div>

							<div class="col-xs-6">
								<div class="his-her-name">
									<p id="myBtn2" class="text-center">신부측 계좌</p>
								</div>
							</div>

							<!-- The Modal -->
							<div id="myModal" class="modal">

								<!-- Modal content -->
								<div class="modal-content">
									<div class="modal-body">
										<span class="modal-close">&times;</span>
										<br><br>
										<p onclick="copyToClipboard('834702-04-142017')">신랑 박병준: 국민 834702-04-142017</p>
										<p onclick="copyToClipboard('302-0546-3421-61')">부) 박정식: 농협 302-0546-3421-61</p>
										<p onclick="copyToClipboard('595-810338-49007')">모) 김은숙: 하나 595-810338-49007</p>
										<div id="toast"></div>
									</div>
								</div>

							</div>

							<!-- The Modal -->
							<div id="myModal2" class="modal2">

								<!-- Modal content -->
								<div class="modal-content2">
									<div class="modal-body2">
										<span class="modal-close2">&times;</span>
										<br><br>
										<p onclick="copyToClipboard('443-910014-45005')">신부 양승혜: 하나 443-910014-45005</p>
										<p onclick="copyToClipboard('443-910005-70307')">모) 박상임: 하나 443-910005-70307</p>
										<div id="toast"></div>
									</div>
								</div>

							</div>

						</div>
					</div>
				</div> <!-- END of ROW-1 -->

			</div>

		</section>

	</section>
	<!-- FOOTER SECTION -->
	<footer>
		<div class="image-divider fixed-height" style="background-image:url(./images/main/thankyou.jpg);" data-stellar-background-ratio="0.5">

			<div class="divider-overlay"></div>

			<!-- Use Center Middle Alignment to align middle the content for fixed-height parallax -->
			<div class="alignment">
				<div class="v-align center-middle">

					<div class="container">
						<div class="row">
							<div class="col-sm-12">

								<div class="animation fadeInUp">
									<div id="thank-you">
										<div id="thank">Thank</div>
										<div id="you">You</div>
									</div>
								</div>

								<div class="heart-divider animation delay1 fadeInUp">
									<span class="white-line"></span>
									<i class="de-icon-heart pink-heart"></i>
									<i class="de-icon-heart white-heart"></i>
									<span class="white-line"></span>
								</div>

								<div id="footer-couple-name" class="animation delay1 fadeInUp">
									감사합니다.
								</div>

							</div>
						</div>
					</div>

				</div>
			</div>

		</div>
	</footer>

	<script>
	let removeToast;

	function toast(string) {
	    const toast = document.getElementById("toast");

	    toast.classList.contains("reveal") ?
	        (clearTimeout(removeToast), removeToast = setTimeout(function () {
	            document.getElementById("toast").classList.remove("reveal")
	        }, 1000)) :
	        removeToast = setTimeout(function () {
	            document.getElementById("toast").classList.remove("reveal")
	        }, 1000)
	    toast.classList.add("reveal"),
	        toast.innerText = string
	}
	</script>
	<!-- jQuery -->
	<!-- <script src="js/jquery-1.11.1.min.js"></script> -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<!-- Pace -->
	<script src="js/pace/pace.min.js"></script>
	<!-- Bootstrap -->
	<script src="js/bootstrap/bootstrap.js"></script>
	<!-- Modernizr -->
	<script src="js/modernizr/modernizr.js"></script>
	<!-- Device JS -->
	<script src="js/devicejs/device.js"></script>
	<!-- TinyNav -->
	<script src="js/tinynav/tinynav.min.js"></script>
	<!-- SmoothScroll -->
	<script src="js/smoothscroll/jquery.smooth-scroll.js"></script>
	<!-- Flexslider -->
	<script src="js/flexslider/jquery.flexslider.js"></script>
	<!-- Sticky -->
	<script src="js/sticky/jquery.sticky.js"></script>
	<!-- Waypoint -->
	<script src="js/waypoint/jquery.waypoints.min.js"></script>
	<!-- DoubleTapToGo -->
	<script src="js/jquery-ui-widget/jquery.ui.widget.js"></script>
	<script src="js/jquery-doubletaptogo/jquery.dcd.doubletaptogo.js"></script>
	<!-- Vide -->
	<script src="js/vide/jquery.vide.js"></script>
	<!-- Stellar -->
	<script src="js/stellar/jquery.stellar.js"></script>
	<!-- Masonry -->
	<script src="js/masonry/masonry.pkgd.min.js"></script>
	<!-- Countdown -->
	<script src="js/countdown/jquery.plugin.js"></script>
	<script src="js/countdown/jquery.countdown.js"></script>
	<!-- Magnific Popup -->
	<script src="js/magnific-popup/jquery.magnific-popup.js"></script>
	<!-- Owl Carousel -->
	<script src="js/owlcarousel/owl.carousel.js"></script>

	<script src="js/temp.js"></script>
	<!-- Google Map -->
	<!-- <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAXWJbesu0SUgeQNwr5m89w2ZTw4cuWOtU"></script> -->
	<!-- <script src="js/markerlabel/markerwithlabel.js"></script> -->
	<!-- RSVP -->
	<!-- <script src="js/rsvp/rsvp.js"></script> -->

	<!-- Custom Core Script -->
	<script type="text/javascript" src="js/script.js"></script>
	<!-- <script type="text/javascript" src="js/map-script.js"></script> -->
	<!-- Custom Additional Script -->
	<script type="text/javascript" src="js/main-slider-fade.js"></script>

	<script>
		// Get the modal
		var modal = document.getElementById("myModal");

		// Get the button that opens the modal
		var btn = document.getElementById("myBtn");

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("modal-close")[0];

		// When the user clicks the button, open the modal
		btn.onclick = function() {
			modal.style.display = "block";
		}

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
			modal.style.display = "none";
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}

		// Get the modal
		var modal2 = document.getElementById("myModal2");

		// Get the button that opens the modal
		var btn2 = document.getElementById("myBtn2");

		// Get the <span> element that closes the modal
		var span2 = document.getElementsByClassName("modal-close2")[0];

		// When the user clicks the button, open the modal
		btn2.onclick = function() {
			modal2.style.display = "block";
		}

		// When the user clicks on <span> (x), close the modal
		span2.onclick = function() {
			modal2.style.display = "none";
		}

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if (event.target == modal) {
				modal2.style.display = "none";
			}
		}
	</script>

</body>

</html>
