<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="project-overview-header">
    <h1>Projektübersicht</h1>

    <div class="filter-menu">
        <div class="filter-button">
            Sortieren
        </div>

        <select id="sortSelect" class="sort-select">
            <option value="start">Anfangsdatum</option>
            <option value="duration">Laufzeit</option>
        </select>
    </div>
</div>


<ul class="project-list" id="project-list">
</ul>

<script type="module" src="${pageContext.request.contextPath}/js/projects.js"></script>