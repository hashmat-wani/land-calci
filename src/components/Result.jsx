import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
} from "@mui/material";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

export default function Result({
  length,
  width,
  lengthInches,
  widthInches,
  lengthFt,
  widthFt,
  totalSqFt,
  marlas,
  kanals,
}) {
  const [showInput, setShowInput] = React.useState(false);
  const [name, setName] = React.useState("");

  const navigate = useNavigate();

  const handleSave = () => {
    if (showInput) {
      if (!name.trim()) {
        return toast.info("Name can't be empty");
      }
      const history =
        JSON.parse(localStorage.getItem("area-calci-history")) || [];

      const today = new Date();
      const yyyy = today.getFullYear();
      let mm = today.getMonth() + 1; // Months start at 0!
      let dd = today.getDate();

      if (dd < 10) dd = "0" + dd;
      if (mm < 10) mm = "0" + mm;

      const formattedToday = dd + "-" + mm + "-" + yyyy;

      history.push({
        id: uuidv4(),
        date: formattedToday,
        length,
        width,
        name,
        lengthInches,
        widthInches,
        lengthFt,
        widthFt,
        totalSqFt,
        marlas,
        kanals,
      });

      localStorage.setItem("area-calci-history", JSON.stringify(history));
      setName("");
      navigate("/saved");
      toast.success("Saved");
    } else {
      setShowInput(true);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={showInput ? 1 : 2}>
              <b>Area</b>
            </TableCell>
            {showInput && (
              <TableCell>
                <TextField
                  onChange={(e) => setName(e.target.value)}
                  size="small"
                  fullWidth
                  label="Name"
                  value={name}
                  required
                />
              </TableCell>
            )}
            <TableCell align="right">
              <Button variant="contained" onClick={handleSave}>
                Save
              </Button>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>
              <b>Desc</b>
            </TableCell>
            <TableCell align="right">
              <b>Inches</b>
            </TableCell>
            <TableCell align="right">
              <b>Feet</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Length</TableCell>
            <TableCell align="right">{lengthInches}</TableCell>
            <TableCell align="right">{lengthFt}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Width</TableCell>
            <TableCell align="right">{widthInches}</TableCell>
            <TableCell align="right">{widthFt}</TableCell>
          </TableRow>

          <TableRow>
            <TableCell />
            <TableCell>Square Feet</TableCell>
            <TableCell align="right">
              <b>{totalSqFt}</b>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell />
            <TableCell>Marlas</TableCell>
            <TableCell align="right">
              <b>{marlas}</b>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell>Kanals</TableCell>
            <TableCell align="right">
              <b>{kanals}</b>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
