export function Footer() {
  return (
    <footer
      dir="ltr"
      className="flex justify-center pt-5 md:pt-4 pb-5 align-center h-20px"
    >
      <p className="text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()}&nbsp; mohammed AlHuwimmel &nbsp; All rights
        reserved.
      </p>
    </footer>
  );
}
