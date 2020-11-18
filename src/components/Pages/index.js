import React from 'react';
import Header from '../Title';
import TableRow from '../TableRow';
import { Table } from 'reactstrap';
import API from '../../utils/API'

class Page extends React.Component {
    state = {
        users: [],
        filteredUsers: [],
        order: "descend"
    }

    handleSearchChange = event => {
        console.log(event.target.value);
    }

    handleSort = () => {

    }

    componentDidMount() {
        API.getUsers().then(result => {
            this.setState({
                users: result.data.results,
                filteredUsers: result.data.results
            });
            console.log(this.state);
        });
    }

    render() {
        return (

            <div>
                <Header />

                {/* put your search component here / pass in handlesearchchange as a prop */}
                
                <Table dark>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.filteredUsers.map(user => (
                            <TableRow 
                                firstName={user.name.first}
                                lastName={user.name.last}
                                userName={user.login.uuid}
                            />
                        ))}
                    </tbody>
                </Table>

            </div>

        )
    }
}

export default Page;