import List from "./List";
import "./Main.css";

export default function Main({ children }) {
  return (
    <main className="wrapper">
      <List>
        <List.Item href="../../apps/chef-claude/">Chef Claude</List.Item>
        <List.Item href="../../apps/meme-generator/">Meme Generator</List.Item>
        <List.Item href="../../apps/tenzies/">Tenzies</List.Item>
        <List.Item href="../../apps/assembly-endgame/">
          Assembly Endgame
        </List.Item>
        <List.Item href="../../apps/mmdb/">MMDb</List.Item>
      </List>

      {children}
    </main>
  );
}
