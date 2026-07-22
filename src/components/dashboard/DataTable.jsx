import { Skeleton } from '@/components/ui/Loader';
import EmptyState from '@/components/ui/EmptyState';
import './DataTable.css';

export default function DataTable({ columns, data, loading, emptyMessage = 'No records found.', renderRow }) {
  if (loading) {
    return (
      <div className="data-table-wrapper">
        <table className="data-table">
          <thead>
            <tr>{columns.map((col) => <th key={col.key}>{col.label}</th>)}</tr>
          </thead>
          <tbody>
            {Array.from({ length: 4 }).map((_, i) => (
              <tr key={i}>
                {columns.map((col) => (
                  <td key={col.key}><Skeleton height="14px" /></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return <EmptyState title="Nothing here yet" description={emptyMessage} />;
  }

  const defaultRenderRow = (row) => (
    <tr key={row.id}>
      {columns.map((col) => (
        <td key={col.key}>{row[col.key]}</td>
      ))}
    </tr>
  );

  return (
    <div className="data-table-wrapper">
      <table className="data-table">
        <thead>
          <tr>{columns.map((col) => <th key={col.key}>{col.label}</th>)}</tr>
        </thead>
        <tbody>
          {data.map((row) => renderRow ? renderRow(row) : defaultRenderRow(row))}
        </tbody>
      </table>
    </div>
  );
}
