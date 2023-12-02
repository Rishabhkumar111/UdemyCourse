export default function TabButtons({children, fun}) {
  return (
    <li>
      <button onClick={fun}>{children}</button>
    </li>
  );
}
