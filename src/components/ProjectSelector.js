import React from 'react';
import {Form} from 'semantic-ui-react';
import {graphqlOperation} from 'aws-amplify';
import {Connect} from 'aws-amplify-react';

function ProjectSelector(props) {
    const listProjects = `query listProjects {
        listProjects{
          items{
            id
            number
            name
          }
        }
      }`;

    return(
        <Connect query={graphqlOperation(listProjects, {filter: {status: {eq: "active"}}})}
                    // subscription={graphqlOperation(onCreateProject)} 
                    // onSubscriptionMsg={this.onNewProject}>    
                    >
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
                    return <Form.Select fluid name='project' label='Project' options={optionsList} placeholder='Project' />
                }}
            </Connect>
    );
};

export default ProjectSelector;