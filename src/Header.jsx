export default function Header() {
  const isLogin = true;

  //   if (isLogin) {
  //     return (
  //       <header>
  //         <button>Login</button>
  //       </header>
  //     );
  //   }
  //   return (
  //     <header>
  //       <button>profile</button>
  //     </header>
  //   );
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
