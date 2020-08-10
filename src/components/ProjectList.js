import React from 'react';
import {Segment, Header, Loader, Table} from 'semantic-ui-react';
import {Connect} from 'aws-amplify-react';
import {graphqlOperation} from 'aws-amplify';
import {listProjects} from '../graphql/queries';
import {onCreateProject} from '../graphql/subscriptions';
const localUtils = require('./utils');

class ProjectList extends React.Component {
        projects() {
            return this.props.projects.sort(localUtils.makeComparator('number')).map(p => 
                <Table.Row>
                    <Table.Cell>
                        {p.number}
                    </Table.Cell>
                    <Table.Cell>
                        {p.name}
                    </Table.Cell>
                    <Table.Cell>
                        {p.description}
                    </Table.Cell>
                </Table.Row>
            );
        }
  
    render() {
        return(
            <Segment className="scrolling content">
                <Header as='h3'>Active Projects</Header>
                <Table celled>
                    <Table.Header>
                            <Table.HeaderCell>Number</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                    </Table.Header>
                    <Table.Body>
                        {this.projects()}
                    </Table.Body>
                </Table>
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
                    // if (loading) { return <div>Loading...</div>; }
                    if (loading) { return <Loader />}
                    if (errors.length > 0) { return <div>{JSON.stringify(errors)}</div>; }
                    if (!data.listProjects) return;

                    return <ProjectList projects={data.listProjects.items} />;
                }}
            </Connect>
        );
    }
}

export default ProjectListLoader;