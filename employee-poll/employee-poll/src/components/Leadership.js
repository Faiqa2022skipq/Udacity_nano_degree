import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { connect } from "react-redux";
const Leadership = ({ users, sorted }) => {

    return (
        <>
            <h1>Leaderboard</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell  data-testid = "user">Name</TableCell>
                            <TableCell align="right"  data-testid = "answered"> Answered</TableCell>
                            <TableCell align="right" data-testid = "created">Created</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {sorted.map(id => (
                            <TableRow
                                key={id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <img src={users[id].avatarURL} alt={users[id].name} data-testid="avatar" className="rounded-full" height={40} width={40}
                                        style={{
                                            width: '8%',
                                            height: '8%',
                                            margin: 7,
                                            borderRadius: 20

                                        }}
                                    />

{users[id].name}
                                </TableCell>

                                <TableCell align="right" >{Object.keys(users[id].answers).length}</TableCell>
                                <TableCell align="right" >{Object.keys(users[id].questions).length} </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

const mapStateToProps = ({users}) => (
    {
        sorted: Object.keys(users).sort(
            (a,b) => {
                const sumB = Object.keys(users[b].answers).length + Object.keys(users[b].questions).length
                const sumA = Object.keys(users[a].answers).length + Object.keys(users[a].questions).length
                return sumB - sumA
            }
        ),
        users: users,
       
    }
)
export default connect(mapStateToProps)(Leadership);