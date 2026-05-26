<%@ page contentType="text/html;charset=UTF-8" language="java" %>


<table>
    <tr>
        <td>
            <img src="/myapp/res/logo.png">



            <h1>Projekt X</h1>
                
            <table style="vertical-align: top">
                <tr id="leader">
                    <td>
                        <strong>Projektleiter:</strong>
                    </td>
                    <td>
                        <span>Heinz Klaus</span>
                    </td>
                </tr>

                <tr id="topic">
                    <td>
                        <strong>Thema: </strong>
                    </td>
                    <td>
                        <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</span>
                    </td>
                </tr>

                <tr id="description">
                    <td>
                        <strong>Beschreibung: </strong>
                    </td>
                    <td>
                        <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </span>
                    </td>
                </tr>

                <tr id="goals">
                    <td>
                        <strong>Ziele: </strong>
                    </td>
                    <td>
                        <ol>
                            <li> Ziel ABC</li>
                            <li> Ziel XYZ</li>
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