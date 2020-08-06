import React from 'react';
import {Form, Segment, Header} from 'semantic-ui-react';
import {API, graphqlOperation} from 'aws-amplify';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import {Connect} from 'aws-amplify-react';
import {createTimeEntry} from '../graphql/mutations';
// import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
// import ProjectSelector from './ProjectSelector';

const listProjects = `query listProjects {
    listProjects{
      items{
        id
        number
        name
      }
    }
  }`;

class Timesheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            duration: 0.0,
            date: '',
            description: '',
            projectID: ''
        };
    }

    handleChange = (event, data) => {
        let change = {};
        //Bit of a hack for the select component
        if(data && data.name == "projectID") {
            change[data.name] = data.value;
        }
        // console.log(event.target);
        // console.log(data);
        change[event.target.name] = event.target.value;
        this.setState(change);
    }

    handleDateChange = (event, data) => {
        let datestamp = data.value.toISOString().substr(0,10);
        this.setState({date: datestamp});
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Creating new timesheet');
        // console.log(this.state);

        try {
            const result = await API.graphql(graphqlOperation(createTimeEntry, { input: {duration: Number.parseFloat(this.state.duration), description: this.state.description, projectID: this.state.projectID, date: this.state.date }}));
            console.info(`Created timesheet with id ${result.data.createTimeEntry.id}`);
        } catch(error) {
            console.log(error);
        }
    }

    render() {
        return (
            <Segment>
            <Header as='h3'>Add a new Timesheet</Header>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        {/* <Form.Select fluid name='project' label='Project' options={options} placeholder='Project' onChange={this.handleChange} /> */}
                        <Connect query={graphqlOperation(listProjects, {filter: {status: {eq: "active"}}})}>
                {({ data, loading, errors }) => {
                    // if (loading) { return <div>Loading...</div>; }
                    if (errors.length > 0) { return <div>{JSON.stringify(errors)}</div>; }
                    if (!data.listProjects) return;
                    let items = data.listProjects.items;
                    let optionsList = [];
                    console.log(items);
                    items.forEach(element => {
                        optionsList.push({key: element.number, text: element.name, value: element.id});
                    });
                    // console.log(options);
                    return <Form.Select fluid name='projectID' label='Project' options={optionsList} placeholder='Project' onChange={this.handleChange} />
                }}
            </Connect>
                        <Form.Input fluid name="duration" label="Duration" type="number" min="0.5" max="24" step="0.5" placeholder='Duration' onChange={this.handleChange} />                        
                    </Form.Group>
                    <Form.Group>
                        <SemanticDatepicker fluid name='date' format='YYYY-MM-DD' onChange={this.handleDateChange} />
                    </Form.Group>
                    <Form.TextArea name='description' label='Description' placeholder='Task Description...' onChange={this.handleChange} />
        
                    <Form.Button>Submit</Form.Button>
                </Form>
            </Segment>
        )
    }
}

export default Timesheet;
  