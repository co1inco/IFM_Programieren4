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

        <nav>
            <ul>
                <li><a href="${pageContext.request.contextPath}/"><img src="/myapp/res/startseite.svg" style="max-height: 1.5em; color: yellow"/></a></li>
                <li><a href="${pageContext.request.contextPath}/projects">Projekte</a></li>
                <li><a href="${pageContext.request.contextPath}/newproject">Neues Projekt</a></li>
            </ul>
        </nav>
    </header>
    
    
    
    <!-- Main Content -->
    <main class="container">
        
        <section>
            <h2>Hello world</h2>
            <jsp:include page="${requestScope.page}" />    
        </section>
        
    </main>

    <section>
        <div>
            <h3>Login</h3>
            <form action="/myapp/submit" method="post">
                <!-- <legend>Login</legend> -->
                <fieldset>
                    <label for="name">Username</label>
                    <input id="name" name="name" type="text"/>

                    <label for="password">Password</label>
                    <input id="password" name="password" type="password"/>

                    <input type="submit" value="Login"/> 
                </fieldset>
            </form>
            
            <span>Neu hier? <a href="register">Registrieren</a></span>
        </div>
    </section>
    
    <!-- Footer -->
    <footer>
        <nav>
            <ul>
                <li><a href="#header">Zurück zum Anfang</a></li>
                <li><a href="impresum">Impressum</a></li>
                <li><a href="dsgvo">Datenschutzerklärung</a></li>
                <li><a href="haftung">Haftungsausschluss</a></li>
            </ul>
        </nav>
        <p>&copy; 2026 StudBoard. All rights reserved. Kontakt: <a href="mailto:studboard@hsbi.de">hier</a></p>        
    </footer>
</body>
</html>
