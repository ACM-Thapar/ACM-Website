import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Chip,
  IconButton,
  Link,
  Box,
  useMediaQuery,
  useTheme,
  Stack,
  Tooltip
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import ArticleIcon from '@mui/icons-material/Article';
import CodeIcon from '@mui/icons-material/Code';
import LaunchIcon from '@mui/icons-material/Launch';

const DifficultyChip = ({ difficulty }) => {
  let backgroundColor = '#e0e0e0';
  let color = '#333';
  let borderColor = '#d0d0d0';
  
  if (difficulty === 'Easy') {
    backgroundColor = 'rgba(76, 175, 80, 0.1)';
    color = '#4caf50';
    borderColor = 'rgba(76, 175, 80, 0.3)';
  } else if (difficulty === 'Medium') {
    backgroundColor = 'rgba(255, 167, 38, 0.1)';
    color = '#ffa726';
    borderColor = 'rgba(255, 167, 38, 0.3)';
  } else if (difficulty === 'Hard') {
    backgroundColor = 'rgba(239, 83, 80, 0.1)';
    color = '#ef5350';
    borderColor = 'rgba(239, 83, 80, 0.3)';
  }

  return (
    <Chip
      label={difficulty}
      size="small"
      sx={{
        backgroundColor,
        color,
        fontWeight: '700',
        minWidth: '80px',
        fontFamily: 'Poppins, sans-serif',
        fontSize: '0.75rem',
        border: `1.5px solid ${borderColor}`,
        letterSpacing: '0.03em'
      }}
    />
  );
};

// Mobile card view for each problem
const MobileProblemCard = ({ row, status, toggleStatus }) => (
  <Box 
    sx={{
      p: 2.5,
      borderBottom: '1px solid #f0f0f0',
      backgroundColor: status.completed ? 'rgba(21, 166, 221, 0.03)' : '#fff',
      transition: 'all 0.2s ease',
      '&:hover': {
        backgroundColor: status.completed ? 'rgba(21, 166, 221, 0.05)' : 'rgba(21, 166, 221, 0.02)'
      },
      '&:last-child': { borderBottom: 'none' }
    }}
  >
    {/* Checkbox and Title Row */}
    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 2 }}>
      <Checkbox
        checked={status.completed}
        onChange={() => toggleStatus(row.id)}
        icon={<RadioButtonUncheckedIcon sx={{ color: '#d0d0d0', fontSize: 24 }} />}
        checkedIcon={<CheckCircleIcon sx={{ color: '#15A6DD', fontSize: 24 }} />}
        sx={{ 
          p: 0, 
          mt: 0.5,
          flexShrink: 0,
          '& .MuiSvgIcon-root': {
            transition: 'all 0.2s ease'
          }
        }}
      />
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Link
          href={row.link}
          target="_blank"
          rel="noopener noreferrer"
          underline="none"
          sx={{ 
            color: '#020E13',
            fontWeight: '600',
            fontSize: '0.95rem',
            fontFamily: 'Poppins, sans-serif',
            display: 'block',
            transition: 'color 0.2s ease',
            wordBreak: 'break-word',
            lineHeight: 1.5,
            '&:hover': { 
              color: '#15A6DD'
            }
          }}
        >
          {row.problem}
        </Link>
      </Box>
    </Box>
    
    {/* Difficulty and Action Buttons Row */}
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      gap: 2,
      pl: 4.5  // Align with the text above (checkbox width + gap)
    }}>
      <DifficultyChip difficulty={row.difficulty} />
      
      <Stack direction="row" spacing={1.5}>
        {(row.resource_plus || row.resource_free) && (
          <Tooltip title="View Resource" arrow>
            <IconButton
              component="a"
              href={row.resource_plus || row.resource_free}
              target="_blank"
              size="small"
              sx={{ 
                color: '#15A6DD',
                bgcolor: 'rgba(21, 166, 221, 0.08)',
                borderRadius: '50%',
                width: 40,
                height: 40,
                p: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
                '&:hover': {
                  bgcolor: 'rgba(21, 166, 221, 0.15)',
                  transform: 'scale(1.1)'
                }
              }}
            >
              <ArticleIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Tooltip>
        )}
        
        <Tooltip title="Practice on LeetCode" arrow>
          <IconButton
            component="a"
            href={row.link}
            target="_blank"
            size="small"
            sx={{ 
              color: '#2041B5',
              bgcolor: 'rgba(32, 65, 181, 0.08)',
              borderRadius: '50%',
              width: 40,
              height: 40,
              p: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              '&:hover': {
                bgcolor: 'rgba(32, 65, 181, 0.15)',
                transform: 'scale(1.1)'
              }
            }}
          >
            <CodeIcon sx={{ fontSize: 20 }} />
          </IconButton>
        </Tooltip>
      </Stack>
    </Box>
  </Box>
);

