# Leserbrief verfassen

Einzelne HTML-Seite für die Kurszeitschrift. Schüler schreiben einen Leserbrief, die Seite setzt ihn einheitlich auf eine A5-Seite und speichert ihn als PDF.

## Was sie macht
- Felder für Titel, Autor:in, Medium und Erscheinungsdatum des Ausgangstextes sowie Überschrift, Text und Name.
- Prüfliste: Name, Titel des Ausgangstextes im Brief genannt, Seite zu mindestens 70 % gefüllt (nicht übergelaufen), gut lesbare Farbe, nur erlaubte Zeichen.
- Vier Schriften (Antiqua, Grotesk, Schreibmaschine, Handschrift), Farbe frei wählbar, Blocksatz, Datum und Betreffzeile automatisch.
- PDF-Export über die Download-Funktion von Claude-Artefakten. Außerhalb davon funktioniert das Speichern nicht, die Vorschau schon.

## Einstellungen
Oben im Skript im Objekt `CONFIG`: Kursangabe in der Kopfzeile (`courseLine`), Mindestfüllung (`minFill`, Standard 0.70) und Seitenzahl (`maxPages`). Die Seitenränder stehen in `SIDE`.

## Hinweise
- jsPDF wird von cdnjs geladen (Version 2.5.1).
- Die Handschrift „Patrick Hand“ ist als Base64 eingebettet und steht unter der SIL Open Font License.
- Entwürfe werden nur lokal im Browser des Schülers zwischengespeichert, nichts wird übertragen.
