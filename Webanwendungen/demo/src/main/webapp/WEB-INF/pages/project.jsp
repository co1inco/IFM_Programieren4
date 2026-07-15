<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<table class="prj-content fill-w">
    <tr>
        <td>
            <div class="prj-header">
                <div>
                    <img id="projectIcon" src="/myapp/res/project/1_logo.png"/>

                    <h1 id="projectTitle">Loading...</h1>
                </div>

                <span id="leader" class="margin-5"><strong>Projektleiter: </strong> <span id="projectLead"></span></span>
            </div>
                
            <table class="new-project-table" style="vertical-align: top">
                <tr>
                    <td>
                        <strong>Startdatum:</strong>
                    </td>
                    <td id="projectStartDate">
                    </td>
                </tr>
                <tr>
                    <td>
                        <strong>Enddatum:</strong>
                    </td>
                    <td id="projectEndDate">
                    </td>
                </tr>
                <tr id="topic">
                    <td>
                        <strong>Thema: </strong>
                    </td>
                    <td>
                        <span id="projectDescriptionShort"></span>
                    </td>
                </tr>

                <tr id="description">
                    <td>
                        <strong>Beschreibung: </strong>
                    </td>
                    <td>
                        <span id="projectDescriptionLong"></span>
                    </td>
                </tr>

                <tr id="goals">
                    <td>
                        <strong>Ziele: </strong>
                    </td>
                    <td>
                        <ol id="projectGoals">
                        </ol>
                    </td>
                </tr>
                
                <!-- dummy space to test sticky scrolling -->
                <tr style="height: 500px">

                </tr>
            </table>
            


            <div id="comments">
                <h3>Kommentare</h3>
                <form action="/myapp/project/1/comment" method="post">
                    <fieldset>
                        <label for="comment">Kommentar:</label>
                        <textarea id="comment" name="comment" class="comment-input"></textarea>
                    </fieldset>
                    <fieldset>
                        <label>Bewertung</label>
                        <input type="radio" name="rating" value="1" > 1
                        <input type="radio" name="rating" value="2" > 2
                        <input type="radio" name="rating" value="3" checked> 3
                        <input type="radio" name="rating" value="4" > 4
                        <input type="radio" name="rating" value="5" > 5
                    </fieldset>

                    <input type="submit" value="Senden"/> 
                </form>
            </div>
        </td>

        <td class="prj-content-list hover-link">
            <aside class="sidenav">
                <h1>Inhalt</h1>
                <ul>
                    <li><a href="#leader">Projektleiter</a></li>
                    <li><a href="#topic">Thema</a></li>
                    <li>
                        <a href="#description">Beschreibung</a>
                        <ul id="descriptionIndex"></ul>
                    </li>
                    <li><a href="#goals">Ziele</a></li>
                    <li><a href="#comments">Kommentare</a></li>
                </ul>
            </aside>
        </td>
    </tr>

    <script type="module" src="${pageContext.request.contextPath}/js/project.js"></script>
</table>
