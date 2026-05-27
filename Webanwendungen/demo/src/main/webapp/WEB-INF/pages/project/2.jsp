<%@ page contentType="text/html;charset=UTF-8" language="java" %>


<table>
    <tr>
        <td>
            <img src="/myapp/res/project/2_logo.png" style="max-width: 400px"/>



            <h1>Parkplatz Survival</h1>
                
            <table>
                <tr id="leader">
                    <td>
                        <strong>Projektleiter:</strong>
                    </td>
                    <td>
                        <span>Anna Musterfrau</span>
                    </td>
                </tr>

                <tr id="topic">
                    <td>
                        <strong>Thema: </strong>
                    </td>
                    <td>
                        <span>Intelligente Parkplatzsuche für den Hochschulcampus</span>
                    </td>
                </tr>

                <tr id="description">
                    <td>
                        <strong>Beschreibung: </strong>
                    </td>
                    <td>
                        <span>Parkplatz Survival unterstützt Studierende dabei, schneller einen freien Parkplaz in der Nähe des Campus zu finden. Die Anwendung zeigt mögliche Parkflächen, geschätzte Auslastungen und typische Stoßzeiten an.</span>
                    </td>
                </tr>

                <tr id="goals">
                    <td>
                        <strong>Ziele: </strong>
                    </td>
                    <td>
                        <ol>
                            <li>Freie Parkmöglichkeiten rund um den Campus übersichtlich anzeigen</li>
                            <li>Die Parkplatzsuche für Studierende vereinfachen</li>
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