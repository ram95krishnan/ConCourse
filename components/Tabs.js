import React from 'react';
import ReactDOM from 'react-dom';

var Tabbs = require('pui-react-tabs').Tabs;
var Tab = require('pui-react-tabs').Tab;

class Tabs extends React.Component {
  render(){
    return(
    <div>

      <Tabbs defaultActiveKey={1} tabWidth={7} paneWidth={9}>

        <Tab eventKey={1} title="COURSES">
            <div className="Content">
                Hola
            </div>

        </Tab>

        <Tab eventKey={2} title="Apply Now!">
            <div className="Content">
              Amigo
            </div>
        </Tab>

    </Tabbs>

  </div>);
  }
}

export default Tabs;
