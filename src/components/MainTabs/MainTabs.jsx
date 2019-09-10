import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AdvertIcon from "@material-ui/icons/ViewDay";
import MessageIcon from "@material-ui/icons/Forum";
import PeopleIcon from "@material-ui/icons/PersonPin";
import { CssBox } from "./MainTabsStyle";
import { history } from "../../_helpers/history";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import paths from "../../_helpers/paths";

function MainTabs({ match, user }) {
  return (
    <>
      <CssBox className="content-width">
        <Tabs
          value={match.path}
          onChange={(ev, path) => history.push(path)}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
          style={{ minHeight: 40 }}
        >
          <Tab
            component={Link}
            value={paths.advertsPage}
            to={paths.advertsPage}
            icon={<AdvertIcon />}
            style={{ minHeight: 40 }}
            disableFocusRipple
          />
          <Tab
            component={Link}
            value={paths.peoplesPage}
            to={paths.peoplesPage}
            icon={<PeopleIcon />}
            style={{ minHeight: 40 }}
            disableFocusRipple
          />
          <Tab
            component={Link}
            value={paths.messagesPage}
            to={paths.messagesPage}
            icon={<MessageIcon />}
            disabled={!user}
            style={{ minHeight: 40 }}
            disableFocusRipple
          />
        </Tabs>
      </CssBox>
    </>
  );
}

export default withRouter(MainTabs);
