import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username || !password || username.includes(' ')) {
      setErrorMessage('Vui lòng kiểm tra lại thông tin');
      return;
    }

    setErrorMessage('');
    console.log({
      username,
      password,
    });
  };

  return (
    <main className="page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Đăng nhập</h1>

        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        {errorMessage && <p className="error">{errorMessage}</p>}

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default App;
