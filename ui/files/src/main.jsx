// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )



// src/index.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { styled } from '@mui/system';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box, Grid, Card, CardContent, Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import Chart from 'react-apexcharts';
import styles from './styles.module.css';
import Header from './Header.jsx';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Footer from './Footer.jsx';

const Root = styled('div')({
  minHeight: '100vh',
  backgroundColor: '#f5f5f5',
  display: 'flex',
  flexDirection: 'column',
});

const SidebarBox = styled(Box)({
  minWidth: 260,
  maxWidth: 320,
  background: '#f7f8fa',
  borderRight: '1px solid #e0e0e0',
  height: '100%',
  boxSizing: 'border-box',
});

const PlacementDashboard = () => {
  const [sidebarOpen] = React.useState(true);
  const [exportFormat, setExportFormat] = React.useState('CSV');

  const placementTrendData = {
    options: {
      chart: { id: 'placement-trend' },
      xaxis: { categories: ['2022-2023', '2023-2024', '2024-2025'] },
      yaxis: { title: { text: 'Percentage' } },
    },
    series: [{ name: 'Placement %', data: [75, 78, 82] }],
  };

  const branchComparisonData = {
    options: {
      chart: { id: 'branch-comparison' },
      xaxis: { categories: [
        'Computer Science and Engineering',
        'Electronics and Communication Engineering',
        'Electrical Engineering',
        'Mechanical Engineering',
        'Civil Engineering',
      ] },
      yaxis: { title: { text: 'Placement Percentage (%)' } },
      colors: ['#26a69a', '#42a5f5', '#7e57c2', '#ffd600', '#ab47bc'],
      dataLabels: { enabled: true, formatter: (val) => `${val.toFixed(1)}%` },
    },
    series: [
      {
        name: 'Placement %',
        data: [60.8, 62.1, 70.8, 63.8, 70.7],
      },
    ],
  };

  const industryDistributionData = {
    options: {
      chart: { type: 'donut' },
      labels: [
        'Manufacturing',
        'Banking and Finance',
        'Analytics',
        'Consulting',
        'E-commerce',
        'Information Technology',
        'Healthcare',
        'Software Services',
      ],
      legend: { position: 'right' },
    },
    series: [21.5, 8.3, 18.9, 16.2, 13, 9.4, 4.4, 8.3],
  };

  const [selectedYear, setSelectedYear] = React.useState('All Years');
  const packageDistributionData = {
    options: {
      chart: { type: 'bar' },
      xaxis: { categories: [1,2,3,4,5,6,7,8,9,10,12,14,16,18,20,22,24,26,28,30,32,34] },
      yaxis: { title: { text: 'Number of Students' } },
      annotations: {
        yaxis: [
          {
            y: 7.55,
            borderColor: '#FF4560',
            label: {
              borderColor: '#FF4560',
              style: { color: '#fff', background: '#FF4560' },
              text: 'Average Package',
            },
          },
        ],
      },
    },
    series: [
      {
        name: 'Package Distribution',
        data: [50, 120, 200, 300, 400, 350, 250, 200, 150, 100, 80, 60, 40, 30, 20, 10, 5, 2, 1, 1, 1, 1],
      },
    ],
  };
  const yearOptions = ['All Years', '2022-2023', '2023-2024', '2024-2025'];

  const academicYears = ['2022-2023', '2023-2024', '2024-2025'];
  const branches = [
    'Computer Science and Engineering',
    'Electronics and Communication Engineering',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
  ];

  const topCompanies = [
    { company: 'FinBank', offers: 55, avg: 12.44, high: 22.37, industry: 'Banking and Finance' },
    { company: 'GlobalSoft', offers: 53, avg: 11.02, high: 16.91, industry: 'E-commerce' },
    { company: 'TechCorp', offers: 50, avg: 11.57, high: 19.55, industry: 'Consulting' },
    { company: 'ConsultPro', offers: 46, avg: 11.57, high: 20.67, industry: 'Manufacturing' },
    { company: 'DataMinds', offers: 45, avg: 12.72, high: 20.19, industry: 'Analytics' },
    { company: 'WebGiants', offers: 30, avg: 6.06, high: 11.89, industry: 'Manufacturing' },
    { company: 'MicroTech', offers: 30, avg: 6.82, high: 12.1, industry: 'Banking and Finance' },
    { company: 'AILabs', offers: 25, avg: 5.42, high: 9.77, industry: 'Healthcare' },
    { company: 'AnalyticsHub', offers: 23, avg: 6.66, high: 10.43, industry: 'Analytics' },
    { company: 'CloudServe', offers: 20, avg: 5.41, high: 10.02, industry: 'Information Technology' },
  ];

  return (
    <Root>
      <Header />
      <Box display="flex" flexDirection="row" flexGrow={1}>
        <SidebarBox>
          <List>
            {['App', 'Branch Statistics', 'Company History', 'Dashboard', 'Eligibility Explorer', 'Industry Analysis'].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Box p={2}>
            <Typography variant="subtitle1" fontWeight={600} gutterBottom>Dashboard Filters</Typography>
            <Typography variant="body2" fontWeight={500} gutterBottom>Select Academic Years</Typography>
            <Autocomplete
              multiple
              options={academicYears}
              defaultValue={academicYears}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip color="primary" variant="filled" label={option} {...getTagProps({ index })} />
                ))
              }
              renderInput={(params) => (
                <TextField {...params} variant="outlined" size="small" />
              )}
              sx={{ mb: 2 }}
            />
            <Typography variant="body2" fontWeight={500} gutterBottom>Select Branches</Typography>
            <Autocomplete
              multiple
              options={branches}
              defaultValue={branches}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip color="primary" variant="filled" label={option} {...getTagProps({ index })} />
                ))
              }
              renderInput={(params) => (
                <TextField {...params} variant="outlined" size="small" />
              )}
            />
          </Box>
        </SidebarBox>
        <Box flexGrow={1} p={2}>
          <Paper
            elevation={0}
            sx={{
              p: 0,
              borderRadius: 8,
              boxShadow: 'none',
              mt: 3,
              mb: 3,
              mx: 'auto',
              width: '100%',
              background: '#fff'
            }}
          >
            <Typography variant="h4" gutterBottom sx={{ p: 4, pb: 0 }}>Placement Dashboard</Typography>
            <Typography variant="body2" color="textSecondary" mb={3} sx={{ px: 4 }}>
              This dashboard provides an overview of the college placement statistics. Use the filters below to customize the view.
            </Typography>
            {/* Key Metrics Row */}
            <Grid container spacing={2} sx={{ width: '100%', marginBottom: 3, px: 4 }} justifyContent="space-between">
              <Grid item xs={12} sm={6} md={2.8}>
                <Card elevation={0} sx={{ p: 2, width: '100%', boxShadow: 'none', border: 'none' }}>
                  <Typography variant="subtitle2" color="textSecondary">Average Placement %</Typography>
                  <Typography variant="h5" fontWeight={700}>78.8%</Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={2.8}>
                <Card elevation={0} sx={{ p: 2, width: '100%', boxShadow: 'none', border: 'none' }}>
                  <Typography variant="subtitle2" color="textSecondary">Average Package</Typography>
                  <Typography variant="h5" fontWeight={700}>₹7.55 LPA</Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={2.8}>
                <Card elevation={0} sx={{ p: 2, width: '100%', boxShadow: 'none', border: 'none' }}>
                  <Typography variant="subtitle2" color="textSecondary">Highest Package</Typography>
                  <Typography variant="h5" fontWeight={700}>₹34.84 LPA</Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={2.8}>
                <Card elevation={0} sx={{ p: 2, width: '100%', boxShadow: 'none', border: 'none' }}>
                  <Typography variant="subtitle2" color="textSecondary">Total Offers</Typography>
                  <Typography variant="h5" fontWeight={700}>1925</Typography>
                </Card>
              </Grid>
            </Grid>
            <Grid container spacing={0} sx={{ width: '100%', m: 0, p: 0 }}>
              <Grid item xs={12} md={6} sx={{ p: 0 }}>
                <Card sx={{ width: '100%', boxShadow: 'none', borderRadius: 0 }}>
                  <CardContent sx={{ p: 0 }}>
                    <Typography variant="h6" sx={{ p: 2 }}>Yearly Placement Percentage Trend</Typography>
                    <Chart options={placementTrendData.options} series={placementTrendData.series} type="line" width="100%" height={350} />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} sx={{ p: 0 }}>
                <Card sx={{ width: '100%', boxShadow: 'none', borderRadius: 0 }}>
                  <CardContent sx={{ p: 0 }}>
                    <Typography variant="h6" sx={{ p: 2 }}>Branch-wise Placement Comparison</Typography>
                    <Chart options={branchComparisonData.options} series={branchComparisonData.series} type="bar" width="100%" height={350} />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            {/* Placement Distribution Section */}
            <Typography variant="h5" sx={{ p: 4, pb: 0 }}>Placement Distribution</Typography>
            <Grid container spacing={2} sx={{ width: '100%', m: 0, p: 0, mt: 0 }}>
              <Grid item xs={12} md={6} sx={{ p: 0 }}>
                <Card sx={{ width: '100%', boxShadow: 'none', borderRadius: 0 }}>
                  <CardContent sx={{ p: 0 }}>
                    <Typography variant="h6" sx={{ p: 2 }}>Industry-wise Placement Distribution</Typography>
                    <Chart options={industryDistributionData.options} series={industryDistributionData.series} type="donut" width="100%" height={350} />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} sx={{ p: 0 }}>
                <Card sx={{ width: '100%', boxShadow: 'none', borderRadius: 0 }}>
                  <CardContent sx={{ p: 0 }}>
                    <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ p: 2, pb: 0 }}>
                      <Typography variant="h6">Package Distribution</Typography>
                      <TextField
                        select
                        size="small"
                        value={selectedYear}
                        onChange={e => setSelectedYear(e.target.value)}
                        variant="outlined"
                        sx={{ minWidth: 160 }}
                      >
                        {yearOptions.map(year => (
                          <MenuItem key={year} value={year}>{year}</MenuItem>
                        ))}
                      </TextField>
                    </Box>
                    <Chart options={packageDistributionData.options} series={packageDistributionData.series} type="bar" width="100%" height={350} />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            {/* Top Recruiting Companies Section */}
            <Typography variant="h5" sx={{ p: 4, pb: 0 }}>Top Recruiting Companies</Typography>
            <Paper elevation={0} sx={{ width: '100%', overflowX: 'auto', boxShadow: 'none', borderRadius: 2, mb: 4 }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Company</TableCell>
                    <TableCell>Total Offers</TableCell>
                    <TableCell>Average Package (LPA)</TableCell>
                    <TableCell>Highest Package (LPA)</TableCell>
                    <TableCell>Industry</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {topCompanies.map((row, idx) => (
                    <TableRow key={idx}>
                      <TableCell>{row.company}</TableCell>
                      <TableCell>{row.offers}</TableCell>
                      <TableCell>{row.avg}</TableCell>
                      <TableCell>{row.high}</TableCell>
                      <TableCell>{row.industry}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
            {/* Export Data Section */}
            <Typography variant="h5" sx={{ p: 4, pb: 0 }}>Export Data</Typography>
            <Box sx={{ px: 4, pb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
              <RadioGroup
                row
                value={exportFormat}
                onChange={e => setExportFormat(e.target.value)}
                sx={{ mr: 2 }}
              >
                <FormControlLabel value="CSV" control={<Radio />} label="CSV" />
                <FormControlLabel value="Excel" control={<Radio />} label="Excel" />
              </RadioGroup>
              <Button variant="contained" color="primary">Export Dashboard Data</Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Root>
  );
};

createRoot(document.getElementById('root')).render(<><PlacementDashboard /><Footer /></>);
