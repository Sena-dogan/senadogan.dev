import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link, Tooltip, Zoom } from "@material-ui/core";
import Resume from "../../settings/resume.json";

const useStyles = makeStyles((theme) => ({
    footerText: {
        position: "absolute",
        bottom: theme.spacing(6),
        left: theme.spacing(6),
        "&:hover": {
            color: theme.palette.primary.main,
        },
        transition: "all 0.5s ease",
    },
}));

export const FooterText = () => {
    const classes = useStyles();

    return (
        <Tooltip
            title={"GitHub repo"}
            placement="top"
            TransitionComponent={Zoom}
        >
            <Link
                color="inherit"
                underline="none"
                href="https://github.com/JoHoop/personal-website-react"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.footerText}
            >
                <Typography variant="body1">
                    <i className="fas fa-code fa-sm" /> at{" "}
                    <i className="fas fa-moon fa-sm" /> by {Resume.basics.name}
                </Typography>
            </Link>
        </Tooltip>
    );
};
