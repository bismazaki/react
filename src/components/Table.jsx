import React from "react";
import { TextField, InputAdornment, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Avatar, Paper, Box, } from "@mui/material";
import SearchSharp from "@mui/icons-material/SearchSharp";
import { Add, ArrowDropDown, CheckBoxOutlineBlank, DeleteOutline, Download, EditOutlined, VisibilityOutlined } from "@mui/icons-material";

export default function SearchBox() {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    height: "100px",
                    justifyContent: "space-between", // Align children to the left and right
                    alignItems: "center", // Align vertically
                    padding: "10px",
                }}
            >
                {/* Left section */}
                <div>
                    <TextField
                        label="Search Records"
                        type="text"
                        color="primary"
                        placeholder="Search Records"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchSharp />
                                </InputAdornment>
                            ),
                        }}
                    />
                </div>

                {/* Right section */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: `250px` }}>
                    <TextField
                        label="Sort by (UserName)"
                        type="text"
                        color="primary"
                        placeholder="Sort by (UserName)"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <ArrowDropDown />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button
                        sx={{ mx: 2, fontSize: `16px` }}
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="medium"
                        startIcon={<Add />}
                    >
                        Add Customer
                    </Button>
                    <Download sx={{ fontSize: "40px", color: "gray" }} />
                </div>
            </div>
            <div >
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow style={{ backgroundColor: `lightgrey` }}>
                                <TableCell align="center" style={{ fontWeight: "bold" }}>
                                    <CheckBoxOutlineBlank />
                                </TableCell>
                                <TableCell align="center" style={{ fontWeight: "bold" }}>
                                    #ID
                                </TableCell>
                                <TableCell align="center" style={{ fontWeight: "bold" }}>
                                    UserName
                                </TableCell>
                                <TableCell align="center" style={{ fontWeight: "bold" }}>
                                    Contact
                                </TableCell>
                                <TableCell align="center" style={{ fontWeight: "bold" }}>
                                    Age
                                </TableCell>
                                <TableCell align="center" style={{ fontWeight: "bold" }}>
                                    Country
                                </TableCell>
                                <TableCell align="center" style={{ fontWeight: "bold" }}>
                                    Status
                                </TableCell>
                                <TableCell align="center" style={{ fontWeight: "bold" }}>
                                    Action
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell align="center"><CheckBoxOutlineBlank /></TableCell>
                                <TableCell align="center">101</TableCell>
                                <TableCell align="left"><Box display="flex" alignItems="center" gap="10px">
                                    <Avatar sx={{ width: 56, height: 56 }} src="https://static.vecteezy.com/system/resources/previews/004/899/833/non_2x/beautiful-girl-with-blue-hair-avatar-of-woman-for-social-network-vector.jpg" />

                                    <Box>
                                        <span style={{ fontWeight: "bold" }}>Bisma Zaki</span>
                                        <br />
                                        <span style={{ color: "gray" }}>bisma@gmail.com</span>
                                    </Box>
                                </Box></TableCell>
                                <TableCell align="center">0321-89765</TableCell>
                                <TableCell align="center">10</TableCell>
                                <TableCell align="center">Saudia</TableCell>
                                <TableCell align="center">
                                    <Button variant="outlined" color="success">Verified</Button>
                                </TableCell>
                                <TableCell align="left">
                                    <span> <VisibilityOutlined /> <EditOutlined /> <DeleteOutline /> </span>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center"><CheckBoxOutlineBlank /></TableCell>
                                <TableCell align="center">102</TableCell>
                                <TableCell align="left"><Box display="flex" alignItems="center" gap="10px">
                                    <Avatar sx={{ width: 56, height: 56 }} src="https://static.vecteezy.com/system/resources/previews/004/899/833/non_2x/beautiful-girl-with-blue-hair-avatar-of-woman-for-social-network-vector.jpg" />

                                    <Box>
                                        <span style={{ fontWeight: "bold" }}>Kanza Khan</span>
                                        <br />
                                        <span style={{ color: "gray" }}>Kanza@gmail.com</span>
                                    </Box>
                                </Box></TableCell>
                                <TableCell align="center">0321-897678</TableCell>
                                <TableCell align="center">20</TableCell>
                                <TableCell align="center">Dubai</TableCell>
                                <TableCell align="center">
                                    <Button variant="outlined" color="error">Rejected</Button>
                                </TableCell>
                                <TableCell align="left">
                                    <span> <VisibilityOutlined /> <EditOutlined /> <DeleteOutline /> </span>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center"><CheckBoxOutlineBlank /></TableCell>
                                <TableCell align="center">103</TableCell>
                                <TableCell align="left"><Box display="flex" alignItems="center" gap="10px">
                                    <Avatar sx={{ width: 56, height: 56 }} src="https://png.pngtree.com/png-clipart/20231015/original/pngtree-man-avatar-clipart-illustration-png-image_13302502.png" />

                                    <Box>
                                        <span style={{ fontWeight: "bold" }}>Mohammad Talha</span>
                                        <br />
                                        <span style={{ color: "gray" }}>talha@gmail.com</span>
                                    </Box>
                                </Box></TableCell>
                                <TableCell align="center">0321-812345</TableCell>
                                <TableCell align="center">15</TableCell>
                                <TableCell align="center">America</TableCell>
                                <TableCell align="center">
                                    <Button variant="outlined" color="success">Verified</Button>
                                </TableCell>
                                <TableCell align="left">
                                    <span> <VisibilityOutlined /> <EditOutlined /> <DeleteOutline /> </span>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center"><CheckBoxOutlineBlank /></TableCell>
                                <TableCell align="center">104</TableCell>
                                <TableCell align="left"><Box display="flex" alignItems="center" gap="10px">
                                    <Avatar sx={{ width: 56, height: 56 }} src="https://png.pngtree.com/png-clipart/20231015/original/pngtree-man-avatar-clipart-illustration-png-image_13302502.png" />

                                    <Box>
                                        <span style={{ fontWeight: "bold" }}>Mohammad Huzaifa</span>
                                        <br />
                                        <span style={{ color: "gray" }}>huzaifa@gmail.com</span>
                                    </Box>
                                </Box></TableCell>
                                <TableCell align="center">0321-8213455</TableCell>
                                <TableCell align="center">18</TableCell>
                                <TableCell align="center">Canada</TableCell>
                                <TableCell align="center">
                                    <Button variant="outlined" color="success">Verified</Button>
                                </TableCell>
                                <TableCell align="left">
                                    <span> <VisibilityOutlined /> <EditOutlined /> <DeleteOutline /> </span>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center"><CheckBoxOutlineBlank /></TableCell>
                                <TableCell align="center">105</TableCell>
                                <TableCell align="left"><Box display="flex" alignItems="center" gap="10px">
                                    <Avatar sx={{ width: 56, height: 56 }} src="https://static.vecteezy.com/system/resources/previews/004/899/833/non_2x/beautiful-girl-with-blue-hair-avatar-of-woman-for-social-network-vector.jpg" />

                                    <Box>
                                        <span style={{ fontWeight: "bold" }}>Alisha Khan</span>
                                        <br />
                                        <span style={{ color: "gray" }}>alisha@gmail.com</span>
                                    </Box>
                                </Box></TableCell>
                                <TableCell align="center">0311-2376521</TableCell>
                                <TableCell align="center">20</TableCell>
                                <TableCell align="center">Pakistan</TableCell>
                                <TableCell align="center">
                                    <Button variant="outlined" color="error">Rejected</Button>
                                </TableCell>
                                <TableCell align="left">
                                    <span> <VisibilityOutlined /> <EditOutlined /> <DeleteOutline /> </span>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center"><CheckBoxOutlineBlank /></TableCell>
                                <TableCell align="center">106</TableCell>
                                <TableCell align="left"><Box display="flex" alignItems="center" gap="10px">
                                    <Avatar sx={{ width: 56, height: 56 }} src="https://static.vecteezy.com/system/resources/previews/004/899/833/non_2x/beautiful-girl-with-blue-hair-avatar-of-woman-for-social-network-vector.jpg" />

                                    <Box>
                                        <span style={{ fontWeight: "bold" }}>Aqsa Khan</span>
                                        <br />
                                        <span style={{ color: "gray" }}>aqsa@gmail.com</span>
                                    </Box>
                                </Box></TableCell>
                                <TableCell align="center">0311-2376521</TableCell>
                                <TableCell align="center">10</TableCell>
                                <TableCell align="center">Pakistan</TableCell>
                                <TableCell align="center">
                                    <Button variant="outlined" color="info">Pending</Button>
                                </TableCell>
                                <TableCell align="left">
                                    <span> <VisibilityOutlined /> <EditOutlined /> <DeleteOutline /> </span>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="center"><CheckBoxOutlineBlank /></TableCell>
                                <TableCell align="center">107</TableCell>
                                <TableCell align="left"><Box display="flex" alignItems="center" gap="10px">
                                    <Avatar sx={{ width: 56, height: 56 }} src="https://static.vecteezy.com/system/resources/previews/004/899/833/non_2x/beautiful-girl-with-blue-hair-avatar-of-woman-for-social-network-vector.jpg" />

                                    <Box>
                                        <span style={{ fontWeight: "bold" }}>Ruban</span>
                                        <br />
                                        <span style={{ color: "gray" }}>Ruban@gmail.com</span>
                                    </Box>
                                </Box></TableCell>
                                <TableCell align="center">0311-2376521</TableCell>
                                <TableCell align="center">16</TableCell>
                                <TableCell align="center">Pakistan</TableCell>
                                <TableCell align="center">
                                    <Button variant="outlined" color="info">Pending</Button>
                                </TableCell>
                                <TableCell align="left">
                                    <span> <VisibilityOutlined /> <EditOutlined /> <DeleteOutline /> </span>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    );
}
