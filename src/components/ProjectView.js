import React from 'react';
import ProjectListLoader from './ProjectList';
import ProjectAdder from './ProjectAdder';

function ProjectView(props) {
    return(
        <div className="ui vertically divided grid">
            <div className="two column row">
                <div className="column">
                    <ProjectAdder />
                </div>
                <div className="column">
                    {/* <img src="https://react.semantic-ui.com/images/wireframe/paragraph.png" class="ui image" /> */}
                    <ProjectListLoader />
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

export default ProjectView;