import React, { useState } from "react"
import FollowGrid from './../user/FollowGrid'
import PostList from './../post/PostList'

import { 
  AppBar, 
  Tab,
  Tabs,
  Typography
} from "@material-ui/core"

const ProfileTabs = ({removePostUpdate, posts, user}) => {

  const [tab, setTab] = useState(0)

  const handleChange = (event, value) => {
    setTab(value)
  }

  return (
    <div>
      <AppBar position="static" color="default">
        <Tabs
          value={tab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Posts" />
          <Tab label="Following" />
          <Tab label="Followers" />
        </Tabs>
      </AppBar>
       {tab === 0 && (
          <TabContainer>
            <PostList 
              removeUpdate={removePostUpdate} 
              posts={posts}
            />
          </TabContainer>
        )}

       {tab === 1 && (
          <TabContainer>
            <FollowGrid people={user.following}/>
          </TabContainer>
        )}

       {tab === 2 && (
          <TabContainer>
            <FollowGrid people={user.followers}/>
          </TabContainer>
        )}
    </div>
  )
}


const TabContainer = ({children}) => {
  return (
    <Typography component="div" style={{ padding: 8 * 2 }}>
      {children}
    </Typography>
  )
}

export default ProfileTabs