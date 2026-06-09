<%@ page contentType="text/html;charset=UTF-8" language="java" %>


<table class="prj-content">
    <tr>
        <td>
            <div class="prj-header">
                <div>
                    <img src="/myapp/res/project/1_logo.png"/>

                    <h1>Smart Campus Navigator</h1>
                </div>

                <span id="leader"><strong>Projektleiter:</strong> Max Mustermann</span>
            </div>
                
            <table style="vertical-align: top">
                <tr id="topic">
                    <td>
                        <strong>Thema: </strong>
                    </td>
                    <td>
                        <span>Intelligente Navigation und Raumverwaltung für den Hochschulcampus</span>
                    </td>
                </tr>

                <tr id="description">
                    <td>
                        <strong>Beschreibung: </strong>
                    </td>
                    <td>
                        <span>Der Smart Campus Navigator ist eine webbasierte Anwendung zur Orientierung auf dem Hochschulgelände. Studierende können Lernräume finden, Vorlesungsräume suchen und aktuelle Informationen zu Gebäuden und Veranstaltungen finden.</span>
                    </td>
                </tr>

                <tr id="goals">
                    <td>
                        <strong>Ziele: </strong>
                    </td>
                    <td>
                        <ol>
                            <li>Navigation auf dem Campus verbessern</li>
                            <li>Freie Lernräume in Echtzeit anzeigen</li>
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
            <aside>
                <h1>Inhalt</h1>
                <ul>
                    <li><a href="#leader">Projektleiter</a></li>
                    <li><a href="#topic">Thema</a></li>
                    <li><a href="#description">Beschreibung</a></li>
                    <li><a href="#goals">Ziele</a></li>
                    <li><a href="#comments">Kommentare</a></li>
                </ul>
            </aside>
        </td>
    </tr>
</table>