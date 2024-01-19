import React from 'react';
import PendingApprovalTable from '../../../../components/PendingApprovalTable';
const PendingApprovals = () => {
  return (
    <div className="container sm:mx-auto mt-7">
      <h1 className="text-3xl font-serif  m-8 mb-4">Pending Approvals</h1>
      <div className="mx-auto mb-9 h-32 w-64">
      <img className='rounded-full' src='/PublicHolidaysImages/approval-mark-product-advantage-rating-reviews-meeting-requirements-high-quality-sign-quality-control-sign-quality-assurance-sign-concept_335657-164.webp' alt="Holiday Screenshot" />
      </div>
      <PendingApprovalTable />
    </div>
  );
};

export default PendingApprovals;