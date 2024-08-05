import React from 'react';
import { useParams } from 'react-router-dom';

const loadComponent = (bootcampName) => {
  switch (bootcampName) {
    case 'web-development':
      return React.lazy(() => import('../../../Bootcamps/BootcampIndivdualPages/WebDev'));
    case 'app-development':
      return React.lazy(() => import('../../../Bootcamps/BootcampIndivdualPages/AppDev'));
    case 'ai-ml-learning':
      return React.lazy(() => import('../../../Bootcamps/BootcampIndivdualPages/AiMl'));
      case 'ui-ux-classes':
        return React.lazy(() => import('../../../Bootcamps/BootcampIndivdualPages/UiUx'));
    case 'academic-classes':
      return React.lazy(() => import('../../../Bootcamps/BootcampIndivdualPages/AcademicClasses'));
    default:
      return null; 
  }
};

const DynamicBootcamp = () => {
  const { bootcampName } = useParams();
  console.log(bootcampName);
  const BootcampComponent = loadComponent(bootcampName);

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      {BootcampComponent ? <BootcampComponent /> : <div>Bootcamp not found</div>}
    </React.Suspense>
  );
};

export default DynamicBootcamp;
