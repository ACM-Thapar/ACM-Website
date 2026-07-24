import React, { useMemo } from 'react';
import {
  Container,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  LinearProgress,
  Grid,
  Paper
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DSATable from './DSATable';
import { useDSAProgress } from '../../Hooks/useDSAProgress';
import dsaData from '../../data/dsa-questions.json';

const DSASheet = () => {
  const progressHook = useDSAProgress();
  const { getProgress } = progressHook;

  // Calculate detailed statistics
  const stats = useMemo(() => {
    let total = 0;
    let completed = 0;
    let easy = 0, medium = 0, hard = 0;
    let easyCompleted = 0, mediumCompleted = 0, hardCompleted = 0;

    dsaData.forEach(step => {
      step.lectures.forEach(lecture => {
        lecture.problems.forEach(problem => {
          total++;
          const isCompleted = getProgress(problem.id).completed;
          
          if (isCompleted) completed++;
          
          if (problem.difficulty === 'Easy') {
            easy++;
            if (isCompleted) easyCompleted++;
          } else if (problem.difficulty === 'Medium') {
            medium++;
            if (isCompleted) mediumCompleted++;
          } else if (problem.difficulty === 'Hard') {
            hard++;
            if (isCompleted) hardCompleted++;
          }
        });
      });
    });

    return { 
      total, 
      completed, 
      percentage: total === 0 ? 0 : Math.round((completed / total) * 100),
      easy,
      medium,
      hard,
      easyCompleted,
      mediumCompleted,
      hardCompleted
    };
  }, [progressHook.progress]);

  return (
    <Box sx={{ 
      background: 'linear-gradient(180deg, #F8FCFF 0%, #FFFFFF 100%)',
      minHeight: '100vh', 
      paddingTop: '5rem', 
      paddingBottom: '4rem' 
    }}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ mb: 6, textAlign: 'center', position: 'relative' }}>
          {/* Decorative background */}
          <Box 
            sx={{ 
              position: 'absolute',
              top: -100,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 400,
              height: 400,
              background: 'radial-gradient(circle, rgba(21, 166, 221, 0.1) 0%, transparent 70%)',
              borderRadius: '50%',
              zIndex: 0,
              display: { xs: 'none', md: 'block' }
            }} 
          />
          
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.8, mb: 3 }}>
              <Box sx={{ 
                width: 20, 
                height: 20, 
                borderRadius: '50%', 
                bgcolor: '#8FDAF5',
                boxShadow: '0 4px 12px rgba(143, 218, 245, 0.4)'
              }} />
              <Box sx={{ 
                width: 20, 
                height: 20, 
                borderRadius: '50%', 
                bgcolor: '#15A6DD',
                boxShadow: '0 4px 12px rgba(21, 166, 221, 0.4)'
              }} />
              <Box sx={{ 
                width: 20, 
                height: 20, 
                borderRadius: '50%', 
                bgcolor: '#2041B5',
                boxShadow: '0 4px 12px rgba(32, 65, 181, 0.4)'
              }} />
            </Box>
            
            <Typography 
              variant="h1" 
              sx={{
                fontFamily: 'Lexend Deca, sans-serif',
                fontWeight: 800,
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                background: 'linear-gradient(135deg, #2041B5 0%, #15A6DD 50%, #8FDAF5 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.03em',
                mb: 2,
                lineHeight: 1.1
              }}
            >
              DSA Mastery
            </Typography>
            
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#9AAEBC',
                fontFamily: 'Poppins, sans-serif',
                fontSize: { xs: '1rem', md: '1.125rem' },
                fontWeight: 400,
                maxWidth: 500,
                mx: 'auto'
              }}
            >
              Track your journey to becoming a algorithms expert
            </Typography>
          </Box>
        </Box>

        {/* Modern Stats Dashboard */}
        <Paper
          elevation={0}
          sx={{
            mb: 6,
            p: { xs: 3, md: 4 },
            borderRadius: 4,
            background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FCFF 100%)',
            border: '1px solid rgba(21, 166, 221, 0.1)',
            boxShadow: '0 8px 32px rgba(21, 166, 221, 0.08)'
          }}
        >
          {/* Main Progress Circle */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Box sx={{ 
              position: 'relative', 
              display: 'inline-block',
              mb: 2
            }}>
              {/* Circular progress indicator */}
              <Box
                sx={{
                  position: 'relative',
                  width: { xs: 140, md: 180 },
                  height: { xs: 140, md: 180 },
                  borderRadius: '50%',
                  background: `conic-gradient(
                    from 0deg,
                    #2041B5 0%,
                    #15A6DD ${stats.percentage}%,
                    #e8e8e8 ${stats.percentage}%,
                    #e8e8e8 100%
                  )`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    width: '85%',
                    height: '85%',
                    borderRadius: '50%',
                    background: '#fff'
                  }
                }}
              >
                <Box sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                  <Typography 
                    sx={{ 
                      fontFamily: 'Lexend Deca, sans-serif',
                      fontSize: { xs: '2.5rem', md: '3.5rem' },
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, #2041B5 0%, #15A6DD 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      lineHeight: 1
                    }}
                  >
                    {stats.percentage}%
                  </Typography>
                  <Typography 
                    sx={{ 
                      fontSize: '0.75rem',
                      color: '#9AAEBC',
                      fontWeight: 500,
                      fontFamily: 'Poppins, sans-serif',
                      mt: 0.5
                    }}
                  >
                    Complete
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Typography 
              variant="h5" 
              sx={{ 
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                color: '#020E13',
                mb: 0.5
              }}
            >
              {stats.completed} of {stats.total} Problems Solved
            </Typography>
            <Typography 
              sx={{ 
                fontSize: '0.9rem',
                color: '#9AAEBC',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              {stats.total - stats.completed} problems remaining
            </Typography>
          </Box>

          {/* Difficulty Breakdown - Commented out for now */}
          {/* <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Box sx={{ 
                p: 2.5,
                borderRadius: 3,
                background: 'linear-gradient(135deg, rgba(76, 175, 80, 0.08) 0%, rgba(76, 175, 80, 0.02) 100%)',
                border: '1px solid rgba(76, 175, 80, 0.2)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 24px rgba(76, 175, 80, 0.15)'
                }
              }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                  <Typography sx={{ 
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: '#4caf50',
                    fontFamily: 'Poppins, sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Easy
                  </Typography>
                  <CheckCircleOutlineIcon sx={{ color: '#4caf50', fontSize: 20 }} />
                </Box>
                <Typography sx={{ 
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#020E13',
                  fontFamily: 'Lexend Deca, sans-serif',
                  mb: 0.5
                }}>
                  {stats.easyCompleted}<span style={{ fontSize: '1.25rem', color: '#9AAEBC' }}>/{stats.easy}</span>
                </Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={stats.easy > 0 ? (stats.easyCompleted / stats.easy) * 100 : 0}
                  sx={{
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: 'rgba(76, 175, 80, 0.1)',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: '#4caf50',
                      borderRadius: 3
                    }
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box sx={{ 
                p: 2.5,
                borderRadius: 3,
                background: 'linear-gradient(135deg, rgba(255, 167, 38, 0.08) 0%, rgba(255, 167, 38, 0.02) 100%)',
                border: '1px solid rgba(255, 167, 38, 0.2)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 24px rgba(255, 167, 38, 0.15)'
                }
              }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                  <Typography sx={{ 
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: '#ffa726',
                    fontFamily: 'Poppins, sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Medium
                  </Typography>
                  <TrendingUpIcon sx={{ color: '#ffa726', fontSize: 20 }} />
                </Box>
                <Typography sx={{ 
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#020E13',
                  fontFamily: 'Lexend Deca, sans-serif',
                  mb: 0.5
                }}>
                  {stats.mediumCompleted}<span style={{ fontSize: '1.25rem', color: '#9AAEBC' }}>/{stats.medium}</span>
                </Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={stats.medium > 0 ? (stats.mediumCompleted / stats.medium) * 100 : 0}
                  sx={{
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: 'rgba(255, 167, 38, 0.1)',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: '#ffa726',
                      borderRadius: 3
                    }
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box sx={{ 
                p: 2.5,
                borderRadius: 3,
                background: 'linear-gradient(135deg, rgba(239, 83, 80, 0.08) 0%, rgba(239, 83, 80, 0.02) 100%)',
                border: '1px solid rgba(239, 83, 80, 0.2)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 24px rgba(239, 83, 80, 0.15)'
                }
              }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                  <Typography sx={{ 
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: '#ef5350',
                    fontFamily: 'Poppins, sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Hard
                  </Typography>
                  <TrendingUpIcon sx={{ color: '#ef5350', fontSize: 20 }} />
                </Box>
                <Typography sx={{ 
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: '#020E13',
                  fontFamily: 'Lexend Deca, sans-serif',
                  mb: 0.5
                }}>
                  {stats.hardCompleted}<span style={{ fontSize: '1.25rem', color: '#9AAEBC' }}>/{stats.hard}</span>
                </Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={stats.hard > 0 ? (stats.hardCompleted / stats.hard) * 100 : 0}
                  sx={{
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: 'rgba(239, 83, 80, 0.1)',
                    '& .MuiLinearProgress-bar': {
                      backgroundColor: '#ef5350',
                      borderRadius: 3
                    }
                  }}
                />
              </Box>
            </Grid>
          </Grid> */}
        </Paper>

        {/* Content Sections */}
        {dsaData.map((step, stepIndex) => (
          <Box key={stepIndex} sx={{ mb: 5 }}>
            <Box sx={{ 
              mb: 3,
              pb: 2,
              borderBottom: '3px solid',
              borderImage: 'linear-gradient(90deg, #15A6DD 0%, transparent 100%)',
              borderImageSlice: 1
            }}>
              <Typography 
                variant="h4" 
                sx={{
                  fontFamily: 'Lexend Deca, sans-serif',
                  fontWeight: 700,
                  fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
                  color: '#020E13'
                }}
              >
                {step.step}
              </Typography>
            </Box>

            {step.lectures.map((lecture, lectureIndex) => {
              const lectureTotal = lecture.problems.length;
              const lectureCompleted = lecture.problems.filter(p => getProgress(p.id).completed).length;
              const lecturePercentage = lectureTotal > 0 ? Math.round((lectureCompleted / lectureTotal) * 100) : 0;

              return (
                <Accordion
                  key={lectureIndex}
                  defaultExpanded={stepIndex === 0 && lectureIndex === 0}
                  sx={{
                    backgroundColor: '#fff',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                    mb: 2.5,
                    borderRadius: '12px !important',
                    border: '1px solid #f0f0f0',
                    overflow: 'hidden',
                    '&:before': { display: 'none' },
                    '&.Mui-expanded': { 
                      margin: '0 0 20px 0 !important',
                      boxShadow: '0 8px 24px rgba(21, 166, 221, 0.12)'
                    }
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: '#15A6DD', fontSize: 28 }} />}
                    sx={{
                      background: lecturePercentage === 100 
                        ? 'linear-gradient(135deg, rgba(76, 175, 80, 0.05) 0%, rgba(255,255,255,1) 100%)'
                        : 'linear-gradient(135deg, #FAFAFA 0%, #FFFFFF 100%)',
                      minHeight: { xs: 80, md: 70 },
                      '&.Mui-expanded': {
                        borderBottom: '2px solid #15A6DD',
                        minHeight: { xs: 80, md: 70 }
                      },
                      '& .MuiAccordionSummary-content': {
                        margin: '16px 0',
                        alignItems: 'flex-start'
                      }
                    }}
                  >
                    <Box sx={{ width: '100%', pr: { xs: 1, md: 2 } }}>
                      <Typography 
                        sx={{ 
                          fontWeight: 600,
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: { xs: '0.95rem', sm: '1.05rem', md: '1.125rem' },
                          color: '#020E13',
                          mb: { xs: 1.5, md: 0.5 },
                          lineHeight: 1.3,
                          wordBreak: 'break-word'
                        }}
                      >
                        {lecture.title}
                      </Typography>
                      <Box sx={{ 
                        display: 'flex', 
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: { xs: 'flex-start', sm: 'center' }, 
                        gap: { xs: 1, sm: 2 }
                      }}>
                        <Typography 
                          variant="caption" 
                          sx={{ 
                            color: '#9AAEBC',
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: { xs: '0.8rem', sm: '0.875rem' },
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {lectureCompleted}/{lectureTotal} completed
                        </Typography>
                        <Box sx={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: 1.5,
                          width: { xs: '100%', sm: 'auto' }
                        }}>
                          <Box sx={{ 
                            width: { xs: '100%', sm: 100 },
                            maxWidth: 150,
                            height: 4,
                            borderRadius: 2,
                            bgcolor: '#e8e8e8',
                            overflow: 'hidden'
                          }}>
                            <Box sx={{ 
                              width: `${lecturePercentage}%`,
                              height: '100%',
                              background: 'linear-gradient(90deg, #8FDAF5 0%, #15A6DD 100%)',
                              transition: 'width 0.3s ease'
                            }} />
                          </Box>
                          <Typography 
                            variant="caption" 
                            sx={{ 
                              color: '#15A6DD',
                              fontWeight: 600,
                              fontFamily: 'Poppins, sans-serif',
                              fontSize: { xs: '0.8rem', sm: '0.875rem' },
                              whiteSpace: 'nowrap'
                            }}
                          >
                            {lecturePercentage}%
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails sx={{ p: 0 }}>
                    <DSATable problems={lecture.problems} useProgress={progressHook} />
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default DSASheet;
