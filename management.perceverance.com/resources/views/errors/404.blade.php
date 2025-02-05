<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Boulangerie la perceverance</title>
    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            text-decoration: none
        }
        body{
            background: #533e2d;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            overflow: hidden;
        }
        h1{
            text-align: center;
            font-weight: 800;
            font-size: 60px;
            color: #b88b4a;
        }
        h1 small{
            font-size: 20px
        }
    </style>
</head>
<body>
    <a href="{{url('/home')}}" title="Click to go to HOME" class="content">
        <img src="{{asset('/img/logo.png')}}" alt="">
        <h1>404 <small>Page Not Found</small></h1>
    </a>
</body>
</html>
