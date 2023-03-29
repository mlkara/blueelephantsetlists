import './Logo.css';

const logoPhoto = new URL("https://i.imgur.com/srwxbTg.png")

export default function Logo() {
  return (
    <div className="Logo">
      <h3>Logo</h3>
      <img src={logoPhoto} />
    </div>
  );
}
