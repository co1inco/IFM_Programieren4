<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<form class="new-project-form" action="/myapp/newproject" method="post" enctype="multipart/form-data">

    <div class="prj-header">

        <div>
            <label for="logo" class="logo-placeholder">
                Logo auswählen
            </label>
            <input id="logo" name="logo" type="file" accept="image/png, image/jpeg">

            <input id="title" name="title" type="text" placeholder="Projekttitel" class="new-project-title">
        </div>

        <label>
            Projektleiter:
            <input name="leader" type="text" placeholder="Name">
        </label>

    </div>

    <table class="new-project-table">

        <tr>
            <td><strong>Startdatum:</strong></td>
            <td><input id="start" name="start" type="date"></td>
        </tr>

        <tr>
            <td><strong>Enddatum:</strong></td>
            <td><input id="end" name="end" type="date"></td>
        </tr>

        <tr>
            <td><strong>Thema:</strong></td>
            <td><textarea id="topic" name="topic" class="full-width-input"></textarea></td>
        </tr>

        <tr>
            <td><strong>Beschreibung:</strong></td>
            <td><textarea id="description" name="description" class="full-width-input"></textarea></td>
        </tr>

        <tr>
            <td><strong>Ziele:</strong></td>
            <td>
                <input id="goal1" name="goal1" type="text" placeholder="Ziel 1">
                <input id="goal2" name="goal2" type="text" placeholder="Ziel 2">
            </td>
        </tr>

    </table>

    <input type="submit" value="Erstellen">

</form>