export default function TabButtons({children, fun, isSelected}) {
  return (
    <li>
      <button className={isSelected ? 'active':undefined} onClick={fun}>{children}</button>
    </li>
  );
}
