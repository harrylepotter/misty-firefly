import React from "react";
import "./styles.css";
import PCTOptions from "./PCTOptions";
import Grid from "@material-ui/core/Grid";

import ScheduleAReader from "./ScheduleAReader";

export default function App() {
  var contentBox = React.createRef();

  var reader = new ScheduleAReader();
  var response = "&lt;------ Make some selections to the left";

  var updateOptions = function(state) {
    response = reader.getSection("header");
    console.log("state.tier=", state.tier);
    if (state.tier == "full") response = response + reader.getSection("tmx");

    for (var key in state.products) {
      // check if the property/key is defined in the object itself, not in parent
      if (state.products.hasOwnProperty(key)) {
        console.log(key, state.products[key]);
        if (state.products[key]) response += reader.getSection(key);
      }
    }
    response = response + reader.getSection("footer");
    contentBox.current.innerHTML = response;
    //console.log(response);
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={3} className="pctopts">
          <PCTOptions onChange={updateOptions} />
        </Grid>
        <Grid item xs={9}>
          <div
            ref={contentBox}
            dangerouslySetInnerHTML={{ __html: response }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
