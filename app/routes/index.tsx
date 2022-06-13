const styles = {
  fontFamily: 'system-ui, sans-serif',
  lineHeight: '1.4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  background: '#121123',
  color: 'white',
};

export default function Index(): JSX.Element {
  return (
    <div style={styles}>
      <h1>Hello World</h1>
    </div>
  );
}
