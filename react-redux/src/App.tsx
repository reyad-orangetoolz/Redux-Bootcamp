import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Typography, Button } from '@mui/material';

function App() {
    const [count, setCount] = useState(0);

    const handleCountInc = () => {
        setCount(count => count + 1);
    }
    const handleCountDec = () => {
        setCount(count => count - 1);
    }

    return (
        <>
            <Box
                sx={{
                    textAlign: "center",
                }}
            >
                <Typography variant="h5" color="initial">Redux Practice</Typography>
                <Box>
                    <Typography variant="h6" color="initial">Count: {count}</Typography>
                    <Button variant="outlined" color="primary" onClick={handleCountInc} sx={{ margin: "10px" }}>
                        increatment +
                    </Button>
                    <Button variant="outlined" color="primary" onClick={handleCountDec} sx={{ margin: "10px" }}>
                        decreatment -
                    </Button>
                </Box>
            </Box>
        </>
    );
}

export default App;
