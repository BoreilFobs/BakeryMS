<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Boulangerie la perceverance </title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="all,follow">
    <link rel="stylesheet" href="css/app.css">
    <!-- Bootstrap CSS-->
    <link rel="stylesheet" href="{{ asset('vendor/bootstrap/css/bootstrap.min.css') }}">
    <!-- Font Awesome CSS-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="{{ asset('vendor/font-awesome/css/font-awesome.min.css') }}">
    <!-- Custom Font Icons CSS-->
    <link rel="stylesheet" href="{{ asset('css/fonts.css') }}">
    <link rel="stylesheet" href="">
    <!-- Google fonts - Muli-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Muli:300,400,700">
    <!-- theme stylesheet-->
    <link rel="stylesheet" href="{{ asset('css/style.green.css') }}" id="theme-stylesheet">
    <!-- Custom stylesheet - for your changes-->
    <link rel="stylesheet" href="{{ asset('css/custom.css') }}">
    <!-- Favicon-->
    <link rel="shortcut icon" href="{{ asset('img/logo.png') }}">

    <!-- Tweaks for older IEs--><!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script><![endif]-->
    <style>
        .goog-te-banner-frame.skiptranslate {
            display: none !important;
        }

        body {
            top: 0px !important;
        }

        .goog-te-gadget {
            color: transparent !important;
        }

        .goog-te-gadget .goog-te-combo {
            margin: 4px 0;
            padding: 3px 5px;
            border-radius: 4px;
            border: 1px solid #ccc;
            background-color: #533e2d9c;
            color: white;
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
        }

        .goog-te-gadget .goog-te-combo option {
            background-color: #2d3035;
            color: white;
        }
    </style>
</head>

