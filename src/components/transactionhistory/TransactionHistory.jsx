import { table, head, tbody } from "./TransactionHistory.module.css";

export default function TransactionHistory({ transactions }) {
  return (
    <table className={table}>
      <thead className={head}>
        <tr className="head">
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={tbody}>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
