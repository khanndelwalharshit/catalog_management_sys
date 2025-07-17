// src/components/category/CategoryTable.jsx
import React from 'react'
import { Button } from '@/components/ui/button'

const CategoryTable = ({ data, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="border-b bg-slate-100 text-left">
            <th className="p-2">#</th>
            <th className="p-2">Name</th>
            <th className="p-2">Description</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 ? (
            data.map((category, index) => (
              <tr key={index} className="border-b hover:bg-slate-50">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{category.name}</td>
                <td className="p-2">{category.description}</td>
                <td className="p-2 space-x-2">
                  <Button size="sm" variant="outline" onClick={() => onEdit(category)}>
                    Edit
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => onDelete(category)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="p-4 text-center text-muted-foreground">
                No categories found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default CategoryTable
