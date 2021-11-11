import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import banner1 from '../../../media/banner1.png'

const Advertise = () => {
    return (
        <Container
            sx={{
                marginBottom: 100,
                height: "50vh"
            }}
            
        >
            <Typography
            variant="h4"
            sx={{
                fontWeight: "bold",
                fontFamily: "Noto Sans",
                color: "#1F6F8B",
                textAlign: "center",
                marginBottom: 3
                }}
            >
                WE BRING DREAM HOMES TO REALITY
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    fontFamily: "Noto Sans",
                    color: "#1F6F8B",
                    textAlign: "center",
                    marginBottom: 5
                    }}
            >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim pariatur similique <br/> debitis vel nisi qui reprehenderit totam? Quod maiores.
            </Typography>

            <Grid
                container
                spacing={{ xs: 2, md: 15, lg: 15 }}
                columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
                sx={{
                    alignItems: 'center'
                }}
            >
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={7}
                    lg={7}
                >
                    <img
                        src={banner1}
                        alt="banner1"
                        width="100%"
                    ></img>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={12}
                    md={5}
                    lg={5}
                    sx={{
                        justifyContent: 'space-evenly'
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems:"center"
                        }}
                    >
                        <Box
                             sx={{
                                marginBottom: 3,
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: 30,
                                    border: '1px solid transparent',
                                    borderRadius: "50%",
                                    padding: '20px 25px',
                                    marginRight: 3,
                                    backgroundColor: '#f2eded'
                                }}
                            >
                            <i className="fas fa-home"></i>
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                marginBottom: 3,
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontFamily: "Noto Sans",
                                    textAlign: "start",
                                    fontWeight: 'bold',
                                    
                                    }}
                            >
                                QUALITY PROPERTIES
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontFamily: "Noto Sans",
                                    textAlign: "start",
                                    color: 'gray'
                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems:"center"
                        }}
                    >
                        <Box
                             sx={{
                                marginBottom: 3,
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: 30,
                                    border: '1px solid transparent',
                                    borderRadius: "50%",
                                    padding: '20px 25px',
                                    marginRight: 3,
                                    backgroundColor: '#f2eded'
                                }}
                            >
                            <i className="fas fa-user"></i>
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontFamily: "Noto Sans",
                                    textAlign: "start",
                                    fontWeight: 'bold',
                                    }}
                            >
                                TOP RATED AGENTS
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontFamily: "Noto Sans",
                                    textAlign: "start",
                                    color: 'gray'
                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems:"center"
                        }}
                    >
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: 30,
                                    border: '1px solid transparent',
                                    borderRadius: "50%",
                                    padding: '20px 25px',
                                    marginRight: 3,
                                    marginBottom: 3,
                                    backgroundColor: '#f2eded'
                                }}
                            >
                            <i className="fas fa-shield-alt"></i>
                            </Typography>
                        </Box>
                        <Box>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontFamily: "Noto Sans",
                                    textAlign: "start",
                                    fontWeight: 'bold',
                                    }}
                            >
                                EASY AND SAFE
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontFamily: "Noto Sans",
                                    textAlign: "start",
                                    color: 'gray'
                                }}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>


            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    flexWrap: "wrap"
            }}
            >
                <Box
                    sx={{
                        marginTop: 5
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: "bold",
                            fontFamily: "Noto Sans",
                            color: "#1F6F8B",
                            textAlign: "start",
                        }}
                    >
                        2,917
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            fontFamily: "Noto Sans",
                            textAlign: "start",
                            color: 'gray'
                        }}
                    >
                        # of Buy Properties
                    </Typography>
                </Box>
                <Box
                    sx={{
                        marginTop: 5
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: "bold",
                            fontFamily: "Noto Sans",
                            color: "#1F6F8B",
                            textAlign: "start",
                        }}
                    >
                        3,918
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            fontFamily: "Noto Sans",
                            textAlign: "start",
                            color: 'gray'
                        }}
                    >
                        # of Sell Properties
                    </Typography>
                </Box>
                <Box
                    sx={{
                        marginTop: 5
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: "bold",
                            fontFamily: "Noto Sans",
                            color: "#1F6F8B",
                            textAlign: "start",
                        }}
                    >
                        38,928
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            fontFamily: "Noto Sans",
                            textAlign: "start",
                            color: 'gray'
                        }}
                    >
                        # of All Properties
                    </Typography>
                </Box>
                <Box
                    sx={{
                        marginTop: 5
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: "bold",
                            fontFamily: "Noto Sans",
                            color: "#1F6F8B",
                            textAlign: "start",
                        }}
                    >
                        1,291
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            fontFamily: "Noto Sans",
                            textAlign: "start",
                            color: 'gray'
                        }}
                    >
                        # of Agents
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default Advertise;