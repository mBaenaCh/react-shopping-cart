import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { LocalGroceryStore } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Link } from "react-router-dom";

type LinkProps = {
    to: string;
};
const LinkBehavior = React.forwardRef<HTMLAnchorElement, LinkProps>(
    (props, ref) => <Link ref={ref} {...props} role={undefined} />
);

const ShoppingCartAppBar = () => {

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        component={LinkBehavior}
                        to="/"
                    >
                        <LocalGroceryStore />
                    </IconButton>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            component={LinkBehavior}
                            to="/products"
                        >
                            Products
                        </Button>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ShoppingCartAppBar;