<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Colin,Jan">
    <meta name="application-name" content="StudBoard">
    <meta name="revisit-after" content="1">
    <title>StudBoard</title>
    <link rel="stylesheet" href="/myapp/main.css">
</head>

<body>
    <!-- Header -->
    <header id="header">

        <picture>
            <source media="(min-width: 1920px)" srcset="/myapp/res/header1920x200.png">
            <source media="(min-width: 1280px)" srcset="/myapp/res/header1280x133.png">
            <source media="(min-width: 640px)" srcset="/myapp/res/header640x67.png">
            <img src="/myapp/res/header320x34.png">
        </picture>

        <div class="login-area">
            <b>Login</b>
            <form action="/myapp/submit" method="post">
                <!-- <legend>Login</legend> -->
                <fieldset>
                    <label for="name">Username</label>
                    <input id="name" name="name" type="text"/> <br/>

                    <label for="password">Password</label>
                    <input id="password" name="password" type="password"/> <br/>

                    <input type="submit" value="Login"/> 
                </fieldset>
            </form>
            
            <span>Neu hier? <a href="register">Registrieren</a></span>
        </div>

    </header>

    <nav class="main-nav">
        <ul>
            <li><a href="${pageContext.request.contextPath}/"><img src="/myapp/res/startseite.svg" style="max-height: 1.0em;"/></a></li>
            <li><a href="${pageContext.request.contextPath}/projects">Projekte</a></li>
            <li><a href="${pageContext.request.contextPath}/newproject">Neues Projekt</a></li>
        </ul>
    </nav>
    
    
    
    <!-- Main Content -->
    <main>
        

    <jsp:include page="${requestScope.page}" />

        
    </main>
    
    <!-- Footer -->
    <footer>
        <nav>
            <ul>
                <li><a href="impresum">Impressum</a></li>
                <li><a href="dsgvo">Datenschutzerklärung</a></li>
                <li><a href="haftung">Haftungsausschluss</a></li>
            </ul>

            <div class="back-to-top">
                <a href="#header">Zurück zum Anfang</a> 
            </div>
        </nav>
        <p>&copy; 2026 StudBoard. All rights reserved. Kontakt: <a href="mailto:studboard@hsbi.de">hier</a></p>    
        <br/>    
    </footer>
</body>
</html>
