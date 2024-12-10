import PublicLayout from '@/components/PublicLayout';
import React from 'react';

export default function withPublicLayout<T extends object>(PageComponent: React.ComponentType<T>) {
  const WrappedWithPublicLayout: React.FC<T> = (props) => {
    return (
      <PublicLayout>
        <PageComponent {...props} />
      </PublicLayout>
    );
  };

  return WrappedWithPublicLayout;
}
