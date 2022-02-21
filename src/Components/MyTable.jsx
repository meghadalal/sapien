import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import MoreVertIcon from '@mui/icons-material/MoreVert';                        

export default class MyTable extends Component {
    render() {
        return (
            <div className='table'>
                <Table >
                    <thead>
                        <tr>
                        <th>Lead Date</th>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Email</th>
                        <th>Source</th>
                        <th>Last updated</th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>May 26, 2019
                            8:00 AM</td>
                        <td>Shivam Balwani</td>
                        <td>+91987654321</td>
                        <td>dummy@gmail.com</td>
                        <td>Website</td>
                        <td>25 June 2021</td>
                        <td>New</td>
                        <td> <MoreVertIcon/> </td>
                        </tr>

                        <tr>
                        <td>May 26, 2019
                            8:00 AM</td>
                        <td>Michael Wong</td>
                        <td>+91987654321</td>
                        <td>dummy@gmail.com</td>
                        <td>Application</td>
                        <td>25 June 2021</td>
                        <td>New</td>
                        <td> <MoreVertIcon/> </td>
                        </tr>

                        <tr>
                        <td>May 26, 2019
                            8:00 AM</td>
                        <td>Kevin Mechene</td>
                        <td>+91987654321</td>
                        <td>dummy@gmail.com</td>
                        <td>Social Media</td>
                        <td>25 June 2021</td>
                        <td>New</td>
                        <td> <MoreVertIcon/> </td>
                        </tr>

                        <tr>
                        <td>May 26, 2019
                            8:00 AM</td>
                        <td>Ritesh Kulkarni</td>
                        <td>+91987654321</td>
                        <td>dummy@gmail.com</td>
                        <td>Word of Mouth</td>
                        <td>25 June 2021</td>
                        <td>New</td>
                        <td> <MoreVertIcon/> </td>
                        </tr>

                        <tr>
                        <td>May 26, 2019
                            8:00 AM</td>
                        <td>Kevin Perker</td>
                        <td>+91987654321</td>
                        <td>dummy@gmail.com</td>
                        <td>Website</td>
                        <td>25 June 2021</td>
                        <td>New</td>
                        <td> <MoreVertIcon/> </td>
                        </tr>

                        <tr>
                        <td>May 26, 2019
                            8:00 AM</td>
                        <td>George</td>
                        <td>+91987654321</td>
                        <td>dummy@gmail.com</td>
                        <td>Application</td>
                        <td>25 June 2021</td>
                        <td>New</td>
                        <td> <MoreVertIcon/> </td>
                        </tr>
                        </tbody>
                </Table>
            </div>
        )
    }
}

