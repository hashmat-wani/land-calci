import {
  Box,
  Button,
  IconButton,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { v4 as uuidv4 } from "uuid";
import Result from "../components/Result";

const Home = () => {
  const lengthInitVals = [{ id: uuidv4() }];
  const widthInitVals = [{ id: uuidv4() }];
  const [length, setLength] = useState(lengthInitVals);
  const [width, setWidth] = useState(widthInitVals);

  const [res, setRes] = useState(null);

  const handleAddLength = () => {
    setLength((prev) => [...prev, { id: uuidv4() }]);
  };

  const handleAddWidth = () => {
    setWidth((prev) => [...prev, { id: uuidv4() }]);
  };

  const handleRemoveLength = (id) => {
    setLength(length.filter((el) => el.id !== id));
  };

  const handleRemoveWidth = (id) => {
    setWidth(width.filter((el) => el.id !== id));
  };

  const handleChangeLength = (e, id) => {
    const { name, value } = e.target;
    setLength(
      length.map((el) => (el.id === id ? { ...el, [name]: value } : el))
    );
  };

  const handleChangeWidth = (e, id) => {
    const { name, value } = e.target;
    setWidth(width.map((el) => (el.id === id ? { ...el, [name]: value } : el)));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const lengthInches =
      length.reduce(
        (ac, el) => ac + 12 * Number(el.feet) + Number(el.inches),
        0
      ) / length.length;

    const widthInches =
      width.reduce(
        (ac, el) => ac + 12 * Number(el.feet) + Number(el.inches),
        0
      ) / width.length;

    const lengthFt = lengthInches / 12;
    const widthFt = widthInches / 12;

    const totalSqFt = lengthFt * widthFt;

    const marlas = totalSqFt / 272.251;

    const kanals = marlas / 20;

    setRes({
      length,
      width,
      lengthInches: lengthInches.toFixed(2),
      widthInches: widthInches.toFixed(2),
      lengthFt: lengthFt.toFixed(2),
      widthFt: widthFt.toFixed(2),
      totalSqFt: totalSqFt.toFixed(3),
      marlas: marlas.toFixed(3),
      kanals: kanals.toFixed(3),
    });
  };
  return (
    <Stack
      component="form"
      onSubmit={handleSubmit}
      spacing={2}
      minWidth="300px"
      maxWidth="500px"
      margin="auto"
      p="20px 15px"
    >
      {/* -------LENGTH------- */}
      <Stack spacing={2}>
        <Typography variant="h6">Length</Typography>
        {length.map((el, idx) => (
          <Row key={idx}>
            <TextField
              type="number"
              onChange={(e) => handleChangeLength(e, el.id)}
              name="feet"
              InputProps={{
                inputProps: {
                  min: 0,
                },
              }}
              fullWidth
              required
              label="Feet"
              value={el?.feet || ""}
              sx={{ mr: "10px" }}
            />
            <TextField
              type="number"
              onChange={(e) => handleChangeLength(e, el.id)}
              name="inches"
              fullWidth
              required
              InputProps={{
                inputProps: {
                  min: 0,
                  max: 11,
                },
              }}
              label="Inches"
              value={el?.inches || ""}
            />
            <Stack direction="row">
              {length.length > 1 && (
                <IconButton
                  sx={{ color: "red", m: 0 }}
                  onClick={() => handleRemoveLength(el.id)}
                >
                  <RemoveCircleIcon />
                </IconButton>
              )}

              {idx === length.length - 1 && (
                <IconButton sx={{ color: "#1976d2" }} onClick={handleAddLength}>
                  <AddCircleIcon sx={{ m: 0 }} />
                </IconButton>
              )}
            </Stack>
          </Row>
        ))}
      </Stack>

      {/* --------WIDTH------ */}

      <Stack spacing={2}>
        <Typography variant="h6">Width</Typography>
        {width.map((el, idx) => (
          <Row key={idx}>
            <TextField
              type="number"
              onChange={(e) => handleChangeWidth(e, el.id)}
              name="feet"
              fullWidth
              required
              label="Feet"
              value={el?.feet || ""}
              InputProps={{
                inputProps: {
                  min: 0,
                },
              }}
              sx={{ mr: "10px" }}
            />
            <TextField
              type="number"
              onChange={(e) => handleChangeWidth(e, el.id)}
              name="inches"
              fullWidth
              required
              label="Inches"
              value={el?.inches || ""}
              InputProps={{
                inputProps: {
                  min: 0,
                  max: 11,
                },
              }}
            />
            <Stack direction="row">
              {width.length > 1 && (
                <IconButton
                  sx={{ color: "red", m: 0 }}
                  onClick={() => handleRemoveWidth(el.id)}
                >
                  <RemoveCircleIcon />
                </IconButton>
              )}

              {idx === width.length - 1 && (
                <IconButton sx={{ color: "#1976d2" }} onClick={handleAddWidth}>
                  <AddCircleIcon sx={{ m: 0 }} />
                </IconButton>
              )}
            </Stack>
          </Row>
        ))}
      </Stack>

      <Button sx={{ p: 2 }} variant="contained" type="submit">
        Calculate
      </Button>
      {res && <Result {...res} />}
    </Stack>
  );
};

export default Home;

const Row = styled(Box)({
  display: "flex",
  alignItems: "center",
});
