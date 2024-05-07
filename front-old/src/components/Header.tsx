import { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

// Define custom styles for the button
const PrimaryButton = styled(Button)({
    background: '#007bff',
    color: '#fff',
    '&:hover': {
        background: '#0056b3',
    },
});

const Header = FC = () => {
    return (
        <AppBar position="static" className="header-container">
            <Toolbar className="page__horizontal-space header">
                <div className="tabs-container">
                    <div className="tabs">
                        <Button className="tab active">
                            <Typography variant="body1" className="date">
                                Monday, August 23
                            </Typography>
                        </Button>
                        <Button className="tab">
                            <Typography variant="body1" className="date">
                                Wednesday, August 23
                            </Typography>
                        </Button>
                        <Button className="tab">
                            <Typography variant="body1" className="date">
                                Thursday, August 23
                            </Typography>
                        </Button>
                    </div>
                </div>
                <PrimaryButton
                    variant="contained"
                    className="btn-buy"
                    onClick={() => alert('Reschedule')}>
                    Confirm
                </PrimaryButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
