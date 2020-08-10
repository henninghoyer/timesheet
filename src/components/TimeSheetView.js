import React from 'react';
import Timesheet from './TimeSheet';
import TimeSheetSummary from './TimeSheetSummary';

function TimeSheetView(props) {
    return(
        <div className="ui vertically divided grid">
            <div className="two column row">
                <div className="column">
                    <Timesheet />
                </div>
                <div className="column">
                    <TimeSheetSummary />
                </div>
            </div>
            {/* <div className="three column row">
                <div className="column">
                    <img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" className="ui image" />
                </div>
                <div className="column">
                    <img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" className="ui image" />
                </div>
                <div className="column">
                    <img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" className="ui image" />
                </div>
            </div> */}
        </div>
    );
}

export default TimeSheetView;