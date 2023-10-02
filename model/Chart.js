function Chart(data, type) {
    this.data = data;
    this.type = type;
}

export const charts = [
    new Chart("Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag", "Line"),

    new Chart("Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag", "Pie"),

    new Chart("Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag", "Bar"),

    new Chart("Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag", "Doughnut"),

    new Chart("Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag", "Radar"),

    new Chart("Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag", "PolarArea"),

    new Chart("Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag", "Bubble"),

    new Chart("Europe, Asia, Africa, Northamerica, Southamerica, Australia, Antarctica", "GeoMap"),

];
