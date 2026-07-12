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
                    <label for="name" data-i18n="username">Username</label>
                    <input id="name" name="name" type="text"/> <br/>

                    <label for="password" data-i18n="password">Password</label>
                    <input id="password" name="password" type="password"/> <br/>

                    <input type="submit" value="Login" data-i18n="login"/> 
                </fieldset>
            </form>
            
            <span>
                <span data-i18n="newHere">Neu hier</span> <a href="register" data-i18n="register">Registrieren</a>
            </span>
            
        </div>

    </header>

    <nav class="main-nav hover-link">
        <ul>
            <li><a href="${pageContext.request.contextPath}/"><img src="/myapp/res/startseite.svg" style="max-height: 1.0em;"/></a></li>
            <li><a href="${pageContext.request.contextPath}/projects" data-i18n="projects">Projekte</a></li>
            <li><a href="${pageContext.request.contextPath}/newproject" data-i18n="newProject">Neues Projekt</a></li>
        </ul>

        <ul>
            <li><a href="#" onclick="setLanguage('de-DE')">DE</a></li>
            <li><a href="#" onclick="setLanguage('en-US')">EN</a></li>
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
                <li><a href="impresum" data-i18n="imprint">Impressum</a></li>
                <li><a href="dsgvo" data-i18n="privacyPolicy">Datenschutzerklärung</a></li>
                <li><a href="haftung" data-i18n="disclaimer">Haftungsausschluss</a></li>
            </ul>

            <div class="back-to-top">
                <a href="#header" data-i18n="backToTop">Zurück zum Anfang</a> 
            </div>
        </nav>
        <p>
            <span>&copy; 2026 StudBoard. All rights reserved.</span> 
            <Span data-i18n="contact">Kontakt</Span>: <a href="mailto:studboard@hsbi.de">hier</a></p>    
        <br/>    
    </footer>

    <script type="module" src="${pageContext.request.contextPath}/js/localization.js"></script>
</body>
</html>
