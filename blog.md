# Multiplication prototype blog

## 2012-06-23 Testing

Für Multi habe wir letzen Mittwoch geplant, ein kompletten Durchstich für Tests zu schreiben. Mir fällt dabei auf, dass ich schon eine Story als erledigt markiert habe, aber noch keine Tests dafür geschrieben. Why? Vermutlich weil ich noch keine Definition of Done habe.

Also:

* Eine Definition of done muß her
* Die existierende, abgeschlossene Story muß nochmal zurück

### Definiton of Done

Eine Story ist genau dann fertig, wenn:

* Sie das erfüllt, was ich mir vorgestellt habe. (Im echten Leben: Sie erfüllt die vorher definierten Confirmations)
* Es einen Test gibt, der die geforderten Dinge nachweist

Wupps. Ich brauche also schnell für die erste Story einen Test (oder lasse sie wie unten erwähnt auf UI Test stehen). Egal, ich brauche in jedem Falle für die AKTUELLE Story einen Test, damit ich sie abschließen kann. Ein Testframework muß her, aber schnell! Ich mach's mir einfach und klaue einfach das, was auch knockout.js verwendet - schließlich ist das meine Hauptlibrary und vielleicht kann ich ja dann bei knockout abschreiben, wenn ich mal nicht weiter weiß wie ich einen Test erstellen soll.


## 2012-06-23 Testkandidaten für UI Tests markiert

Im (Backlog)[plan.md] habe ich jetzt für die (eine, simple) erledigten Story die Confirmation aufgeschrieben,
durch die die Story erfüllt ist. Beachte: In meinem Backlog gibt es keine Confirmations bei den offenen Stories, denn
ich bin in diesem Tool ja selbst Anforderungsgeber und Entwickler in Personalunion, brauche daher als Anforderer
keine Confirmations schreiben um den Entwickler zu sagen was zu tun ist. Im Nachhinein ist es aber interessant zu
sehen, WARUM eine Story erfüllt ist - und im aktuellen Fall ist das auch gleich ein Kandidat für einen Test. Da
es eine UI-Geschichte ist, ein Kandidat für Flo's Selenium Test.

## 2012-06-20 Ziel, Hello Github

### Ziel

In zwei Wochen, am 4.7.2012 ist der nächste [Workshop Softwarearchitektur](http://workshop-softwarearchitektur.de) bei den IT-Agenten.

Unser Fokus ist Qualität und Testing, am Beispiel eine kleinen Javascript-Applikation wollen wir folgendes zeigen:

* Ausgereiftes Deployment von Anfang an
* Unit-Testing mit JUnit bis in die UI-Logik
* Automatisierte UI-Tests mit Selenium
* Continuous integration

Als Showcase dient *multi*.

Es gibt einen Meilenstein, das ist die zweite Telco zur Vorbereitung am nächsten Mittwoch den 27.6.2012 um 20.00h. 

### Hello Github

Multi ist jetzt auf Github öffentlich verfügbar. Um lange Suchen nach einer passenden Lizenz zu vermeiden, habe ich alles einfach eine möglichst großzügige MIT-Lizenz für den aktuellen Stand [verwendet](LICENSE).


## 2012-06-18 Planning

Ich lege die blog.md und die plan.md an, jetzt habe ich ein kleines Backlog:

* I can launch the game in the browser, click on the start game link on the home screen and proceed to the game screen
* On the game screen I see one excercise and have to enter the correct solution to proceed. The Page gives feedback whether the soulution is correct.
* Each time the user enters the game screen a new, random exercise is created.

Der erste Task ist bereits erfüllt, den kann ich abhaken. Wie geht es von hier aus weiter? In Babysteps. Der nächste Task, verlangt, dass ich auf der Spieleseite eine beliebige (aber feste) Aufgabe anzeige, den Benutzer das Ergebnis eingeben lasse und bei korrektem Ergebnis etwas tue. (Was bei einem falschen Ergebnis passiert bleibt offen.)

So eine zielgerichtete Formulierung zwingt mich zur Disziplin, hier brauchen wir kein Domänenmodell und keine irre Datenhaltung, es reicht eine einfach HTML-Seite die "4*6" anzeigt und in einem Inputfeld auswertet ob das Ergebnis 42 ist. Für letzteren Anteil kann ich aber schon knockout.js einsetzen.

## 2012-06-17 Hello Entwicklungsumgebung

Einer Empfehlung von Heribert folgend setze ich zuallererst die Entwicklungsumgebung und eine Hello-World Seite auf. Ich finde und installiere grunt.js als Buildsystem, lege mir eine Projektstruktur zurecht und importiere die knockoutjs less.js und Twitter Bootstrap.

## 2012-06-17 Idee

Als kleines Übungsprojekt werde ich einen 1x1 Trainer in Javascript bauen. Ich stelle mir vor, dass der Trainer die jeweils 10 am schlechtesten trainierten Aufgaben abfragt, der Benutzer muß in einem Eingabefeld jeweils die korrekte Lösung der Aufgabe eintragen.

Als Bewertungskriterium verwendet der Trainer die Zeit, die der Benutzer braucht um eine Frage korrekt zu beantworten. (Ich kann mir noch etwas ausdenken um falsche Antworten zu bestrafen, z.B. eine 3-Sekunden Sperre des Eingabefeldes)

