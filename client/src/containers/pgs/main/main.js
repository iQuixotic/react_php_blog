import * as React from "react";
import { DropDown } from "../../../components";
import { Layout} from "../../../containers";

import './style.css';

class Main extends React.Component {
    state = {
        headLine: 'the best message ever'
    }

  render() {
    return (
      <Layout>
        {/* <Toolbar></Toolbar> */}
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

export default Main;