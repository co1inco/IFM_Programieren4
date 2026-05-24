<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MyApp</title>
    <link rel="stylesheet" href="/myapp/main.css">
</head>
<body>
    <!-- Header -->
    <header>
        <h1>MyApp</h1>
        <p>Deployed on Payara</p>
    </header>
    
    <!-- Navigation -->
    <nav>
        <ul>
            <li><a href="${pageContext.request.contextPath}/">Home</a></li>
            <li><a href="${pageContext.request.contextPath}/about">About</a></li>
            <li><a href="${pageContext.request.contextPath}/hello">Say Hello</a></li>
        </ul>
    </nav>
    
    <!-- Main Content -->
    <main class="container">
        <jsp:include page="${requestScope.page}" />
    </main>
    
    <!-- Footer -->
    <footer>
        <p>&copy; 2024 MyApp. All rights reserved.</p>
    </footer>
</body>
</html>
