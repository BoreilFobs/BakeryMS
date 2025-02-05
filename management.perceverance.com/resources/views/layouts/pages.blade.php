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
    <link rel="stylesheet" href="{{asset('vendor/bootstrap/css/bootstrap.min.css')}}">
    <!-- Font Awesome CSS-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="{{asset('vendor/font-awesome/css/font-awesome.min.css')}}">
    <!-- Custom Font Icons CSS-->
    <link rel="stylesheet" href="{{asset('css/fonts.css')}}">
    <link rel="stylesheet" href="">
    <!-- Google fonts - Muli-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Muli:300,400,700">
    <!-- theme stylesheet-->
    <link rel="stylesheet" href="{{asset('css/style.green.css')}}" id="theme-stylesheet">
    <!-- Custom stylesheet - for your changes-->
    <link rel="stylesheet" href="{{asset('css/custom.css')}}">
    <!-- Favicon-->
    <link rel="shortcut icon" href="{{asset('img/favicon.ico')}}">
    <!-- Tweaks for older IEs--><!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script><![endif]-->
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
               <div class="brand-text brand-big visible text-uppercase"><strong class="text-primary">La</strong><strong>Perceverance</strong></div>
              <div class="brand-text brand-sm"><strong class="text-primary">L</strong><strong>P</strong></div></a>
            <!-- Sidebar Toggle Btn-->
            <button class="sidebar-toggle"><i class="fa fa-long-arrow-left"></i></button>
          </div>
          <div class="right-menu list-inline no-margin-bottom">
            <div class="list-inline-item"><a href="#" class="search-open nav-link"><i class="fa-solid fa-magnifying-glass"></i></a></div>
            <div class="list-inline-item dropdown"><a id="navbarDropdownMenuLink1" href="http://example.com" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link messages-toggle"><i class="fa-solid fa-message"></i><span class="badge dashbg-1">5</span></a>
              <div aria-labelledby="navbarDropdownMenuLink1" class="dropdown-menu messages"><a href="#" class="dropdown-item message d-flex align-items-center">
                  <div class="profile"><img src="{{asset('img/avatar-3.jpg')}}" alt="..." class="img-fluid">
                    <div class="status online"></div>
                  </div>
                  <div class="content">   <strong class="d-block">Nadia Halsey</strong><span class="d-block">lorem ipsum dolor sit amit</span><small class="date d-block">9:30am</small></div></a><a href="#" class="dropdown-item message d-flex align-items-center">
                  <div class="profile"><img src="{{asset('img/avatar-2.jpg')}}" alt="..." class="img-fluid">
                    <div class="status away"></div>
                  </div>
                  <div class="content">   <strong class="d-block">Peter Ramsy</strong><span class="d-block">lorem ipsum dolor sit amit</span><small class="date d-block">7:40am</small></div></a><a href="#" class="dropdown-item message d-flex align-items-center">
                  <div class="profile"><img src="{{asset('img/avatar-1.jpg')}}" alt="..." class="img-fluid">
                    <div class="status busy"></div>
                  </div>
                  <div class="content">   <strong class="d-block">Sam Kaheil</strong><span class="d-block">lorem ipsum dolor sit amit</span><small class="date d-block">6:55am</small></div></a><a href="#" class="dropdown-item message d-flex align-items-center">
                  <div class="profile"><img src="{{asset('img/avatar-5.jpg')}}" alt="..." class="img-fluid">
                    <div class="status offline"></div>
                  </div>
                  <div class="content">   <strong class="d-block">Sara Wood</strong><span class="d-block">lorem ipsum dolor sit amit</span><small class="date d-block">10:30pm</small></div></a><a href="#" class="dropdown-item text-center message"> <strong>See All Messages <i class="fa fa-angle-right"></i></strong></a></div>
            </div>
            <!-- Megamenu-->
            <div class="list-inline-item dropdown menu-large"><a href="#" data-toggle="dropdown" class="nav-link"><i class="fa-brands fa-dochub"></i>ocs</a>
              <div class="dropdown-menu megamenu">
              </div>
            </div>
            <!-- Megamenu end     -->
            <!-- Languages dropdown    -->
             <div class="list-inline-item dropdown"><a id="languages" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link language dropdown-toggle"><img src="{{asset('img/flags/16/GB.png')}}" alt="English"><span class="d-none d-sm-inline-block">English</span></a>
              <div aria-labelledby="languages" class="dropdown-menu">
                {{-- <a rel="nofollow" href="#" class="dropdown-item"> <img src="img/flags/16/DE.png" alt="English" class="mr-2"><span>German</span></a> --}}
                <a rel="nofollow" href="#" class="dropdown-item"> <img src="{{asset('img/flags/16/FR.png')}}" alt="English" class="mr-2"><span>French  </span></a></div>
            </div>
            <!-- Log out               -->
            <div class="list-inline-item logout"><a id="logout" href="{{ url("/lo-gout")}}" class="nav-link">Logout <i class="fa-solid fa-right-from-bracket"></i></a></div>
          </div>
        </div>
      </nav>
    </header>
    <div class="d-flex align-items-stretch">
      <!-- Sidebar Navigation-->
      <nav id="sidebar">
        <!-- Sidebar Header-->
        <div class="sidebar-header d-flex align-items-center">
          <div class="avatar"><img src="{{asset('img/avatar-6.jpg')}}" alt="..." class="img-fluid rounded-circle"></div>
          <div class="title">
            <h1 class="h5">Mr Maxim</h1>
            <p>Directeur</p>
          </div>
        </div>
        <!-- Sidebar Navidation Menus--><span class="heading">Main</span>
        <ul class="list-unstyled">
                <li class="{{ Str::contains(request()->url(), '/home') ? 'active' : '' }}"><a href="{{url('/home')}}"> <i class="fa-solid fa-house-chimney"></i>Home </a></li>
                <li class="{{ Str::contains(request()->url(), '/inventory') ? 'active' : '' }}"><a href="{{url('/inventory')}}"><i class="fa-solid fa-warehouse"></i>Inventory </a></li>
                <li class="{{ Str::contains(request()->url(), '/offers') ? 'active' : '' }}"><a href="{{ url('/offers') }}"> <i class="fa-solid fa-border-none"></i>Offers </a></li>
                <li class="{{ Str::contains(request()->url(), '/employees') ? 'active' : '' }}"><a href="{{url('/employees')}}"> <i class="fa-solid fa-address-card"></i>Employees </a></li>
                <li class="{{ Str::contains(request()->url(), '/customer') ? 'active' : '' }}"><a href="{{url('/customers')}}"> <i class="fa-solid fa-person-walking-luggage"></i>Customers </a></li>
                <li class="{{ Str::contains(request()->url(), '/orders') ? 'active' : '' }}"><a href="{{ url('/orders')}}"> <i class="fa-solid fa-truck"></i>Orders </a></li>
{{-- example dropdown code --}}

                {{-- <li><a href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i class="icon-windows"></i>Example dropdown </a>
                  <ul id="exampledropdownDropdown" class="collapse list-unstyled ">
                    <li><a href="#">Page</a></li>
                    <li><a href="#">Page</a></li>
                    <li><a href="#">Page</a></li>
                  </ul>
                </li> --}}


      </nav>
      <div class="page-content">
         <div class="page-header">
          <div class="container-fluid d-flex justify-content-between align-items-center">
            <h2 class="h5 no-margin-bottom">@yield('title', 'BakeryMS')</h2>
            @if (Str::contains(request()->url(), '/employees') && !Str::contains(request()->url(), '/profile'))
                <a href="{{url('/employees/form')}}" class="btn btn-success">ADD <i class="fa fa-plus"></i></a>
            @elseif(Str::contains(request()->url(), '/offers') && !Str::contains(request()->url(), '/profile'))
                <a href="{{url('/offers/form')}}" class="btn btn-success">ADD <i class="fa fa-plus"></i></a>
            @endif
          </div>
        </div>
        <section class="no-padding-top no-padding-bottom">
            <div class="container-fluid">
                    @yield('content')

         </div>
        </section>
      </div>



       <script src="{{asset('vendor/jquery/jquery.min.js')}}"></script>
    <script src="{{asset('vendor/popper.js/umd/popper.min.js')}}"> </script>
    <script src="{{asset('vendor/bootstrap/js/bootstrap.min.js')}}"></script>
    <script src="{{asset('vendor/jquery.cookie/jquery.cookie.js')}}"> </script>
    <script src="{{asset('vendor/chart.js/Chart.min.js')}}"></script>
    <script src="{{asset('vendor/jquery-validation/jquery.validate.min.js')}}"></script>
    <script src="{{asset('js/charts-home.js')}}"></script>
    <script src="{{asset('js/front.js')}}"></script>
  </body>
</html>


