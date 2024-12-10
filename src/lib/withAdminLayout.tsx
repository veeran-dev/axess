import AdminLayout from '@/components/AdminLayout';
import React from 'react';

export default function withAdminLayout<T extends object>(PageComponent: React.ComponentType<T>) {
  const WrappedWithAdminLayout: React.FC<T> = (props) => {
    return (
      <AdminLayout>
        <PageComponent {...props} />
      </AdminLayout>
    );
  };

  return WrappedWithAdminLayout;
}
