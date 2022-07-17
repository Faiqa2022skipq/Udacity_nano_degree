import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { connect } from "react-redux";
const Leadership = ({ users }) => {

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
                        {users.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <img src={row.avatarURL} data-testid="avatar" className="rounded-full" alt="user" height={40} width={40}
                                        style={{
                                            width: '8%',
                                            height: '8%',
                                            margin: 7,
                                            borderRadius: 20

                                        }}
                                    />

                                    {`${row.name}`}
                                </TableCell>

                                <TableCell align="right" >{Object.keys(row.answers).length}</TableCell>
                                <TableCell align="right" >{row.questions.length} </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
const mapStateToProps = ({ users }) => ({
    users: Object.values(users).sort((a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length),
});
export default connect(mapStateToProps)(Leadership);