<body>
    <header class="header">
        <nav class="navbar navbar-expand-lg">
            <div class="search-panel">
                <div class="search-inner d-flex align-items-center justify-content-center">
                    <div class="close-btn">Close <i class="fa fa-close"></i></div>
                    <form id="searchForm" action="#">
                        <div class="form-group">
                            <input type="search" name="search" placeholder="What are you searching for...">
                            <button type="submit" class="submit">Search</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="container-fluid d-flex align-items-center justify-content-between">
                <div class="navbar-header">
                    <!-- Navbar Header--><a href="{{ url('/home') }}" class="navbar-brand">
                        <div class="brand-text brand-big visible text-uppercase"><strong
                                class="text-primary">La</strong><strong>Perceverance</strong></div>
                        <div class="brand-text brand-sm"><strong class="text-primary">L</strong><strong>P</strong></div>
                    </a>
                    <!-- Sidebar Toggle Btn-->
                    <button class="sidebar-toggle"><i class="fa fa-long-arrow-left"></i></button>
                </div>
                <div class="right-menu list-inline no-margin-bottom">
                    <div class="list-inline-item"><a href="#" class="search-open nav-link"><i
                                class="fa-solid fa-magnifying-glass"></i></a></div>
                    <div class="list-inline-item dropdown"><a id="navbarDropdownMenuLink1" href="http://example.com"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                            class="nav-link messages-toggle"><i class="fa-solid fa-message"></i><span
                                class="badge dashbg-1">5</span></a>
                        <div aria-labelledby="navbarDropdownMenuLink1" class="dropdown-menu messages"><a href="#"
                                class="dropdown-item message d-flex align-items-center">
                                <div class="profile"><img src="{{ asset('img/avatar-3.jpg') }}" alt="..."
                                        class="img-fluid">
                                    <div class="status online"></div>
                                </div>
                                <div class="content"> <strong class="d-block">Nadia Halsey</strong><span
                                        class="d-block">lorem ipsum dolor sit amit</span><small
                                        class="date d-block">9:30am</small></div>
                            </a><a href="#" class="dropdown-item message d-flex align-items-center">
                                <div class="profile"><img src="{{ asset('img/avatar-2.jpg') }}" alt="..."
                                        class="img-fluid">
                                    <div class="status away"></div>
                                </div>
                                <div class="content"> <strong class="d-block">Peter Ramsy</strong><span
                                        class="d-block">lorem ipsum dolor sit amit</span><small
                                        class="date d-block">7:40am</small></div>
                            </a><a href="#" class="dropdown-item message d-flex align-items-center">
                                <div class="profile"><img src="{{ asset('img/avatar-1.jpg') }}" alt="..."
                                        class="img-fluid">
                                    <div class="status busy"></div>
                                </div>
                                <div class="content"> <strong class="d-block">Sam Kaheil</strong><span
                                        class="d-block">lorem ipsum dolor sit amit</span><small
                                        class="date d-block">6:55am</small></div>
                            </a><a href="#" class="dropdown-item message d-flex align-items-center">
                                <div class="profile"><img src="{{ asset('img/avatar-5.jpg') }}" alt="..."
                                        class="img-fluid">
                                    <div class="status offline"></div>
                                </div>
                                <div class="content"> <strong class="d-block">Sara Wood</strong><span
                                        class="d-block">lorem ipsum dolor sit amit</span><small
                                        class="date d-block">10:30pm</small></div>
                            </a><a href="#" class="dropdown-item text-center message"> <strong>See All Messages
                                    <i class="fa fa-angle-right"></i></strong></a></div>
                    </div>
                    <!-- Megamenu-->
                    <div class="list-inline-item dropdown menu-large"><a href="#" data-toggle="dropdown"
                            class="nav-link"><i class="fa-brands fa-dochub"></i>ocs</a>
                        <div class="dropdown-menu megamenu">
                        </div>
                    </div>
                    <!-- Megamenu end     -->
                    <!-- Languages dropdown    -->
                    <div class="list-inline-item dropdown">
                        <div id="google_translate_element"></div>
                        <script type="text/javascript">
                            function googleTranslateElementInit() {
                                new google.translate.TranslateElement({
                                    pageLanguage: 'en',
                                    includedLanguages: 'en,fr',
                                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                                }, 'google_translate_element');
                            }
                        </script>
                        <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit">
                        </script>
                    </div>
                    <!-- Log out               -->
                    <div class="list-inline-item logout"><a id="logout" href="{{ url('/lo-gout') }}"
                            class="nav-link">Logout <i class="fa-solid fa-right-from-bracket"></i></a></div>
                </div>
            </div>
        </nav>
    </header>
    <div class="d-flex align-items-stretch">
        <!-- Sidebar Navigation-->
        <nav id="sidebar">
            <!-- Sidebar Header-->
            <div class="sidebar-header d-flex align-items-center">
                <div class="avatar"><img src="{{ asset('img/avatar-6.jpg') }}" alt="..."
                        class="img-fluid rounded-circle"></div>
                <div class="title">
                    <h1 class="h5">Mr Maxim</h1>
                    <p>Directeur</p>
                </div>
            </div>
            <!-- Sidebar Navidation Menus-->
            <ul class="list-unstyled">
                <li class="{{ Str::contains(request()->url(), '/home') ? 'active' : '' }}"><a
                        href="{{ url('/home') }}"> <i class="fa-solid fa-house-chimney"></i>Home </a></li>
                <li><a href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i
                            class="fa-solid fa-warehouse"></i>Inventory</a>
                    <ul id="exampledropdownDropdown" class="collapse list-unstyled ">
                        <li><a href="{{ url('/composition') }}">today's composition</a></li>
                        <li><a href="{{ url('/ingredients') }}">production ingredients</a></li>
                        <li><a href="{{ url('') }}">Page</a></li>
                    </ul>
                </li>
                <li class="{{ Str::contains(request()->url(), '/offers') ? 'active' : '' }}"><a
                        href="{{ url('/offers') }}"> <i class="fa-solid fa-border-none"></i>Offers </a></li>
                <li class="{{ Str::contains(request()->url(), '/employees') ? 'active' : '' }}"><a
                        href="{{ url('/employees') }}"> <i class="fa-solid fa-address-card"></i>Employees </a></li>
                <li class="{{ Str::contains(request()->url(), '/customer') ? 'active' : '' }}"><a
                        href="{{ url('/customers') }}"> <i class="fa-solid fa-person-walking-luggage"></i>Customers
                    </a></li>
                <li class="{{ Str::contains(request()->url(), '/orders') ? 'active' : '' }}"><a
                        href="{{ url('/orders') }}"> <i class="fa-solid fa-truck"></i>Orders </a></li>
                {{-- example dropdown code --}}




        </nav>
        <div class="page-content">
            <div class="page-header">
                <div class="container-fluid d-flex justify-content-between align-items-center">
                    <h2 class="h5 no-margin-bottom">@yield('title', 'BakeryMS')</h2>
                    @if (Str::contains(request()->url(), '/employees') && !Str::contains(request()->url(), '/profile'))
                        <div class="">
                            <a href="{{ url('/employees/rollCall') }}" class="btn btn-secondary">make roll call <i
                                    class="fa fa-clock"></i></a>
                            <a href="{{ url('/employees/form') }}" class="btn btn-success">ADD <i
                                    class="fa fa-plus"></i></a>
                        </div>
                    @elseif(Str::contains(request()->url(), '/offers') && !Str::contains(request()->url(), '/profile'))
                        <a href="{{ url('/offers/form') }}" class="btn btn-success">ADD <i
                                class="fa fa-plus"></i></a>
                    @elseif(Str::contains(request()->url(), '/ingredients') && !Str::contains(request()->url(), '/profile'))
                        <a href="{{ url('/ingredient/form') }}" class="btn btn-success">ADD<i
                                class="fa fa-plus"></i></a>
                    @endif
                </div>
            </div>
            <section class="no-padding-top no-padding-bottom">
                <div class="container-fluid">
                    @yield('content')

                </div>
            </section>
        </div>



        <script src="{{ asset('vendor/jquery/jquery.min.js') }}"></script>
        <script src="{{ asset('vendor/popper.js/umd/popper.min.js') }}"></script>
        <script src="{{ asset('vendor/bootstrap/js/bootstrap.min.js') }}"></script>
        <script src="{{ asset('vendor/jquery.cookie/jquery.cookie.js') }}"></script>
        <script src="{{ asset('vendor/chart.js/Chart.min.js') }}"></script>
        <script src="{{ asset('vendor/jquery-validation/jquery.validate.min.js') }}"></script>
        <script src="{{ asset('js/charts-home.js') }}"></script>
        <script src="{{ asset('js/front.js') }}"></script>
        {{-- pusher script --}}
        <script src="https://js.pusher.com/beams/1.0/push-notifications-cdn.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
        <script>
            const beamsClient = new PusherPushNotifications.Client({
                instanceId: '79ebb9b2-0f0c-4c61-84b6-e8c3c59eff03', // Replace with your instance ID
            });

            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/service-worker.js')
                    .then((registration) => {
                        console.log('Service Worker registered with scope:', registration.scope);
                    })
                    .catch((error) => {
                        console.error('Service Worker registration failed:', error);
                    });
            } else {
                console.error('Service Worker is not supported in this browser.');
            }

            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.ready.then(() => {
                    beamsClient.start()
                        .then(() => beamsClient.getDeviceId())
                        .then((deviceId) => {
                            console.log('Successfully registered with Beams. Device ID:', deviceId);
                            // Send the device ID to your Laravel backend
                            axios.post('/save-device-id', {
                                    device_id: deviceId
                                })
                                .then((response) => {
                                    console.log('Device ID saved successfully:', response.data);
                                })
                                .catch((error) => {
                                    console.error('Error saving device ID:', error.response.data);
                                });
                        })
                        .catch(console.error);
                });
            }
            beamsClient.start()
                .then(() => beamsClient.addDeviceInterest('all-users'))
                .then(() => beamsClient.getDeviceInterests())
                .then((interests) => console.log('Current interests:', interests))
                .catch(console.error);
        </script>
</body>

</html>
