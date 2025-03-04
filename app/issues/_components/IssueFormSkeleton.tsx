import React from 'react';
import { Box } from '@radix-ui/themes';
import { Skeleton } from '@/app/components';

const IssueFormSkeleton = () => {
  return (
    <Box className='max-w-xl'>
      <Skeleton height='2rem' />
      <Skeleton height='23rem' />
    </Box>
  )
}

export default IssueFormSkeleton
