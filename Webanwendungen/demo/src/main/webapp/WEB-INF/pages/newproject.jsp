<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<h1>Neues Projekt erstellen</h1>


<form action="/myapp/newproject" method="post" enctype="multipart/form-data">
    <fieldset>
        <label for="title">Titel</label>
        <input id="title" name="title" type="text"/>
        <br/>
    
        <label for="start">Startdatum</label>
        <input id="start" name="start" type="date"/>
        <br/>

        <label for="end">Enddatum</label>
        <input id="end" name="end" type="date"/>
        <br/>

        <label for="topic">Kurzbeschreibung</label>
        <input id="topic" name="topic" type="text"/>
        <br/>

        <label for="description">Beschreibung</label>
        <textarea id="description" name="description"></textarea> 
        <br/>

        <label for="goal1">Ziel 1</label>
        <select id="goal1" name="goal1">
            <option value="goal_abc">Ziel ABC</option>
            <option value="goal_def">Ziel DEF</option>
            <option value="goal_ghi">Ziel GHI</option>
            <option value="goal_jkl">Ziel JKL</option>
        </select>
        <br/>

        <label for="goal2">Ziel 2</label>
        <select id="goal2" name="goal2">
            <option value="goal_abc">Ziel ABC</option>
            <option value="goal_def">Ziel DEF</option>
            <option value="goal_ghi">Ziel GHI</option>
            <option value="goal_jkl">Ziel JKL</option>
        </select>
        <br>

        <label for="logo">Logo</label>
        <input id="logo" name="logo" type="file" accept="image/png, image/jpeg">
    </fieldset>

    <input type="submit" value="Erstellen"/> 
</form>