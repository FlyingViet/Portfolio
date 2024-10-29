import React from 'react';
import { List, ListItem, Divider, ListItemText, ListItemAvatar, Typography, makeStyles, Avatar } from '@material-ui/core';
import { amazon, quad, vcpi } from '../Images/index.js';
import '../css/About.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Experience() {
    const jobs = [
        {
            name: "Amazon", 
            role: "Software Development Engineer",
            avatar: amazon,
            site: "https://amazon.com",
            description:           
            "∙ Created security controls for Alexa Voice Data built on AWS services such as API Gateway, Lambda, EC2, and Fargate \n" +
            "∙ Created audit controls for Alexa Voice Data allowing for automated testing for reliability, accuracy, and privacy which reduced manual auditing by over 25%. \n" +
            "∙ Migrated internal service onto AWS cloud services reducing tickets by 75%. \n" +
            "∙ Led cross-team projects and improved documentation to reduce operational load by over 50%. \n" + 
            "∙ Managed team resources to solve problems quickly and efficiently by pulling in the necessary service owners."
        },
        {
            name: "Amazon", 
            role: "Software Development Engineer Intern",
            avatar: amazon,
            site: "https://amazon.com",
            description:           
            "∙ Designed and created internal facing APIs on AWS that dynamically created documentation from internal policies. \n" +
            "∙ Implemented a dashboard with React which utilized the API for internal customers to increase workflow productivity. \n" +
            "∙ Eliminated manual developer work to update documentation, inform policy owners, and to monitor releases by 100%. \n" +
            "∙ Updated and maintained documentation leading to reduction of onboarding question tickets by 50%. \n" + 
            "∙ Held knowledge transfer sessions to assist teammates onboard onto the platform and teach the concepts of React and TypeScript."
        },
        {
            name: "Quad Graphics",
            role: "Software Developer Intern",
            avatar: quad,
            site: "https://www.quad.com/",
            description: 
            "∙ Followed SOLID and CRUD design patterns to update and integrate legacy programs into an internal web application for 50 internal users to design workflows. \n" +
            "∙ Streamlined user workflows by an hour effectively doubling their efficiency during client onboarding. \n" +
            "∙ Combined C#, SQL , React Redux, and TypeScript to create a dynamic UI for clients to customize their workflows using the ASP.NET stack and React Redux. \n" +
            "∙ Used reflection and dependency injection to reduce maintenance leading to a reduction of technical debt. \n" +
            "∙ Implemented changes to the database and UI which increased user productivity and responsiveness of application."        },
        {
            name: "vcpi",
            role: "Customer Service Representative",
            avatar: vcpi,
            site: "https://www.vcpi.com/",
            description: 
            "∙ Assisted over 40 users daily reducing SLA times and resolving the most calls.\n" +
            "∙ Provided quick triage of network equipment reducing the time of network outages by half.\n" +
            "∙ Managed and provisioned user accounts allowing users quick access worldwide.\n" +
            "∙ Reduced user errors by providing them guidance leading to less issues coming from the same facilities."
        }
    ];

    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
          backgroundColor: theme.palette.background.paper,
          display: 'flex'
        },
        inline: {
          display: 'inline',
        },
      }));

    const classes = useStyles();

    return(
        <div>
            <div>
                <h3>My Amazon Favorites</h3>
                <center>
                    <div>
                        <h3>
                            Jisulife Portable Fan
                        </h3>
                        <a href='https://amzn.to/4hpuqYo'>https://amzn.to/4hpuqYo</a>
                    </div>
                </center>
            </div>
            <div className="work">
                <h3>My Work Experience</h3>
                <Divider variant="inset" component="li"/>
                {/* <List className={classes.root}>
                    {jobs.map((job, index) => {
                        return(
                            <div key={index} className="wrap">
                                <ListItem alignItems="flex-start" key={index}>
                                    <ListItemAvatar>
                                        <a href={job.site} target="_blank" rel="noreferrer noopener">
                                            <Avatar alt={job.name} src={job.avatar} />
                                        </a>
                                    </ListItemAvatar>
                                    <ListItemText 
                                        primary={job.name}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    color="textPrimary"
                                                    className={classes.inline}
                                                >
                                                    {job.role}
                                                </Typography>
                                                <br/>
                                                {job.description}
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </div>
                        )
                    })}
                </List> */}
                <center className='carousel'>
                    <Carousel showArrows={true} width="40%" swipeable={true} useKeyboardArrows={true} autoPlay={true} stopOnHover={true} infiniteLoop={true} showStatus={false}>
                    {jobs.map((job, index) => {
                            return(
                                <div key={index} className="wrap">
                                    <ListItem alignItems="flex-start" key={index}>
                                        <ListItemAvatar>
                                            <a href={job.site} target="_blank" rel="noreferrer noopener">
                                                <Avatar alt={job.name} src={job.avatar} />
                                            </a>
                                        </ListItemAvatar>
                                        <ListItemText 
                                            primary={job.name}
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        component="span"
                                                        variant="body2"
                                                        color="textPrimary"
                                                        className={classes.inline}
                                                    >
                                                        {job.role}
                                                    </Typography>
                                                    <br/>
                                                    {job.description}
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                </div>
                            )
                        })}
                    </Carousel>
                </center>
            </div>
        </div>
    )
}