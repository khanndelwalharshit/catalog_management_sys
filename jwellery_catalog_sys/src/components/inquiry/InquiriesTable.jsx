import React from 'react'

const InquiriesTable = () => {
  const data = [
    { id: 1, name: 'Harshit', email: 'harshit@example.com', message: 'Interested in diamond ring' },
    { id: 2, name: 'Sneha', email: 'sneha@example.com', message: 'Looking for wedding necklace' },
  ]

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full text-sm text-left border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Message</th>
          </tr>
        </thead>
        <tbody>
          {data.map((inquiry) => (
            <tr key={inquiry.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border">{inquiry.id}</td>
              <td className="py-2 px-4 border">{inquiry.name}</td>
              <td className="py-2 px-4 border">{inquiry.email}</td>
              <td className="py-2 px-4 border">{inquiry.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default InquiriesTable
