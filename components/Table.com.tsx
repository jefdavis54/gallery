import { Sty_TableContainer } from "./Table.sty";
import Link from "next/link";

interface Row {
  label: string;
  value: string;
  type?: string;
}
interface Props {
  header: string[];
  rows: Row[];
}
const Table = ({ rows, header }: Props) => {
  const tbodyRows = rows.map((row, rowIdx) => {
    let td_parsedValue = <td className="col-two">{row.value}</td>;
    if (row.type === "url") {
      let fixedWebsite = row.value;
      if (
        fixedWebsite.length > 1 &&
        !fixedWebsite.toLowerCase().startsWith("http")
      ) {
        fixedWebsite = "https://" + fixedWebsite;
      }
      td_parsedValue = (
        <td className="col-two">
          <Link href={fixedWebsite}>
            <a>{fixedWebsite}</a>
          </Link>
        </td>
      );
    }
    return (
      <tr key={"tbr_" + rowIdx}>
        <td className="col-one">{row.label}</td>
        {td_parsedValue}
      </tr>
    );
  });

  return (
    <Sty_TableContainer>
      <table>
        <caption>A table of details regarding this artwork</caption>
        <thead>
          <tr>
            {header.map((col, idx) => {
              return <th key={"thrh_" + idx}>{col}</th>;
            })}
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td colSpan={header.length}>
              * This collection of details comes from three separate objects
              that will correlate to tables in an external database eventually.
            </td>
          </tr>
        </tfoot>
        <tbody>{tbodyRows}</tbody>
      </table>
    </Sty_TableContainer>
  );
};

export { Table };