const DSATable = ({ problems, useProgress }) => {
  const { toggleStatus, getProgress } = useProgress;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Mobile view
  if (isMobile) {
    return (
      <Box sx={{ backgroundColor: '#fff' }}>
        {problems.map((row) => {
          const status = getProgress(row.id);
          return (
            <MobileProblemCard 
              key={row.id}
              row={row}
              status={status}
              toggleStatus={toggleStatus}
            />
          );
        })}
      </Box>
    );
  }

  // Desktop view
  return (
    <TableContainer sx={{ backgroundColor: '#fff', boxShadow: 'none' }}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow 
            sx={{ 
              background: 'linear-gradient(135deg, #FAFAFA 0%, #F5F5F5 100%)',
              '& th': { 
                color: '#666',
                fontWeight: '700',
                fontSize: '0.8rem',
                fontFamily: 'Poppins, sans-serif',
                paddingY: 2.5,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                borderBottom: '2px solid #e0e0e0'
              } 
            }}
          >
            <TableCell width="5%" align="center">Status</TableCell>
            <TableCell width="50%">Problem</TableCell>
            <TableCell width="15%" align="center">Resource</TableCell>
            <TableCell width="15%" align="center">Practice</TableCell>
            <TableCell width="15%" align="center">Difficulty</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {problems.map((row, index) => {
            const status = getProgress(row.id);

            return (
              <TableRow
                key={row.id}
                sx={{
                  '&:hover': { 
                    backgroundColor: 'rgba(21, 166, 221, 0.04)',
                    transition: 'background-color 0.2s ease',
                    '& .problem-link': {
                      color: '#15A6DD'
                    }
                  },
                  '& td': { 
                    color: '#020E13',
                    borderBottom: '1px solid #f5f5f5',
                    fontFamily: 'Poppins, sans-serif',
                    paddingY: 2.5
                  },
                  backgroundColor: status.completed ? 'rgba(21, 166, 221, 0.03)' : 'transparent',
                }}
              >
                <TableCell align="center">
                  <Checkbox
                    checked={status.completed}
                    onChange={() => toggleStatus(row.id)}
                    icon={<RadioButtonUncheckedIcon sx={{ color: '#d0d0d0', fontSize: 24 }} />}
                    checkedIcon={<CheckCircleIcon sx={{ color: '#15A6DD', fontSize: 24 }} />}
                    sx={{
                      '&:hover': {
                        backgroundColor: 'transparent'
                      },
                      '& .MuiSvgIcon-root': {
                        transition: 'all 0.2s ease'
                      }
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Link
                    href={row.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    className="problem-link"
                    sx={{ 
                      color: '#020E13',
                      fontWeight: '500',
                      fontSize: '0.95rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      transition: 'color 0.2s ease',
                      '&:hover': { 
                        color: '#15A6DD',
                        '& .launch-icon': {
                          opacity: 1,
                          transform: 'translateX(0)'
                        }
                      }
                    }}
                  >
                    {row.problem}
                    <LaunchIcon 
                      className="launch-icon"
                      sx={{ 
                        fontSize: 16, 
                        opacity: 0,
                        transform: 'translateX(-4px)',
                        transition: 'all 0.2s ease'
                      }} 
                    />
                  </Link>
                </TableCell>
                <TableCell align="center">
                  {(row.resource_plus || row.resource_free) ? (
                    <Tooltip title="View Resource" arrow>
                      <IconButton
                        href={row.resource_plus || row.resource_free}
                        target="_blank"
                        size="small"
                        sx={{ 
                          color: '#15A6DD',
                          bgcolor: 'rgba(21, 166, 221, 0.08)',
                          borderRadius: 2,
                          px: 1.5,
                          py: 0.75,
                          transition: 'all 0.2s ease',
                          '&:hover': {
                            bgcolor: 'rgba(21, 166, 221, 0.15)',
                            transform: 'translateY(-2px)'
                          }
                        }}
                      >
                        <ArticleIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  ) : (
                    <Box sx={{ color: '#d0d0d0' }}>—</Box>
                  )}
                </TableCell>
                <TableCell align="center">
                  <Tooltip title="Practice on LeetCode" arrow>
                    <IconButton
                      href={row.link}
                      target="_blank"
                      size="small"
                      sx={{ 
                        color: '#2041B5',
                        bgcolor: 'rgba(32, 65, 181, 0.08)',
                        borderRadius: 2,
                        px: 1.5,
                        py: 0.75,
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          bgcolor: 'rgba(32, 65, 181, 0.15)',
                          transform: 'translateY(-2px)'
                        }
                      }}
                    >
                      <CodeIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </TableCell>
                <TableCell align="center">
                  <DifficultyChip difficulty={row.difficulty} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DSATable;
