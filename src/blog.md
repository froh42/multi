# Multiplication prototype blog

## 2012-06-17 Idee

Als kleines Übungsprojekt werde ich einen 1x1 Trainer in Javascript bauen. Ich stelle mir vor, dass der Trainer
die jeweils 10 am schlechtesten trainierten Aufgaben abfragt, der Benutzer muß in einem Eingabefeld jeweils die korrekte
Lösung der Aufgabe eintragen.

Als Bewertungskriterium verwendet der Trainer die
Zeit, die der Benutzer braucht um eine Frage korrekt zu beantworten. (Ich kann mir noch etwas ausdenken um
falsche Antworten zu bestrafen, z.B. eine 3-Sekunden Sperre des Eingabefeldes)

## 2012-06-17 Hello Entwicklungsumgebung

Einer Empfehlung von Heribert folgend setze ich zuallererst die Entwicklungsumgebung und eine Hello-World Seite
auf. Ich finde und installiere grunt.js als Buildsystem, lege mir eine Projektstruktur zurecht und importiere
die knockoutjs less.js und Twitter Bootstrap.

## 2012-06-18 Planning

Ich lege die blog.md und die plan.md an, jetzt habe ich ein kleines Backlog:

* I can launch the game in the browser, click on the start game link on the home screen and proceed to the game screen
* On the game screen I see one excercise and have to enter the correct solution to proceed. The Page gives feedback whether the soulution is correct.
* Each time the user enters the game screen a new, random exercise is created.

Der erste Task ist bereits erfüllt, den kann ich abhaken. Wie geht es von hier aus weiter? In Babysteps. Der nächste
Task, verlangt, dass ich auf der Spieleseite eine beliebige (aber feste) Aufgabe anzeige, den Benutzer das Ergebnis
eingeben lasse und bei korrektem Ergebnis etwas tue. (Was bei einem falschen Ergebnis passiert bleibt offen.)

So eine zielgerichtete Formulierung zwingt mich zur Disziplin, hier brauchen wir kein Domänenmodell und keine
irre Datenhaltung, es reicht eine einfach HTML-Seite die "4*6" anzeigt und in einem Inputfeld auswertet ob
das Ergebnis 42 ist. Für letzteren Anteil kann ich aber schon knockout.js einsetzen.