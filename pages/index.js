export default function Home() {
  return (
    <div style={{ 
      padding: '2rem', 
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      color: 'white',
      minHeight: '100vh'
    }}>
      <h1>📚 GitHub New Repo Test</h1>
      <p>Repository Type: new</p>
      <p>Created at: 2025-11-19T12:14:48.400Z</p>
      <p>Sandbox ID: github-new-1763554488399</p>
      <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}>
        <h2>✅ GitHub Mode:</h2>
        <p>This creates a new GitHub repository</p>
        <p>Benefits: Isolated project, clean start</p>
      </div>
    </div>
  );
}