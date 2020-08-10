import React from 'react';
import {Segment, Header, Loader, Statistic, Table} from 'semantic-ui-react';
import {graphqlOperation} from 'aws-amplify';
import {Connect} from 'aws-amplify-react';

const listTimeEntriesQueries = `query ListTime{
    listTimeEntrys{
      items{
        id,
        duration,
        description,
        date,
        isadmin,
        project{
          number
        }
      }
    }
  }`;

function getTotalHours(items) {
    let totalHours = items.reduce((acc, item) => {        
        if ('total' in acc) {
            acc['total'] += item.duration;
        } else {
            acc['total'] = 0;
            acc['total'] += item.duration;
        }

        if (item.isadmin) {
            if ('admin' in acc) {
                acc['admin'] += item.duration;
            } else {
                acc['admin'] = 0;
                acc['admin'] += item.duration;
            }
        }
        return acc;
    }, {});
    return totalHours;
}

function getProjectHours(items) {
    let hoursPerProject = items.reduce((acc, item) => {
        const project = item.project.number;

        if (project in acc) {
            acc[project] += item.duration;
        } else {
            acc[project] = 0;
            acc[project] += item.duration;
        }

        return acc;
    }, {});
    // console.log(hoursPerDay);
    return hoursPerProject;
}

class TimeSheetList extends React.Component {
    
    timesheetItems = (items) => {
        // console.log(items);
        return Object.keys(items).map(key => 
                <Table.Row>
                <Table.Cell>
                    {key}
                </Table.Cell>
                <Table.Cell>
                    {items[key]}
                </Table.Cell>
                </Table.Row>
        );
    }

    render() {
        const summary = getProjectHours(this.props.timesheets);
        console.log(`Summary: ${JSON.stringify(summary)}`);
        const total = getTotalHours(this.props.timesheets);

        return (
            <Segment>
                <Header as='h3'>My Timesheets for Aug 2020</Header>
                <Statistic.Group>
                    <Statistic>
                        <Statistic.Value>{total.total}</Statistic.Value>
                        <Statistic.Label>Hours tracked</Statistic.Label>
                    </Statistic>
                    <Statistic>
                        <Statistic.Value>{total.admin}</Statistic.Value>
                        <Statistic.Label>Admin Hours</Statistic.Label>
                    </Statistic>
                </Statistic.Group>
                <Table celled>
                    <Table.Header>
                        <Table.HeaderCell>Day</Table.HeaderCell>
                        <Table.HeaderCell>Hours</Table.HeaderCell>
                    </Table.Header>
                    <Table.Body>
                        {this.timesheetItems(summary)}
                    </Table.Body>
                </Table>
            </Segment>
        );
    }
}

class TimeSheetSummary extends React.Component {

    getFilterDate(bound) {
        const today = new Date();
        const currentMonth = today.getMonth()+1;
        const maxDaysInMonth = new Date(today.getFullYear(), currentMonth, 0).getDate();

        if(bound === 'lower') {
            return today.getFullYear() + "-" + today.toISOString().substr(5,2) + "-01";
        } else { //assume upper
            return today.getFullYear() + "-" + today.toISOString().substr(5,2) + "-" + maxDaysInMonth;
        }
    }

    render(){
        return (
            // <Connect query={graphqlOperation(listTimeEntriesQueries, {filter: {date: {gt:"2020-07-01",lt:"2020-09-01"}}})}
            <Connect query={graphqlOperation(listTimeEntriesQueries, {filter: {date: {gt: this.getFilterDate('lower'),lt: this.getFilterDate('upper')}}})}
                    // subscription={graphqlOperation(onCreateProject)} 
                    // onSubscriptionMsg={this.onNewProject}>
                    >    
                {({ data, loading, errors }) => {
                    // if (loading) { return <div>Loading...</div>; }
                    if (loading) { return <Loader />}
                    if (errors.length > 0) { return <div>{JSON.stringify(errors)}</div>; }
                    if (!data.listTimeEntrys) return;
                    
                    return <TimeSheetList timesheets={data.listTimeEntrys.items} />;
                }}
            </Connect>
        );
    }
}

export default TimeSheetSummary;
  