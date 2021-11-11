import { Container, Grid, List, ListItem, Typography } from '@mui/material';
import React from 'react';
import DreamBtn from '../../../styledComponent/DreamBtn';

const Footer = () => {
    const footerStyle = {
        backgroundColor: '#efefef',
        padding: "10%",
        marginTop: 200

    }
    return (
        <footer style={footerStyle}>
            <Container>
            <Typography
                variant="h4"
                sx={{
                    fontFamily: "Noto Sans",
                    color: "#1F6F8B",
                    marginBottom: 3,
                    textAlign: 'center'
                }}
            >
                Be a part of our growing real state agents
            </Typography>
                <DreamBtn>Apply for Real Estate agent</DreamBtn>
                <Grid
                style={{marginTop: 15}}
                container
                spacing={2}
                columns={{ xs: 12, sm: 12, md: 12, lg:12 }}
            >
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    lg={3}
                >
                    <List>
                        <ListItem 
                            style={{
                                color:"#1F6F8B",
                                fontWeight: "bold"
                            }}
                        >
                            CONTACT
                        </ListItem>
                        <ListItem>
                        43 Raymouth Rd. Baltemoer, London 3910
                        </ListItem>
                        <ListItem>
                        +1(123)-456-7890
                        </ListItem>
                        <ListItem>
                        +1(123)-456-7890
                        </ListItem>
                        <ListItem>
                        info@mydomain.com
                        </ListItem>
                    </List>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    lg={3}
                    >
                        <List>
                            <ListItem 
                                style={{
                                    color:"#1F6F8B",
                                    fontWeight: "bold"
                                }}
                            >
                            SOURCES
                            </ListItem>
                            <ListItem>
                            About us
                            </ListItem>
                            <ListItem>
                            Services
                            </ListItem>
                            <ListItem>
                            Vision
                            </ListItem>
                            <ListItem>
                            Mission
                            </ListItem>
                            <ListItem>
                            Terms
                            </ListItem>
                            <ListItem>
                            Privacy
                            </ListItem>
                        </List>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    lg={3}
                    >
                    <List>
                        <ListItem>
                        </ListItem>
                        <ListItem>
                        Partners
                        </ListItem>
                        <ListItem>
                        Business
                        </ListItem>
                        <ListItem>
                        Careers
                        </ListItem>
                        <ListItem>
                        Blog
                        </ListItem>
                        <ListItem>
                        FAQ
                        </ListItem>
                        <ListItem>
                        Creative
                        </ListItem>
                    </List>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={3}
                    lg={3}
                    >
                    <List>
                        <ListItem 
                            style={{
                                color:"#1F6F8B",
                                fontWeight: "bold"
                            }}
                        >
                            LINKS
                        </ListItem>
                        <ListItem>
                        Our Vision
                        </ListItem>
                        <ListItem>
                        About us
                        </ListItem>
                        <ListItem>
                        Contact us
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
            </Container>
        </footer>
    );
};

export default Footer;