import React, { useState } from 'react'
import InquiriesModal from '@/components/inquiry/InquiriesModal'
import InquiriesTable from '@/components/inquiry/InquiriesTable'

const Inquiries = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Inquiries</h1>
        <InquiriesModal isOpen={open} onOpenChange={setOpen} />
      </div>
      <InquiriesTable />
    </div>
  )
}

export default Inquiries
