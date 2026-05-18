
export default function Header() {
  const isLogin = true;

  return (
    <header>
      {isLogin ? (
        <>
          <button>bascket</button>
          <button>profile</button>
        </>
      ) : (
        <button>dashboard</button>
      )}
    </header>
  );
}
// conditional rendering
