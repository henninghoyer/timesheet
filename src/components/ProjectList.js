import React from 'react';
import {Segment, Header, List} from 'semantic-ui-react';
import {Connect} from 'aws-amplify-react';
import {graphqlOperation} from 'aws-amplify';
import {listProjects} from '../graphql/queries';
import {onCreateProject} from '../graphql/subscriptions';
const localUtils = require('./utils');

class ProjectList extends React.Component {
        projects() {
            return this.props.projects.sort(localUtils.makeComparator('number')).map(p => 
                <li key={p.id}>
                    <h4>{p.name}</h4>
                    <span>Project Number: {p.number}</span>
                    <p>{p.description}</p>
                </li>
            );
        }
  
    render() {
        return(
            <Segment>
                <Header as='h3'>Active Projects</Header>
                <List divided relaxed>
                    {this.projects()}
                    {/* {projects.map(p => (
                    <li key={p.id}>
                        <h4>{p.name}</h4>
                        <span>Project Number: {p.number}</span>
                        <p>{p.description}</p>
                    </li>
                    ))} */}
                </List>
            </Segment>
        );
    }
}

class ProjectListLoader extends React.Component {
    //loads all active projects for display
    onNewProject = (prevQuery, newData) => {
        let updatedQuery = Object.assign({}, prevQuery);
        updatedQuery.listProjects.items = prevQuery.listProjects.items.concat([newData.onCreateProject]);
        return updatedQuery;
    }

    render(){
        return (
            <Connect query={graphqlOperation(listProjects, {filter: {status: {eq: "active"}}})}
                    subscription={graphqlOperation(onCreateProject)} 
                    onSubscriptionMsg={this.onNewProject}>    
                {({ data, loading, errors }) => {
                    if (loading) { return <div>Loading...</div>; }
                    if (errors.length > 0) { return <div>{JSON.stringify(errors)}</div>; }
                    if (!data.listProjects) return;

                    return <ProjectList projects={data.listProjects.items} />;
                }}
            </Connect>
        );
    }
}

export default ProjectListLoader;