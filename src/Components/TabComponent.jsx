import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabComponent({ tabs }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
        <Tabs indicatorColor='transparent'
        sx={{fontFamily:"inter", minHeight: "32px",}} value={value} onChange={handleChange} aria-label="custom tabs example">
          {tabs.map((tab, index) => (
            <Tab sx={{
                fontFamily:"inter",
                textTransform: "capitalize",
                fontSize: "16px",
                fontWeight: "400",
                color: "#000",
                minWidth: "42px",
                marginRight: "15px",
                position: "relative",
                minHeight: "32px",
                padding: "5px 14px",
                '&.Mui-selected': {
                  borderBottom: "2px solid #0F91D2",
                  fontWeight: "600",
                },
            }} key={index} label={tab.label} {...a11yProps(index)} />
          ))}
        </Tabs>
      </Box>
      {tabs.map((tab, index) => (
        <CustomTabPanel sx={{fontFamily:"inter"}} key={index} value={value} index={index}>
          {tab.content}
        </CustomTabPanel>
      ))}
    </Box>
  );
}



