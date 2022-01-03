import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { LocalGroceryStore } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Link } from "react-router-dom";

const pages = ['Products', 'Shopping cart'];

type LinkProps = {
    to: string;
};
const LinkBehavior = React.forwardRef<HTMLAnchorElement, LinkProps>(
    (props, ref) => <Link ref={ref} {...props} role={undefined} />
);

const ShoppingCartAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

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
                        <Button
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            component={LinkBehavior}
                            to="/products"
                        >
                            Shopping cart
                        </Button>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ShoppingCartAppBar;