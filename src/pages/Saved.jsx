import * as React from "react";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function Row({ data, setData, el }) {
  const [open, setOpen] = React.useState(false);

  const handleDelete = (id) => {
    const filter = data.filter((el) => el.id !== id);
    localStorage.setItem("area-calci-history", JSON.stringify(filter));
    setData(filter);
  };

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{el.date}</TableCell>
        <TableCell>{el.name}</TableCell>
        <TableCell align="right">{el.lengthInches}</TableCell>
        <TableCell align="right">{el.widthInches}</TableCell>
        <TableCell align="right">{el.lengthFt}</TableCell>
        <TableCell align="right">{el.widthFt}</TableCell>
        <TableCell align="right">{el.totalSqFt}</TableCell>
        <TableCell align="right">{el.marlas}</TableCell>
        <TableCell align="right">{el.kanals}</TableCell>
        <TableCell align="center">
          <IconButton onClick={() => handleDelete(el.id)} sx={{ color: "red" }}>
            <DeleteForeverIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0, verticalAlign: "top" }}
          colSpan={5}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                textAlign="center"
                my={2}
                sx={{
                  textDecoration: "underline",
                }}
              >
                Length
              </Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <b>Desc</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>Feet</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>Inches</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {el.length.map((el, idx) => (
                    <TableRow key={idx}>
                      <TableCell component="th" scope="row">
                        {`Length ${idx + 1}`}
                      </TableCell>
                      <TableCell align="right">{el.feet}</TableCell>
                      <TableCell align="right">{el.inches}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>

        {/* center gap */}
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0, verticalAlign: "top" }}
        ></TableCell>

        {/* WIDTH */}
        <TableCell
          style={{ paddingBottom: 0, paddingTop: 0, verticalAlign: "top" }}
          colSpan={5}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                variant="h5"
                gutterBottom
                component="div"
                textAlign="center"
                my={2}
                sx={{
                  textDecoration: "underline",
                }}
              >
                Width
              </Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <b>Desc</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>Feet</b>
                    </TableCell>
                    <TableCell align="right">
                      <b>Inches</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {el.width.map((el, idx) => (
                    <TableRow key={idx}>
                      <TableCell component="th" scope="row">
                        {`Width ${idx + 1}`}
                      </TableCell>
                      <TableCell align="right">{el.feet}</TableCell>
                      <TableCell align="right">{el.inches}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function Saved() {
  const history = JSON.parse(localStorage.getItem("area-calci-history")) || [];

  const [data, setData] = React.useState(history);

  return (
    <>
      {history.length === 0 ? (
        <Box mt="200px">
          <Typography fontSize="24px" textAlign="center">
            No saved Items found on this device
          </Typography>
        </Box>
      ) : (
        <TableContainer
          sx={{ maxHeight: "calc(100vh - 60px)" }}
          component={Paper}
        >
          <Table stickyHeader aria-label="collapsible table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "red" }}>
                <TableCell />
                <TableCell>
                  <b>Date</b>
                </TableCell>
                <TableCell>
                  <b>Name</b>
                </TableCell>
                <TableCell align="right">
                  <b>Length&nbsp;(in)</b>
                </TableCell>
                <TableCell align="right">
                  <b>Width&nbsp;(in)</b>
                </TableCell>
                <TableCell align="right">
                  <b>Length&nbsp;(ft)</b>
                </TableCell>
                <TableCell align="right">
                  <b>Width&nbsp;(ft)</b>
                </TableCell>
                <TableCell align="right">
                  <b>Square Feet</b>
                </TableCell>
                <TableCell align="right">
                  <b>Marlas</b>
                </TableCell>
                <TableCell align="right">
                  <b>Kanals</b>
                </TableCell>
                <TableCell align="center">
                  <b>Action</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((el) => (
                <Row key={el.id} data={data} setData={setData} el={el} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}
