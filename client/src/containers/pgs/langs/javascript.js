import * as React from "react";
import { DropDown } from "../../../components";
import { Layout} from "../../../containers";

import './style.css';

class Javascript extends React.Component {
    state = {
        headLine: 'this is Javascript, the only language I know.'
    }

  render() {
    return (
      <Layout>
        {/* <Toolbar></Toolbar> */}
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>
        <h1>{this.state.headLine}</h1>


        <DropDown>
          <option>here</option>
          <option>there</option>
          <option>where</option>
        </DropDown>
      </Layout>
    );
  }
}

export default Javascript;