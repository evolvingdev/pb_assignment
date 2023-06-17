import * as React from 'react';
import { useState, useEffect } from 'react';
import "./Listview.css";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import axios from 'axios';


export default function Listview() {

  const [listData, setListData] = useState([])
  useEffect(() => {
    // listapi();
    axios.get('https://reqres.in/api/users?page=1&per_page=5')
      .then(function (response) {
        // handle success
        console.log(response)
        setListData(response.data.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [])

  const fetchList = (page) => {
    // listapi();
    axios.get(`https://reqres.in/api/users?page=${page}&per_page=5`)
      .then(function (response) {
        // handle success
        console.log(response)
        setListData(response.data.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  return (
    <>
      <div className='parentContainer'>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {listData.map((item, idx) => {
            return <>
                <ListItem alignItems="flex-start" style={{ "cursor": "pointer" }} onClick={() => {
                  localStorage.setItem("userDetails", JSON.stringify(item)
                  )
                }}>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={item.avatar} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={`${item.first_name} ${item.last_name}`}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {`${item.email}`}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem >
              <Divider variant="inset" component="li" />
            </>
          })}
        </List>

        <Stack spacing={2} style={{ marginTop: '40px' }}>
          <Pagination count={3} onChange={(event, value) => {
            fetchList(value)
          }} />
        </Stack>
      </div >
    </>

  );
}