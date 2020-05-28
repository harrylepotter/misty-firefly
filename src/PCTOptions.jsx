import React from "react";
import { Button } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";

class PCTOptions extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.state = {
      tier: "basic",
      products: {
        emailage: false,
        iid: false,
        fraudpoint: false,
        flexid: false,
        behavioral: false,
        iv: false,
        ivi: false,
        iidb: false,
        iidhealthcare: false,
        iidqa: false,
        otp: false,
        orderscore: false,
        trueid: false
      }
    };
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    this.props.onChange(this.state);
  }

  handleCheckbox(event) {
    var name = event.target.name;
    var value = event.target.checked;
    this.setState(function(state, props) {
      state.products[name] = value;
      return state;
    });
  }

  handleChange(event) {
    console.log("handle change!", event.target);
    var value = event.target.value;
    var isBehavioralEnabled = this.state.products.behavioral && value == "full";
    console.log("isbehavioralenabled = ", isBehavioralEnabled);
    this.setState(state => ({
      tier: event.target.value,
      products: { behavioral: isBehavioralEnabled }
    }));
  }

  render() {
    return (
      <form autoComplete="off">
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          <FormControl>
            <InputLabel htmlFor="tier-simple">Tier</InputLabel>
            <Select
              value={this.state.tier}
              onChange={this.handleChange}
              inputProps={{
                name: "tier",
                id: "tier-simple"
              }}
            >
              <MenuItem value="basic">Orchestration Hub Only (Basic)</MenuItem>
              <MenuItem value="full">TMX Full offering</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.products.behavioral}
                  onChange={this.handleCheckbox}
                  name="behavioral"
                  color="primary"
                  disabled={this.state.tier == "basic"}
                />
              }
              label="Behavioral Biometrics"
            />
          </FormControl>
          <FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.products.emailage}
                  onChange={this.handleCheckbox}
                  name="emailage"
                  color="primary"
                />
              }
              label="EmailAge"
            />
          </FormControl>
          <FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.products.flexid}
                  onChange={this.handleCheckbox}
                  name="flexid"
                  color="primary"
                />
              }
              label="FlexID"
            />
          </FormControl>
          <FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.products.fraudpoint}
                  onChange={this.handleCheckbox}
                  name="fraudpoint"
                  color="primary"
                />
              }
              label="FraudPoint"
            />
          </FormControl>
          <FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.products.iid}
                  onChange={this.handleCheckbox}
                  name="iid"
                  color="primary"
                />
              }
              label="InstantID"
            />
          </FormControl>
          <FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.products.iidb}
                  onChange={this.handleCheckbox}
                  name="iidb"
                  color="primary"
                />
              }
              label="InstantID Business"
            />
          </FormControl>
          <FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.products.iidhealthcare}
                  onChange={this.handleCheckbox}
                  name="iidhealthcare"
                  color="primary"
                />
              }
              label="InstantID for Healthcare"
            />
          </FormControl>
          <FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.products.iidqa}
                  onChange={this.handleCheckbox}
                  name="iidqa"
                  color="primary"
                />
              }
              label="InstantID Q&A"
            />
          </FormControl>
          <FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.products.iv}
                  onChange={this.handleCheckbox}
                  name="iv"
                  color="primary"
                />
              }
              label="InstantVerify"
            />
          </FormControl>
          <FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.products.ivi}
                  onChange={this.handleCheckbox}
                  name="ivi"
                  color="primary"
                />
              }
              label="InstantVerify International"
            />
          </FormControl>
          <FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.products.otp}
                  onChange={this.handleCheckbox}
                  name="otp"
                  color="primary"
                />
              }
              label="One Time Password"
            />
          </FormControl>
          <FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.products.orderscore}
                  onChange={this.handleCheckbox}
                  name="orderscore"
                  color="primary"
                />
              }
              label="Order Score"
            />
          </FormControl>
          <FormControl>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.products.trueid}
                  onChange={this.handleCheckbox}
                  name="trueid"
                  color="primary"
                />
              }
              label="True ID"
            />
          </FormControl>
        </Grid>
      </form>
    );
  }
}

export default PCTOptions;
