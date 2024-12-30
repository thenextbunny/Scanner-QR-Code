import QRCodeReader from "../app/components/qr-code";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <QRCodeReader />
    </div>
  );
}
