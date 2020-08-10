import React from 'react';
import {Form, Segment, Header} from 'semantic-ui-react';
import {API, graphqlOperation} from 'aws-amplify';
import {createProject} from '../graphql/mutations';

const options = [
    { key: 'a', text: 'Active', value: 'active' },
    { key: 'i', text: 'Inactive', value: 'inactive' }
    // { key: 'o', text: 'Other', value: 'other' },
  ]

class ProjectAdder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectName: '',
            projectNumber: '',
            projectDescription: '',
            projectStatus: 'active'
        };
    }

    handleChange = (event) => {
        let change = {};
        change[event.target.name] = event.target.value;
        this.setState(change);
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        // console.log('Creating new project');
        // console.log(this.state);

        try {
            const result = await API.graphql(graphqlOperation(createProject, { input: {name: this.state.projectName, number: this.state.projectNumber, description: this.state.projectDescription, status: this.state.projectStatus }}));
            console.info(`Created project with id ${result.data.createProject.id}. Point in time for creation: ${result.data.createProject.createdAt}. Point in time for update: ${result.data.createProject.updatedAt}`);
        } catch(error) {
            console.log(error);
        }
    }

    render() {
        return (
            <Segment>
            <Header as='h3'>Add a new Project</Header>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Input fluid name='projectName' label='Project Name' placeholder='Project Name' onChange={this.handleChange} />
                        <Form.Input fluid name='projectNumber' label='Project Number' placeholder='Project Number' onChange={this.handleChange} />
                        <Form.Select fluid name='projectStatus' label='Status' options={options} placeholder='Status' onChange={this.handleChange} />
                    </Form.Group>
                    <Form.TextArea name='projectDescription' label='Description' placeholder='Project Description...' onChange={this.handleChange} />
        
                    <Form.Button>Submit</Form.Button>
                </Form>
            </Segment>
        )
    }
}

export default ProjectAdder;
  