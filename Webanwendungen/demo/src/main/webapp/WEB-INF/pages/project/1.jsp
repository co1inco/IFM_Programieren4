<%@ page contentType="text/html;charset=UTF-8" language="java" %>


<table>
    <tr>
        <td>
            <img src="/myapp/res/project/1_logo.png" style="max-width: 400px"/>



            <h1>Smart Campus Navigator</h1>
                
            <table style="vertical-align: top">
                <tr id="leader">
                    <td>
                        <strong>Projektleiter:</strong>
                    </td>
                    <td>
                        <span>Max Mustermann</span>
                    </td>
                </tr>

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

            </table>
            


            <div id="comments">
                <h3>Kommentare</h3>
                <form action="/myapp/project/1/comment" method="post">
                    <fieldset>
                        <label for="comment">Kommentar:</label>
                        <textarea id="comment" name="comment"></textarea>
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

        <td>
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