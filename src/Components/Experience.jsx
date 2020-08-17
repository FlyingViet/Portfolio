import React from 'react';
import { List, ListItem, Divider, ListItemText, ListItemAvatar, Typography, makeStyles, Avatar } from '@material-ui/core';
import { amazon, quad, vcpi } from '../Images/index.js';
import '../css/About.css';

export default function Experience() {
    const jobs = [
        {
            name: "Amazon", 
            role: "Software Engineer Intern",
            avatar: amazon,
            site: "https://amazon.com",
            description:           
            "∙ Designed and created internal facing APIs on AWS that dynamically created documentation from internal policies. \n" +
            "∙ Implemented a dashboard with React which utilized the API for internal customers to increase workflow productivity. \n" +
            "∙ Eliminated errors in wiki, hours of manual entry after changes, and hours of explaining policies to stakeholders. \n" +
            "∙ Created documentation for onboarding process to another internal team for hosting API and web application."
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
          maxWidth: '75ch',
          backgroundColor: theme.palette.background.paper,
        },
        inline: {
          display: 'inline',
        },
      }));

    const classes = useStyles();

    return(
        <div>
            <div className="work">
                <h3>My Work Experience</h3>
                <Divider variant="inset" component="li"/>
                <List className={classes.root}>
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
                                {index === jobs.length-1 ? null : <Divider variant="inset" component="li" />}
                            </div>
                        )
                    })}

                </List>
            </div>
        </div>
    )
}