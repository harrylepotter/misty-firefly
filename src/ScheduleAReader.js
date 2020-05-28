let text = require("./schedA.txt");
class ScheduleAReader {
  constructor() {
    console.log("schedule A reader: init");
    this.begin =
      '<p style="margin: 0in 0in 0.0001pt; font-size: 12pt; font-family: Calibri, sans-serif;"><span style="color: red;">{';
    this.end = "}</span></p>";
    this.getSection = this.getSection.bind(this);
  }

  getSection(name) {
    var matchString = "".concat(
      this.begin,
      name,
      this.end,
      "(.*)",
      this.begin,
      "/",
      name,
      this.end
    );

    console.log("matchString", matchString);
    console.log("name=", name);

    var matcher = new RegExp(matchString, "g");
    var response = text.match(matcher);

    if (response != null) {
      response = response[0]
        .replace("".concat(this.begin, name, this.end), "")
        .replace("".concat(this.begin, "/", name, this.end), "")
        .replace("undefined", "");
    } else {
      response =
        "<p style='color:red'> Definition not found for section:" +
        name +
        "</p>";
    }

    return response;
  }
}

export default ScheduleAReader;
